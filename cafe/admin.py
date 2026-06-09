from django.contrib import admin
from .models import UserProfile, Table, MenuItem, Order, OrderItem, Shift, Category

admin.site.register(UserProfile)
admin.site.register(Table)
admin.site.register(MenuItem)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Shift)
admin.site.register(Category)