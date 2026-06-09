const defaultMenu = [
    {
        id: 1,
        name: 'Лагман',
        price: 290,
        available: true,
        category: 'main',
        prepTime: '18 мин',
        desc: 'Үй стилиндеги соус, эт жана жаңы кесме.',
        image: 'https://sspark.genspark.ai/cfimages?u1=haNqJVvsd%2FVKmdelAj8oIoRbhu0FiqohUk08KloSZisFGsG0wUMVwsRcjJbzY8r1QzkcX3hpaQJuBWdTW4QKErWLNjm%2BIOSCMkrEI1WZppGvSh0Sr24%3D&u2=IrTkd26gI4lgGqn4&width=2560'
    },
    {
        id: 2,
        name: 'Манты (5 даана)',
        price: 220,
        available: true,
        category: 'main',
        prepTime: '15 мин',
        desc: 'Жумшак камыр, ширелүү эт, классикалык бууга бышкан.',
        image: 'https://sspark.genspark.ai/cfimages?u1=NGsLHIgxuihGblDbDKP8oxDj6aSReOzYEUNpxkf7iicotnpY0E2ALonHzHzNDaaYSLHoh0%2BA7ezBvOXDT9rsNSj1IxOFF2qc%2BLwQ5Dh%2FdIHpw8Yqzg3exxV7pMZRoA%3D%3D&u2=ien6gxAa%2BQ%2BZ7y57&width=2560'
    },
    {
        id: 3,
        name: 'Стейк сет',
        price: 590,
        available: true,
        category: 'main',
        prepTime: '22 мин',
        desc: 'Грилде куурулган эт гарнир менен.',
        image: 'https://sspark.genspark.ai/cfimages?u1=Ov2qok1Uezk1sKbMni40S%2BqyTnq9ILwWXs5xdNg9er3SaI8B73Cs%2F%2FdOjXafVsmouxj68qozXdiZ98nO9JGXfoJJ9oTaxYj3oiWv01F%2FNjnPCbIuXTs6R22PMqx8NVjj&u2=jG1%2BbOyYPoiJsmzr&width=2560'
    },
    {
        id: 4,
        name: 'Цезарь салаты',
        price: 320,
        available: true,
        category: 'salad',
        prepTime: '10 мин',
        desc: 'Жеңил салат, пармезан жана кытырак сухариктер.',
        image: 'https://sspark.genspark.ai/cfimages?u1=BJE4KFAPwBcUCVuTteSqeFiWS9vkFKALAXSd5R79I6scMgmtLXw3mpi63H9E6YC%2FrxNmi31zcWoU%2Fp3rnl9CLkFYPjACzM49V3qWiMBcuZsQR7HY8ZsohS4%3D&u2=SH5C%2F8IuvnKKbUon&width=2560'
    },
    {
        id: 5,
        name: 'Фри',
        price: 140,
        available: true,
        category: 'main',
        prepTime: '7 мин',
        desc: 'Кытырак картошка, соус менен берилет.',
        image: 'https://sspark.genspark.ai/cfimages?u1=P3cZNDN2nhs1SUliNYTHHvyTEpZR9imtadvoakX8mn8VL4LruyHWoWNlR4URLhjGDTYDLkIjCCErE3GNFVr%2BuwHBMnXJ0sDnIWe9CnzSR1cDwXjHCRPyPUXezoKE&u2=l2a%2FKpNRpbvlzLqT&width=2560'
    },
    {
        id: 6,
        name: 'Капучино',
        price: 170,
        available: true,
        category: 'drinks',
        prepTime: '4 мин',
        desc: 'Коюу эспрессо жана жумшак сүт көбүгү.',
        image: 'https://sspark.genspark.ai/cfimages?u1=d%2FaL%2FH3qt6EV%2BTeU5FWtf3kIkNe4Z5a8aK7uUCmqql2PQzAXVIx%2B1uYyfgnBel2C%2Fxh41jxuBw%2BifT0pwkwmlGTa%2BCl5l4ix0wVbmb7wqwkIZ5Izfp4%3D&u2=cPgTEYYU8ZIYvuUU&width=2560'
    },
    {
        id: 7,
        name: 'Кола 0.5л',
        price: 95,
        available: true,
        category: 'drinks',
        prepTime: '1 мин',
        desc: 'Муздак газдалган суусундук.',
        image: 'https://sspark.genspark.ai/cfimages?u1=r2c3A1KRQPzlXI0Gj%2BxGHKkVfuIcVdDH3esuAr9eCqm46kwWUAyAlxzj7oIcPqp0w%2BupR8sF9ljrl%2FFkneBRZ0QGlpRnNae2iGSUrVCyEALaG3ihchr0yaI%2BJKY44qIa2kZN3ZVOzVqy&u2=Cz0PT3lbTE23rA65&width=2560'
    },
    {
        id: 8,
        name: 'Чизкейк',
        price: 210,
        available: true,
        category: 'dessert',
        prepTime: '3 мин',
        desc: 'Назик десерт кофе менен идеалдуу.',
        image: 'https://sspark.genspark.ai/cfimages?u1=ZfruODv6dSnuZ7P3G81%2FxekI8m0PYji0uuRVS9vLxvqEG9HNa2NvZjqWePsLMShos3HlsYBFIIfWnfBxxf8l4BLNfkS78L6fHxi3DmusJPoNdoiwpEh271%2Fb4w%3D%3D&u2=Zt2UaylloWNdCsg%2F&width=2560'
    }
];

