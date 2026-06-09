from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .models import UserProfile, Table, MenuItem, Order, OrderItem, Shift, Category
from django.db.models import Sum 
from django.utils import timezone
from datetime import timedelta


# =====================
# КИРИШ
# =====================
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        role = request.POST.get('role')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        if user:
            try:
                profile = UserProfile.objects.get(user=user)
                if profile.role == role:
                    login(request, user)
                    if role == 'admin':
                        return redirect('dashboard')
                    else:
                        return redirect('waiter')
                else:
                    return render(request, 'login.html', {'error': 'Роль туура эмес!'})
            except UserProfile.DoesNotExist:
                return render(request, 'login.html', {'error': 'Профиль табылган жок!'})
        else:
            return render(request, 'login.html', {'error': 'Логин же сырсөз туура эмес!'})

    return render(request, 'login.html')


# =====================
# ЧЫГУУ
# =====================
def logout_view(request):
    logout(request)
    return redirect('login')


# =====================
# ЖАРДАМЧЫ ФУНКЦИЯ
# =====================
def get_base_context(request):
    tables = Table.objects.all()
    menu_items = MenuItem.objects.all()
    categories = Category.objects.all()
    active_shift = Shift.objects.filter(status='open').first()
    return {
        'tables': tables,
        'menu_items': menu_items,
        'categories': categories,
        'active_shift': active_shift,
        'active_tables': tables.filter(status='busy').count(),
        'free_tables': tables.filter(status='free').count(),
        'menu_count': menu_items.count(),
    }


# =====================
# АДМИН ПАНЕЛИ
# =====================
@login_required
def dashboard_view(request):
    context = get_base_context(request)
    return render(request, 'dashboard.html', context)


# =====================
# ОФИЦИАНТ ПАНЕЛИ
# =====================
@login_required
def waiter_view(request):
    tables = Table.objects.all()
    menu_items = MenuItem.objects.all()
    categories = Category.objects.all()
    active_shift = Shift.objects.filter(status='open').first()

    # Официанттын өз заказдары
    my_orders = Order.objects.filter(
        waiter=request.user,
        status='open'
    )
    my_tables = [order.table.id for order in my_orders]

    context = {
        'tables': tables,
        'menu_items': menu_items,
        'categories': categories,
        'active_shift': active_shift,
        'active_tables': tables.filter(status='busy').count(),
        'free_tables': tables.filter(status='free').count(),
        'menu_count': menu_items.count(),
        'my_tables': my_tables,
        'my_orders': my_orders,
    }
    return render(request, 'waiter.html', context)


# =====================
# СМЕНА АЧУУ/ЖАБУУ
# =====================
@login_required
def toggle_shift(request):
    if request.method == 'POST':
        active_shift = Shift.objects.filter(status='open').first()
        if active_shift:
            active_shift.status = 'closed'
            active_shift.closed_at = timezone.now()
            active_shift.save()
        else:
            Shift.objects.create(
                opened_by=request.user,
                status='open'
            )
    return redirect('dashboard')


# =====================
# СТОЛ КОШУУ
# =====================
@login_required
def add_table(request):
    if request.method == 'POST':
        number = request.POST.get('number')
        seats = request.POST.get('seats')
        Table.objects.create(number=number, seats=seats)
    return redirect('dashboard')


