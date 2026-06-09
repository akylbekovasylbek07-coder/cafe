from django.db import models
from django.contrib.auth.models import User


# =====================
# КОЛДОНУУЧУ РОЛИ
# =====================
class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('admin', 'Администратор'),
        ('waiter', 'Официант'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    def __str__(self):
        return f"{self.user.username} - {self.role}"


# =====================
# СТОЛДОР
# =====================
class Table(models.Model):
    STATUS_CHOICES = [
        ('free', 'Бош'),
        ('busy', 'Ээленген'),
        ('selected', 'Тандалган'),
    ]
    number = models.IntegerField(unique=True)        # Стол номери
    seats = models.IntegerField()                    # Орун саны
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='free')

    def __str__(self):
        return f"Стол №{self.number}"


# =====================
# МЕНЮ
# =====================
class Category(models.Model):
    name = models.CharField(max_length=100)          # Категория аты

    def __str__(self):
        return self.name


class MenuItem(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)          # Тамактын аты
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Баасы
    image = models.ImageField(upload_to='menu/', blank=True, null=True)
    is_available = models.BooleanField(default=True) # Бар/Жок

    def __str__(self):
        return self.name


# =====================
# ЗАКАЗ
# =====================
class Order(models.Model):
    STATUS_CHOICES = [
        ('open', 'Ачык'),
        ('closed', 'Жабык'),
        ('cancelled', 'Жокко чыгарылган'),
    ]
    table = models.ForeignKey(Table, on_delete=models.CASCADE)
    waiter = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    created_at = models.DateTimeField(auto_now_add=True)
    closed_at = models.DateTimeField(null=True, blank=True)

    def total(self):
        return sum(item.subtotal() for item in self.orderitem_set.all())

    def __str__(self):
        return f"Заказ #{self.id} — Стол №{self.table.number}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)        # Саны

    def subtotal(self):
        return self.menu_item.price * self.quantity

    def __str__(self):
        return f"{self.menu_item.name} x{self.quantity}"


# =====================
# СМЕНА
# =====================
class Shift(models.Model):
    STATUS_CHOICES = [
        ('open', 'Ачык'),
        ('closed', 'Жабык'),
    ]
    opened_by = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    opened_at = models.DateTimeField(auto_now_add=True)
    closed_at = models.DateTimeField(null=True, blank=True)

    def revenue(self):
        orders = Order.objects.filter(
            status='closed',
            created_at__gte=self.opened_at
        )
        return sum(o.total() for o in orders)

    def __str__(self):
        return f"Смена {self.opened_at.strftime('%d.%m.%Y')}"