const defaultData = {
    currentUser: null,
    shift: { isOpen: false, openedBy: null, openedAt: null, closedBy: null, closedAt: null, revenue: 0 },
    tables: [
        { id: 1, number: 1, seats: 2, isActive: true, orderId: null },
        { id: 2, number: 2, seats: 4, isActive: true, orderId: 101 },
        { id: 3, number: 3, seats: 6, isActive: true, orderId: null },
        { id: 4, number: 4, seats: 4, isActive: true, orderId: null }
    ],
    menu: defaultMenu,
    orders: {
        101: {
            tableId: 2,
            items: [{ dishId: 1, quantity: 2 }, { dishId: 7, quantity: 2 }],
            status: 'open',
            total: 770,
            openedBy: 'Тест',
            openedAt: new Date().toISOString(),
            closedBy: null,
            closedAt: null
        }
    },
    orderHistory: [],
    activityLog: []
};

const $ = (selector) => document.querySelector(selector);
const formatMoney = (value) => `${value} сом`;
const formatDate = (value) => value ? new Date(value).toLocaleString('ky-KG') : '-';

function loadData() {
    const saved = JSON.parse(localStorage.getItem('cafeData'));
    if (!saved) return structuredClone(defaultData);

    const savedMenu = Array.isArray(saved.menu) ? saved.menu : [];
    const mergedMenu = defaultMenu.map(item => {
        const old = savedMenu.find(menuItem => menuItem.id === item.id);
        return old ? { ...item, ...old, image: old.image || item.image, desc: old.desc || item.desc } : item;
    });

    return {
        ...structuredClone(defaultData),
        ...saved,
        shift: { ...defaultData.shift, ...(saved.shift || {}) },
        currentUser: saved.currentUser || null,
        tables: Array.isArray(saved.tables) && saved.tables.length ? saved.tables : structuredClone(defaultData.tables),
        menu: mergedMenu,
        orders: saved.orders || {},
        orderHistory: Array.isArray(saved.orderHistory) ? saved.orderHistory : [],
        activityLog: Array.isArray(saved.activityLog) ? saved.activityLog : []
    };
}

let appData = loadData();
let currentTableId = null;
let currentMenuFilter = 'all';

function saveData() {
    localStorage.setItem('cafeData', JSON.stringify(appData));
}