# =====================
# СТОЛ ДЕТАЛЫ — ЗАКАЗ
# =====================
@login_required
def table_detail(request, table_id):
    table = get_object_or_404(Table, id=table_id)
    active_order = Order.objects.filter(table=table, status='open').first()
    menu_items = MenuItem.objects.all()
    categories = Category.objects.all()
    active_shift = Shift.objects.filter(status='open').first()

    if request.method == 'POST':
        action = request.POST.get('action')

        # Заказ ачуу
        if action == 'open_order':
            if not active_order:
                active_order = Order.objects.create(
                    table=table,
                    waiter=request.user,
                    status='open'
                )
                table.status = 'busy'
                table.save()

        # Тамак кошуу
        elif action == 'add_item':
            item_id = request.POST.get('item_id')
            if active_order and item_id:
                menu_item = get_object_or_404(MenuItem, id=item_id)
                order_item, created = OrderItem.objects.get_or_create(
                    order=active_order,
                    menu_item=menu_item,
                    defaults={'quantity': 1}
                )
                if not created:
                    order_item.quantity += 1
                    order_item.save()

        # Тамак азайтуу
        elif action == 'remove_item':
            item_id = request.POST.get('item_id')
            if active_order and item_id:
                try:
                    order_item = OrderItem.objects.get(order=active_order, menu_item_id=item_id)
                    if order_item.quantity > 1:
                        order_item.quantity -= 1
                        order_item.save()
                    else:
                        order_item.delete()
                except OrderItem.DoesNotExist:
                    pass

        # Төлөтүү
        elif action == 'pay':
            if active_order:
                active_order.status = 'closed'
                active_order.closed_at = timezone.now()
                active_order.save()
                table.status = 'free'
                table.save()
                return redirect('waiter')

        return redirect('table_detail', table_id=table.id)

    context = {
        'table': table,
        'active_order': active_order,
        'order_items': active_order.orderitem_set.all() if active_order else [],
        'order_total': active_order.total() if active_order else 0,
        'menu_items': menu_items,
        'categories': categories,
        'active_shift': active_shift,
    }
    return render(request, 'table_detail.html', context)

# =====================
# МЕНЮ КОШУУ
# =====================
@login_required
def add_menu_item(request):
    categories = Category.objects.all()
    if request.method == 'POST':
        name = request.POST.get('name')
        price = request.POST.get('price')
        category_id = request.POST.get('category')
        image = request.FILES.get('image')
        is_available = request.POST.get('is_available') == 'on'

        MenuItem.objects.create(
            name=name,
            price=price,
            category_id=category_id,
            image=image,
            is_available=is_available
        )
        return redirect('dashboard')

    return render(request, 'add_menu_item.html', {'categories': categories})


# =====================
# МЕНЮ ӨЧҮРҮҮ
# =====================
@login_required
def delete_menu_item(request, item_id):
    item = get_object_or_404(MenuItem, id=item_id)
    item.delete()
    return redirect('dashboard')

# =====================
# ЗАКАЗ ТАРЫХЫ
# =====================
@login_required
def order_history(request):
    orders = Order.objects.all().order_by('-created_at')
    context = {
        'orders': orders,
    }
    return render(request, 'order_history.html', context)

# =====================
# СТАТИСТИКА
# =====================
@login_required
def revenue_view(request):
    today = timezone.now().date()
    
    # Бүгүнкү заказдар
    today_orders = Order.objects.filter(
        status='closed',
        closed_at__date=today
    )
    today_revenue = sum(o.total() for o in today_orders)
    
    # Бул айдагы заказдар
    month_orders = Order.objects.filter(
        status='closed',
        closed_at__month=today.month,
        closed_at__year=today.year
    )
    month_revenue = sum(o.total() for o in month_orders)
    
    # Акыркы 7 күн
    week_data = []
    for i in range(6, -1, -1):
        day = today - timedelta(days=i)
        day_orders = Order.objects.filter(
            status='closed',
            closed_at__date=day
        )
        day_revenue = sum(o.total() for o in day_orders)
        week_data.append({
            'date': day.strftime('%d.%m'),
            'revenue': float(day_revenue)
        })
    
    # Эң көп сатылган тамактар
    top_items = OrderItem.objects.filter(
        order__status='closed'
    ).values(
        'menu_item__name'
    ).annotate(
        total_qty=Sum('quantity')
    ).order_by('-total_qty')[:5]

    context = {
        'today_revenue': today_revenue,
        'month_revenue': month_revenue,
        'today_orders_count': today_orders.count(),
        'month_orders_count': month_orders.count(),
        'week_data': week_data,
        'top_items': top_items,
        'all_orders': Order.objects.filter(status='closed').order_by('-closed_at')[:10],
    }
    return render(request, 'revenue.html', context)

# =====================
# ЧЕК БАСЫП ЧЫГАРУУ
# =====================
@login_required
def print_receipt(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    order_items = order.orderitem_set.all()
    context = {
        'order': order,
        'order_items': order_items,
        'total': order.total(),
    }
    return render(request, 'receipt.html', context)