# ☕ Cafe Pro — Кафе Башкаруу Системасы

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Django](https://img.shields.io/badge/Django-4.x-green)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)

## 📌 Долбоор жөнүндө

**Cafe Pro** — кафе жана ресторандар үчүн толук башкаруу панели.
Столдорду, заказдарды, менюну жана сменаны бир жерден башкарууга мүмкүндүк берет.

---

## ✨ Мүмкүнчүлүктөр

- 🔐 Кириш системасы (Администратор / Официант)
- 🪑 Столдорду башкаруу (кошуу, статус өзгөртүү)
- 🍽️ Меню башкаруу (категория, сүрөт, баа)
- 🧾 Заказ системасы (ачуу, тамак кошуу, төлөтүү)
- 💰 Смена башкаруу (ачуу/жабуу, киреше эсептөө)
- 📊 Жандуу статистика панели

---

## 🛠️ Технологиялар

| Технология | Колдонулушу |
|---|---|
| Python 3 | Негизги тил |
| Django 4 | Backend framework |
| Bootstrap 5 | UI дизайн |
| Font Awesome | Иконкалар |
| SQLite | База данных |
| Pillow | Сүрөт иштетүү |

---

## 🚀 Орнотуу

### 1. Репозиторийди клондоо
```bash
git clone https://github.com/СЕНИН_АТТЫН/2cafe.git
cd 2cafe
```

### 2. Virtual environment түзүү
```bash
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux
```

### 3. Керектүү пакеттерди орнотуу
```bash
pip install django pillow
```

### 4. Миграция жасоо
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Супер колдонуучу түзүү
```bash
python manage.py createsuperuser
```

### 6. Серверди иштетүү
```bash
python manage.py runserver
```

### 7. Браузерде ачуу