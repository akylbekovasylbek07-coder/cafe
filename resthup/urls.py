from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from cafe import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.login_view, name='login'),
    path('dashboard/', views.dashboard_view, name='dashboard'),
    path('waiter/', views.waiter_view, name='waiter'),
    path('logout/', views.logout_view, name='logout'),
    path('toggle-shift/', views.toggle_shift, name='toggle_shift'),
    path('add-table/', views.add_table, name='add_table'),
    path('table/<int:table_id>/', views.table_detail, name='table_detail'),
    path('menu/add/', views.add_menu_item, name='add_menu_item'),
    path('menu/delete/<int:item_id>/', views.delete_menu_item, name='delete_menu_item'),
    path('orders/', views.order_history, name='order_history'),
    path('revenue/', views.revenue_view, name='revenue'),
    path('receipt/<int:order_id>/', views.print_receipt, name='print_receipt'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)