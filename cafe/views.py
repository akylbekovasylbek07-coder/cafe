from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .models import UserProfile, Table, MenuItem, Order, OrderItem, Shift, Category


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
    context = get_base_context(request)
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