function logActivity(action, details) {
    const user = appData.currentUser || { name: 'Система', role: 'system' };
    appData.activityLog.unshift({
        timestamp: new Date().toISOString(),
        userName: user.name,
        userRole: user.role,
        action,
        details
    });
    appData.activityLog = appData.activityLog.slice(0, 120);
    saveData();
}

function updateClock() {
    const now = new Date();
    $('#login-time').value = now.toLocaleString('ky-KG');
    $('#current-date').textContent = now.toLocaleDateString('ky-KG', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
}

function refreshStats() {
    const activeTables = appData.tables.filter(table => table.isActive);
    const busyTables = activeTables.filter(table => table.orderId);
    $('#stat-tables').textContent = activeTables.length;
    $('#stat-busy').textContent = busyTables.length;
    $('#stat-revenue').textContent = formatMoney(appData.shift.revenue || 0);
    $('#stat-menu').textContent = appData.menu.length;
    $('#tables-count').textContent = `${activeTables.length} активдүү стол`;
    $('#user-login-time').textContent = appData.currentUser?.loginTime || '';
}

function handleLogin(event) {
    event.preventDefault();
    const name = $('#login-name').value.trim();
    const role = $('#login-role').value;

    if (!name || !role) {
        alert('Атыңызды жана ролуңузду толук жазыңыз!');
        return;
    }

    appData.currentUser = { name, role, loginTime: $('#login-time').value };
    logActivity('КИРҮҮ', 'Системага кирди');
    checkLogin();
}

function checkLogin() {
    const isLoggedIn = Boolean(appData.currentUser);
    $('#login-screen').classList.toggle('d-none', isLoggedIn);
    $('#main-app').classList.toggle('d-none', !isLoggedIn);

    if (!isLoggedIn) {
        $('#login-form').reset();
        updateClock();
        return;
    }

    $('#current-user-name').textContent = appData.currentUser.name;
    $('#admin-panel').classList.toggle('d-none', appData.currentUser.role !== 'admin');

    updateShiftUI();
    refreshStats();
    renderTables();
    renderMenu();
    renderOrder();
}

function logout() {
    logActivity('ЧЫГУУ', 'Системадан чыкты');
    appData.currentUser = null;
    currentTableId = null;
    saveData();
    checkLogin();
}

function updateShiftUI() {
    const shift = appData.shift;
    const badge = $('#shift-badge');
    const statusText = $('#shift-status-text');
    const toggleBtn = $('#btn-toggle-shift');
    const panel = $('#shift-info-panel');

    statusText.textContent = shift.isOpen ? 'Ачык' : 'Жабык';
    badge.style.background = shift.isOpen ? 'rgba(41,197,122,0.18)' : 'rgba(255,255,255,0.08)';
    badge.style.borderColor = shift.isOpen ? 'rgba(41,197,122,0.3)' : 'rgba(255,255,255,0.08)';

    toggleBtn.innerHTML = shift.isOpen
        ? '<i class="fas fa-stop me-2"></i>Сменаны жабуу'
        : '<i class="fas fa-power-off me-2"></i>Сменаны ачуу';
    toggleBtn.className = `btn rounded-pill px-3 ${shift.isOpen ? 'btn-danger' : 'btn-warning'}`;

    panel.innerHTML = shift.isOpen
        ? `
            <div class="row g-3 text-center">
                <div class="col-md-4"><small class="text-muted d-block">Ачкан</small><strong>${shift.openedBy}</strong></div>
                <div class="col-md-4"><small class="text-muted d-block">Ачылган убакыт</small><strong>${formatDate(shift.openedAt)}</strong></div>
                <div class="col-md-4"><small class="text-muted d-block">Выручка</small><strong class="text-success">${formatMoney(shift.revenue)}</strong></div>
            </div>`
        : `<div class="text-muted">Смена жабык. Акыркы көрсөткүч: <strong>${formatMoney(shift.revenue)}</strong>${shift.closedBy ? ` · жапкан: ${shift.closedBy}` : ''}</div>`;

    refreshStats();
}

function toggleShift() {
    if (appData.currentUser?.role !== 'admin') {
        alert('Сменаны администратор гана башкара алат!');
        return;
    }

    if (!appData.shift.isOpen) {
        if (!confirm('Сменаны ачабызбы?')) return;
        appData.shift = {
            ...appData.shift,
            isOpen: true,
            openedBy: appData.currentUser.name,
            openedAt: new Date().toISOString(),
            closedBy: null,
            closedAt: null,
            revenue: 0
        };
        logActivity('СМЕНА АЧУУ', 'Смена ачылды');
    } else {
        if (!confirm(`Сменаны жабуу? Жалпы сумма: ${formatMoney(appData.shift.revenue)}`)) return;
        appData.shift.isOpen = false;
        appData.shift.closedBy = appData.currentUser.name;
        appData.shift.closedAt = new Date().toISOString();
        logActivity('СМЕНА ЖАБУУ', `Смена жабылды. Выручка: ${formatMoney(appData.shift.revenue)}`);
    }

    saveData();
    updateShiftUI();
}

function renderTables() {
    const grid = $('#tables-grid');
    const visibleTables = appData.tables.filter(table => table.isActive);
    grid.innerHTML = visibleTables.map(table => `
        <article class="table-card ${table.orderId ? 'occupied' : 'free'} ${table.id === currentTableId ? 'active-selection' : ''}" data-table-id="${table.id}">
            ${appData.currentUser?.role === 'admin' ? `<button class="delete-btn" data-delete-id="${table.id}" title="Өчүрүү"><i class="fas fa-trash"></i></button>` : ''}
            <span class="table-status-chip ${table.orderId ? 'occupied' : 'free'}">
                <i class="fas fa-${table.orderId ? 'bell-concierge' : 'check'}"></i>
                ${table.orderId ? 'Ээленген' : 'Бош'}
            </span>
            <div class="table-number">№${table.number}</div>
            <div class="table-meta">${table.seats} орун · ${table.orderId ? 'Заказ ачык' : 'Күтүп турат'}</div>
        </article>
    `).join('');
}

function selectTable(tableId) {
    if (!appData.shift.isOpen) {
        alert('Заказ берүү үчүн адегенде сменаны ачыш керек!');
        return;
    }

    const table = appData.tables.find(item => item.id === tableId);
    currentTableId = tableId;
    $('#current-table-num').textContent = table.number;
    $('#active-order-panel').style.display = 'block';

    if (!table.orderId) {
        const newOrderId = Date.now();
        table.orderId = newOrderId;
        appData.orders[newOrderId] = {
            tableId,
            items: [],
            status: 'open',
            total: 0,
            openedBy: appData.currentUser.name,
            openedAt: new Date().toISOString(),
            closedBy: null,
            closedAt: null
        };
        logActivity('ЗАКАЗ АЧУУ', `Стол №${table.number} үчүн жаңы заказ ачылды`);
        saveData();
    }

    renderTables();
    renderOrder();
}

function renderOrder() {
    const body = $('#order-items');
    if (!currentTableId) {
        $('#active-order-panel').style.display = 'none';
        return;
    }

    const table = appData.tables.find(item => item.id === currentTableId);
    const order = appData.orders[table.orderId];
    if (!order || !order.items.length) {
        body.innerHTML = '<tr><td colspan="3" class="order-empty text-center py-4">Заказ бош. Оң жактагы менюдан кошуңуз.</td></tr>';
        $('#order-total').textContent = formatMoney(0);
        $('#btn-total').textContent = 0;
        return;
    }

    let total = 0;
    body.innerHTML = order.items.map((item, index) => {
        const dish = appData.menu.find(menuItem => menuItem.id === item.dishId);
        const subtotal = dish.price * item.quantity;
        total += subtotal;
        return `
            <tr>
                <td>
                    <div class="fw-semibold">${dish.name}</div>
                    <small class="text-muted">${dish.category}</small>
                </td>
                <td class="text-center">
                    <button class="qty-btn" data-index="${index}" data-delta="-1">−</button>
                    <span class="mx-2 fw-bold">${item.quantity}</span>
                    <button class="qty-btn" data-index="${index}" data-delta="1">+</button>
                </td>
                <td class="text-end fw-bold">${subtotal} с</td>
            </tr>`;
    }).join('');

    order.total = total;
    $('#order-total').textContent = formatMoney(total);
    $('#btn-total').textContent = total;
    saveData();
}

function changeQuantity(index, delta) {
    const table = appData.tables.find(item => item.id === currentTableId);
    const order = appData.orders[table.orderId];
    order.items[index].quantity += delta;
    if (order.items[index].quantity <= 0) order.items.splice(index, 1);
    renderOrder();
}

function addToOrder(dishId) {
    if (!currentTableId) {
        alert('Адегенде стол тандаңыз!');
        return;
    }
    if (!appData.shift.isOpen) {
        alert('Смена жабык!');
        return;
    }

    const table = appData.tables.find(item => item.id === currentTableId);
    const order = appData.orders[table.orderId];
    const existing = order.items.find(item => item.dishId === dishId);
    existing ? existing.quantity++ : order.items.push({ dishId, quantity: 1 });
    renderOrder();
}

function payOrder() {
    const table = appData.tables.find(item => item.id === currentTableId);
    const order = table ? appData.orders[table.orderId] : null;
    if (!order || !order.items.length) {
        alert('Заказ бош!');
        return;
    }

    if (!confirm(`Заказды жабабызбы? Жалпы сумма: ${formatMoney(order.total)}`)) return;

    appData.orderHistory.unshift({
        orderId: table.orderId,
        tableNumber: table.number,
        total: order.total,
        openedBy: order.openedBy,
        closedBy: appData.currentUser.name,
        closedAt: new Date().toISOString()
    });

    appData.shift.revenue += order.total;
    delete appData.orders[table.orderId];
    logActivity('ЗАКАЗ ЖАБУУ', `Стол №${table.number} · ${formatMoney(order.total)}`);
    table.orderId = null;
    currentTableId = null;
    saveData();

    renderTables();
    renderOrder();
    updateShiftUI();
}

function renderMenu() {
    const query = $('#menu-search').value.trim().toLowerCase();
    const filtered = appData.menu.filter(item => {
        const matchCategory = currentMenuFilter === 'all' || item.category === currentMenuFilter;
        const matchSearch = !query || item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
        return matchCategory && matchSearch;
    });

    $('#menu-grid').innerHTML = filtered.length ? filtered.map(dish => `
        <article class="menu-item ${dish.available ? '' : 'unavailable'}" data-dish-id="${dish.available ? dish.id : ''}">
            <div class="menu-thumb" style="background-image:url('${dish.image}')">
                <span class="menu-badge">${dish.category}</span>
                <span class="menu-price">${dish.price} с</span>
            </div>
            <div class="menu-content">
                <div class="menu-title-row">
                    <div>
                        <div class="dish-name">${dish.name}</div>
                        <div class="menu-desc mt-1">${dish.desc}</div>
                    </div>
                    <span class="add-tag"><i class="fas fa-plus"></i></span>
                </div>
                <div class="menu-meta">
                    <span><i class="far fa-clock me-1"></i>${dish.prepTime}</span>
                    <span>${dish.available ? 'Даяр' : 'Жок'}</span>
                </div>
            </div>
        </article>
    `).join('') : '<div class="empty-state">Бул фильтр боюнча эч нерсе табылган жок.</div>';
}

function showAddTableModal() {
    new bootstrap.Modal($('#addTableModal')).show();
}

function addTable() {
    const number = Number($('#new-table-number').value);
    const seats = Number($('#new-table-seats').value);
    if (!number || !seats) {
        alert('Толук маалымат киргизиңиз!');
        return;
    }
    if (appData.tables.some(table => table.number === number && table.isActive)) {
        alert('Мындай номердеги стол бар!');
        return;
    }

    appData.tables.push({ id: Date.now(), number, seats, isActive: true, orderId: null });
    logActivity('СТОЛ КОШУУ', `№${number} стол кошулду`);
    saveData();
    renderTables();
    refreshStats();
    bootstrap.Modal.getInstance($('#addTableModal'))?.hide();
    $('#new-table-number').value = '';
    $('#new-table-seats').value = 4;
}

function deleteTable(id) {
    const table = appData.tables.find(item => item.id === id);
    if (!table) return;
    if (table.orderId) {
        alert('Ээленген столду өчүрүүгө болбойт!');
        return;
    }
    if (!confirm(`№${table.number} столду өчүрөсүзбү?`)) return;

    table.isActive = false;
    if (currentTableId === id) currentTableId = null;
    logActivity('СТОЛ ӨЧҮРҮҮ', `№${table.number} стол өчүрүлдү`);
    saveData();
    renderTables();
    renderOrder();
    refreshStats();
}

function showHistoryModal() {
    $('#activity-log').innerHTML = appData.activityLog.length ? appData.activityLog.map(log => `
        <tr>
            <td><small>${formatDate(log.timestamp)}</small></td>
            <td><strong>${log.userName}</strong></td>
            <td><span class="role-badge role-${log.userRole}">${log.userRole}</span></td>
            <td>${log.action}</td>
            <td class="text-muted">${log.details}</td>
        </tr>
    `).join('') : '<tr><td colspan="5" class="empty-state">Тарых азырынча бош.</td></tr>';
    new bootstrap.Modal($('#historyModal')).show();
}

function showOrderHistoryModal() {
    $('#order-history-list').innerHTML = appData.orderHistory.length ? appData.orderHistory.map(order => `
        <tr>
            <td>#${order.orderId}</td>
            <td>№${order.tableNumber}</td>
            <td>${order.openedBy}</td>
            <td>${order.closedBy}</td>
            <td class="fw-bold text-success">${formatMoney(order.total)}</td>
            <td>${formatDate(order.closedAt)}</td>
        </tr>
    `).join('') : '<tr><td colspan="6" class="empty-state">Жабылган заказдар азырынча жок.</td></tr>';
    new bootstrap.Modal($('#orderHistoryModal')).show();
}

function bindEvents() {
    $('#login-form').addEventListener('submit', handleLogin);
    $('#logout-btn').addEventListener('click', logout);
    $('#btn-toggle-shift').addEventListener('click', toggleShift);
    $('#btn-add-table').addEventListener('click', showAddTableModal);
    $('#save-table-btn').addEventListener('click', addTable);
    $('#btn-show-history').addEventListener('click', showHistoryModal);
    $('#btn-show-orders').addEventListener('click', showOrderHistoryModal);
    $('#pay-order-btn').addEventListener('click', payOrder);
    $('#menu-search').addEventListener('input', renderMenu);

    $('#menu-filters').addEventListener('click', (event) => {
        const chip = event.target.closest('.filter-chip');
        if (!chip) return;
        currentMenuFilter = chip.dataset.filter;
        document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.toggle('active', btn === chip));
        renderMenu();
    });

    $('#tables-grid').addEventListener('click', (event) => {
        const deleteBtn = event.target.closest('[data-delete-id]');
        if (deleteBtn) {
            deleteTable(Number(deleteBtn.dataset.deleteId));
            return;
        }
        const card = event.target.closest('[data-table-id]');
        if (card) selectTable(Number(card.dataset.tableId));
    });

    $('#menu-grid').addEventListener('click', (event) => {
        const item = event.target.closest('[data-dish-id]');
        if (item && item.dataset.dishId) addToOrder(Number(item.dataset.dishId));
    });

    $('#order-items').addEventListener('click', (event) => {
        const btn = event.target.closest('[data-index]');
        if (!btn) return;
        changeQuantity(Number(btn.dataset.index), Number(btn.dataset.delta));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
    bindEvents();
    checkLogin();
});
