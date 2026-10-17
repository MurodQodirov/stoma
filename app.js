const STATUS = {
  draft: ["Qoralama", "gray"],
  review: ["Tekshirilmoqda", "blue"],
  approved: ["Tasdiqlangan", "green"],
  rejected: ["Rad etilgan", "pink"],
};

const META = {
  home: ["Bosh sahifa", "Bugungi ishlar, tasdiq va pul"],
  works: ["Ishlar", "Bajarilgan ish va uning holati"],
  "work-new": ["Yangi ish", "Turni tanlang, rasm qo‘ying, yuboring"],
  work: ["Ish", "Rasm, narx va holat"],
  approve: ["Tasdiqlash", "Rasm va narxni tekshiring"],
  kpi: ["KPI", "Tasdiqlangan ishlar soni va summasi"],
  clients: ["Mijozlar", "Klinikalar, to‘lov va qarz"],
  client: ["Mijoz", "Sotuvlar va to‘lovlar"],
  sale: ["Yangi sotuv", "Naqd, karta yoki qarz"],
  receipt: ["Chek", "Ko‘rib chiqing yoki chop eting"],
  debts: ["Qarzdorlik", "Kimda qancha qarz qolgan"],
  finance: ["Moliya", "Sotuv, tushum va qarz alohida"],
  attendance: ["Davomat", "Kelish va ketish vaqti"],
  staff: ["Xodimlar", "Login, parol va rol"],
  services: ["Xizmatlar", "Nom va narx"],
  roles: ["Rollar", "Kim nima qila oladi"],
  report: ["Hisobot", "Kun, hafta va oy"],
};

const PARENT = {
  work: "works",
  "work-new": "works",
  client: "clients",
  sale: "clients",
  receipt: "clients",
};

let people = [
  { id: "admin", name: "Administrator", login: "admin", role: "admin", active: true },
  { id: "murat", name: "Murat Karimov", login: "murat", role: "staff", active: true },
  { id: "dilshod", name: "Dilshod Aliyev", login: "dilshod", role: "staff", active: true },
  { id: "nilufar", name: "Nilufar Yusupova", login: "nilufar", role: "staff", active: true },
];

const passwords = { admin: "1234", murat: "1234", dilshod: "1234", nilufar: "1234" };

let services = [
  { id: 1, name: "Protez", price: 500000, active: true },
  { id: 2, name: "Kron", price: 350000, active: true },
  { id: 3, name: "Implant qoplama", price: 800000, active: true },
  { id: 4, name: "Vaqtinchalik protez", price: 180000, active: true },
  { id: 5, name: "Ta‘mirlash", price: 120000, active: true },
];

let works = [
  { id: 1, person: "murat", service: "Protez", price: 500000, status: "approved", dateKey: "today", photo: true, note: "Yuqori jag‘", reason: "" },
  { id: 2, person: "dilshod", service: "Kron", price: 350000, status: "review", dateKey: "today", photo: true, note: "", reason: "" },
  { id: 3, person: "nilufar", service: "Protez", price: 500000, status: "review", dateKey: "today", photo: true, note: "Rang A2", reason: "" },
  { id: 4, person: "murat", service: "Ta‘mirlash", price: 120000, status: "draft", dateKey: "today", photo: true, note: "", reason: "" },
  { id: 5, person: "dilshod", service: "Implant qoplama", price: 800000, status: "rejected", dateKey: "yesterday", photo: true, note: "", reason: "Rasm xira. Qayta oling." },
  { id: 6, person: "murat", service: "Kron", price: 350000, status: "approved", dateKey: "yesterday", photo: true, note: "", reason: "" },
  { id: 7, person: "nilufar", service: "Vaqtinchalik protez", price: 180000, status: "approved", dateKey: "week", photo: true, note: "", reason: "" },
];

let clients = [
  { id: 1, name: "Smile Dental", phone: "+998 90 100 20 30", person: "Dr. Karimova", address: "Chilonzor, 12-uy" },
  { id: 2, name: "Nur stomatologiya", phone: "+998 91 555 44 33", person: "Dr. Rahimov", address: "Yunusobod, 8-uy" },
  { id: 3, name: "Azimov kabineti", phone: "+998 93 777 12 12", person: "Dr. Azimov", address: "Mirzo Ulug‘bek, 4-uy" },
];

let sales = [
  { id: 101, client: 1, item: "Protez", qty: 2, price: 500000, paid: 1000000, method: "Naqd", dateKey: "today", dueKey: "", photo: "" },
  { id: 102, client: 2, item: "Kron", qty: 4, price: 350000, paid: 400000, method: "Qisman", dateKey: "yesterday", dueKey: "week", photo: "" },
  { id: 103, client: 3, item: "Implant qoplama", qty: 1, price: 800000, paid: 0, method: "Qarz", dateKey: "older", dueKey: "overdue", photo: "" },
];

let payments = [
  { id: 1, client: 1, sale: 101, amount: 1000000, method: "Naqd", dateKey: "today" },
  { id: 2, client: 2, sale: 102, amount: 400000, method: "Karta", dateKey: "yesterday" },
];

let expenses = [
  { id: 1, name: "Material", amount: 800000, dateKey: "week" },
  { id: 2, name: "Ijara", amount: 1500000, dateKey: "older" },
];

let attendance = [
  { person: "murat", inn: "08:55", out: "" },
  { person: "dilshod", inn: "09:24", out: "" },
  { person: "nilufar", inn: "", out: "" },
];

const monthAttendance = {
  murat: [12, 1, 0],
  dilshod: [11, 3, 1],
  nilufar: [10, 0, 2],
};

const kpi = {
  murat: { day: [1, 500000], week: [6, 2800000], month: [20, 10000000] },
  dilshod: { day: [0, 0], week: [4, 1400000], month: [14, 5600000] },
  nilufar: { day: [0, 0], week: [3, 900000], month: [9, 3150000] },
};

const perms = { clients: false, sales: false, finance: false };

const state = {
  session: null,
  page: "home",
  workId: 1,
  clientId: 1,
  saleId: 101,
  editId: null,
  photo: "",
  salePhoto: "",
  rejectId: null,
  staffId: null,
  serviceId: null,
  workFilter: "all",
  debtFilter: "all",
  kpiPeriod: "month",
  reportPeriod: "month",
  attendPeriod: "day",
  workQuery: "",
  clientQuery: "",
};

let ids = { work: 8, sale: 104, pay: 3, expense: 3, client: 4, service: 6 };

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function som(value) {
  const n = Math.round(Number(value) || 0);
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}

function money(value) {
  return Math.round(Number(value) || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function dateLabel(key) {
  if (key === "today") return "17 oktabr";
  if (key === "yesterday") return "16 oktabr";
  if (key === "week") return "14 oktabr";
  return "2 oktabr";
}

function inPeriod(key, period) {
  if (period === "day") return key === "today";
  if (period === "week") return key === "today" || key === "yesterday" || key === "week";
  return true;
}

function personById(id) {
  return people.find((item) => item.id === id);
}

function clientById(id) {
  return clients.find((item) => item.id === Number(id));
}

function isStaffView() {
  return state.session && state.session.as !== "admin";
}

function currentPersonId() {
  if (!state.session) return "";
  return state.session.as === "admin" ? state.session.id : state.session.as;
}

function can(need) {
  if (!need) return true;
  if (!isStaffView()) return true;
  if (need === "admin") return false;
  return Boolean(perms[need]);
}

function saleTotal(sale) {
  return sale.qty * sale.price;
}

function saleLeft(sale) {
  return Math.max(0, saleTotal(sale) - sale.paid);
}

function clientDebt(id) {
  return sales.filter((sale) => sale.client === id).reduce((sum, sale) => sum + saleLeft(sale), 0);
}

function statusHtml(code) {
  const item = STATUS[code] || ["—", "gray"];
  return `<span class="status ${item[1]}">${item[0]}</span>`;
}

function photoBox(photo) {
  if (typeof photo === "string" && photo.startsWith("data:image/")) {
    return `<img alt="Rasm" src="${photo}">`;
  }
  return "";
}

function letter(name) {
  return esc((name || "?").trim().charAt(0).toUpperCase());
}

function flash(text, ok = true) {
  const box = document.getElementById("flash");
  box.className = ok ? "flash ok" : "flash error";
  box.hidden = false;
  box.textContent = text;
  clearTimeout(flash.timer);
  flash.timer = setTimeout(() => {
    box.hidden = true;
  }, 2600);
}

function openModal(id) {
  document.getElementById(id).classList.add("open");
}

function closeModals() {
  document.querySelectorAll(".modal.open").forEach((box) => box.classList.remove("open"));
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").hidden = true;
}

function visibleWorks() {
  const query = state.workQuery.trim().toLowerCase();
  return works.filter((work) => {
    if (isStaffView() && work.person !== currentPersonId()) return false;
    if (state.workFilter !== "all" && work.status !== state.workFilter) return false;
    if (!query) return true;
    const person = personById(work.person);
    return `${person ? person.name : ""} ${work.service} ${work.note}`.toLowerCase().includes(query);
  });
}

function fillSelect(select, options, current) {
  const value = current !== undefined ? current : select.value;
  select.innerHTML = options;
  if ([...select.options].some((option) => option.value === value)) select.value = value;
}

function staffOptions(selected) {
  return people
    .filter((person) => person.role === "staff" && person.active)
    .map((person) => `<option value="${esc(person.id)}"${person.id === selected ? " selected" : ""}>${esc(person.name)}</option>`)
    .join("");
}

function serviceOptions(selected, placeholder) {
  const head = placeholder ? `<option value="">${placeholder}</option>` : "";
  const body = services
    .filter((service) => service.active)
    .map((service) => `<option value="${service.id}"${String(service.id) === String(selected) ? " selected" : ""}>${esc(service.name)}</option>`)
    .join("");
  return head + body;
}

function clientOptions(selected) {
  return clients
    .map((client) => `<option value="${client.id}"${client.id === Number(selected) ? " selected" : ""}>${esc(client.name)}</option>`)
    .join("");
}

function fillForms() {
  fillSelect(document.getElementById("work-person"), staffOptions(document.getElementById("work-person").value));
  fillSelect(document.getElementById("work-service"), serviceOptions(document.getElementById("work-service").value, "Tanlang"));
  fillSelect(document.getElementById("sale-client"), clientOptions(state.clientId));
  fillSelect(document.getElementById("sale-service"), serviceOptions(document.getElementById("sale-service").value));
  fillSelect(document.getElementById("attend-person"), staffOptions());
  updateWorkPrice();
  updateSale();
}

function applyChrome() {
  const person = personById(currentPersonId());
  const staff = isStaffView();
  document.getElementById("who-name").textContent = person ? person.name : "Administrator";
  document.getElementById("who-role").textContent = staff ? "Xodim ko‘rinishi" : "Administrator";
  document.getElementById("role-switch").hidden = !state.session || state.session.id !== "admin";
  document.getElementById("role-switch").textContent = staff ? "Administrator ko‘rinishi" : "Xodim ko‘rinishi";
  document.getElementById("work-person-wrap").hidden = staff;
  document.querySelectorAll("[data-need]").forEach((item) => {
    item.hidden = !can(item.dataset.need);
  });
  document.querySelectorAll(".side-scroll nav").forEach((nav) => {
    const any = [...nav.querySelectorAll("a")].some((link) => !link.hidden);
    nav.hidden = !any;
    const label = nav.previousElementSibling;
    if (label && label.classList.contains("nav-label")) label.hidden = !any;
  });
  const pending = works.filter((work) => work.status === "review").length;
  const badge = document.getElementById("approve-badge");
  badge.hidden = pending === 0;
  badge.textContent = String(pending);
  const brand = document.getElementById("set-name").value.trim() || "Laboratoriya";
  document.getElementById("brand-name").textContent = brand;
}

function go(page) {
  if (!META[page] || (state.session && !pageAllowed(page))) page = "home";
  state.page = page;
  document.querySelectorAll(".page").forEach((section) => {
    section.hidden = section.dataset.page !== page;
  });
  const current = PARENT[page] || page;
  document.querySelectorAll(".sidebar nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.go === current);
  });
  document.getElementById("page-title").textContent = META[page][0];
  document.getElementById("page-sub").textContent = page === "home" && isStaffView()
    ? "Sizning ishlaringiz va davomat"
    : META[page][1];
  document.title = META[page][0] + " — Laboratoriya";
  history.replaceState(null, "", "#" + page);
  closeMenu();
  window.scrollTo(0, 0);
}

function pageAllowed(page) {
  const need = {
    approve: "admin",
    staff: "admin",
    services: "admin",
    roles: "admin",
    report: "admin",
    clients: "clients",
    client: "clients",
    debts: "clients",
    sale: "sales",
    receipt: "clients",
    finance: "finance",
  }[page];
  return can(need);
}

function renderAll() {
  applyChrome();
  renderHome();
  renderWorks();
  renderDetail();
  renderApprove();
  renderKpi();
  renderClients();
  renderClient();
  renderDebts();
  renderFinance();
  renderAttendance();
  renderStaff();
  renderServices();
  renderRoles();
  renderReport();
  renderReceipt();
}

function renderHome() {
  const root = document.getElementById("home-root");
  if (isStaffView()) {
    const id = currentPersonId();
    const mine = works.filter((work) => work.person === id);
    const month = (kpi[id] && kpi[id].month) || [0, 0];
    const row = attendance.find((item) => item.person === id);
    root.innerHTML = `
      <div class="kpi-row">
        ${kpiCard("Shu oy ishlarim", month[0] + " ta")}
        ${kpiCard("Shu oy summa", money(month[1]), "so‘m")}
        ${kpiCard("Bugungi davomat", row ? attendState(row) : "—")}
      </div>
      <section class="card table-card">
        <div class="card-head">
          <h2>Mening ishlarim</h2>
          <button type="button" class="add-btn" data-go="work-new">Ish qo‘shish</button>
        </div>
        ${workTable(mine)}
      </section>`;
    return;
  }

  const todayWorks = works.filter((work) => work.dateKey === "today" && work.status !== "draft");
  const pending = works.filter((work) => work.status === "review");
  const income = payments.filter((item) => item.dateKey === "today").reduce((sum, item) => sum + item.amount, 0);
  const debt = sales.reduce((sum, sale) => sum + saleLeft(sale), 0);
  root.innerHTML = `
    <div class="kpi-row four">
      ${kpiCard("Bugungi ishlar", String(todayWorks.length))}
      ${kpiCard("Tasdiq kutilmoqda", String(pending.length))}
      ${kpiCard("Bugungi tushum", money(income), "so‘m")}
      ${kpiCard("Jami qarz", money(debt), "so‘m")}
    </div>
    <div class="split">
      <section class="card table-card">
        <div class="card-head">
          <h2>Bugungi ishlar</h2>
          <button type="button" class="ghost" data-go="works">Hammasi</button>
        </div>
        ${workTable(todayWorks)}
      </section>
      <section class="card table-card">
        <div class="card-head">
          <h2>Tasdiq kutilmoqda</h2>
          <button type="button" class="ghost" data-go="approve">Hammasi</button>
        </div>
        ${pending.length ? pending.slice(0, 4).map(checkRow).join("") : `<p class="empty">Hozircha yo‘q.</p>`}
      </section>
    </div>`;
}

function kpiCard(label, value, unit) {
  return `<article class="kpi"><div><span>${esc(label)}</span><strong>${esc(value)}</strong>${unit ? `<em>${esc(unit)}</em>` : ""}</div></article>`;
}

function workTable(list) {
  if (!list.length) return `<p class="empty">Hozircha ish yo‘q.</p>`;
  return `<div class="table-wrap"><table>
    <thead><tr><th>Xodim</th><th>Ish</th><th>Narx</th><th>Holat</th><th></th></tr></thead>
    <tbody>${list.map((work) => workRow(work, true)).join("")}</tbody>
  </table></div>`;
}

function workRow(work) {
  const person = personById(work.person);
  return `<tr data-go="work" data-id="${work.id}">
    <td>${esc(person ? person.name : "—")}</td>
    <td><b>${esc(work.service)}</b>${work.note ? `<small class="note">${esc(work.note)}</small>` : ""}</td>
    <td class="num">${som(work.price)}</td>
    <td>${statusHtml(work.status)}</td>
    <td><button type="button" class="link" data-go="work" data-id="${work.id}">Ochish</button></td>
  </tr>`;
}

function checkRow(work) {
  const person = personById(work.person);
  return `<div class="check-row">
    <div class="thumb">${photoBox(work.photo)}</div>
    <div class="check-main">
      <b>${esc(work.service)}</b>
      <span>${esc(person ? person.name : "")} · ${som(work.price)}</span>
    </div>
    <div class="actions">
      <button type="button" class="link" data-go="work" data-id="${work.id}">Ko‘rish</button>
      <button type="button" class="add-btn" data-act="approve" data-id="${work.id}">Tasdiqlash</button>
      <button type="button" class="danger" data-act="reject" data-id="${work.id}">Rad etish</button>
    </div>
  </div>`;
}

function renderWorks() {
  document.getElementById("works-title").textContent = isStaffView() ? "Mening ishlarim" : "Barcha ishlar";
  const counts = { all: 0, draft: 0, review: 0, approved: 0, rejected: 0 };
  works.forEach((work) => {
    if (isStaffView() && work.person !== currentPersonId()) return;
    counts.all += 1;
    counts[work.status] += 1;
  });
  const filters = [
    ["all", "Hammasi"],
    ["draft", "Qoralama"],
    ["review", "Tekshirilmoqda"],
    ["approved", "Tasdiqlangan"],
    ["rejected", "Rad etilgan"],
  ];
  document.getElementById("work-filters").innerHTML = filters
    .map(([key, label]) => `<button type="button" class="chip${state.workFilter === key ? " active" : ""}" data-act="filter-work" data-val="${key}">${label} <span>${counts[key]}</span></button>`)
    .join("");
  const list = visibleWorks();
  document.getElementById("works-body").innerHTML = list.length
    ? list.map((work) => {
      const person = personById(work.person);
      return `<tr data-go="work" data-id="${work.id}">
        <td><div class="person"><span class="avatar">${letter(person && person.name)}</span><b>${esc(person ? person.name : "—")}</b></div></td>
        <td>${esc(work.service)}</td>
        <td class="num">${som(work.price)}</td>
        <td>${dateLabel(work.dateKey)}</td>
        <td>${statusHtml(work.status)}</td>
        <td><button type="button" class="link" data-go="work" data-id="${work.id}">Ochish</button></td>
      </tr>`;
    }).join("")
    : `<tr><td class="empty" colspan="6">Bunday ish yo‘q.</td></tr>`;
}

function renderDetail() {
  const root = document.getElementById("work-detail");
  const work = works.find((item) => item.id === state.workId);
  if (!work || (isStaffView() && work.person !== currentPersonId())) {
    root.innerHTML = `<p class="empty">Ish topilmadi.</p>`;
    return;
  }
  const person = personById(work.person);
  let actions = "";
  if (work.status === "review" && !isStaffView()) {
    actions = `<div class="form-actions">
      <button type="button" class="add-btn" data-act="approve" data-id="${work.id}">Tasdiqlash</button>
      <button type="button" class="danger" data-act="reject" data-id="${work.id}">Rad etish</button>
    </div>`;
  } else if (work.status === "draft" || work.status === "rejected") {
    actions = `<div class="form-actions"><button type="button" class="add-btn" data-act="edit-work" data-id="${work.id}">${work.status === "draft" ? "Davom etish" : "Qayta yuborish"}</button></div>`;
  }
  let extra = "";
  if (work.reason) extra += `<div class="rowline"><span>Sabab</span><b>${esc(work.reason)}</b></div>`;
  root.innerHTML = `
    <div class="two">
      <section class="card"><div class="photo">${photoBox(work.photo)}</div></section>
      <section class="card">
        <h2>${esc(work.service)}</h2>
        <div class="rowline"><span>Xodim</span><b>${esc(person ? person.name : "—")}</b></div>
        <div class="rowline"><span>Narx</span><b>${som(work.price)}</b></div>
        <div class="rowline"><span>Sana</span><b>${dateLabel(work.dateKey)}</b></div>
        <div class="rowline"><span>Holat</span>${statusHtml(work.status)}</div>
        ${work.note ? `<div class="rowline"><span>Izoh</span><b>${esc(work.note)}</b></div>` : ""}
        ${extra}
        ${actions}
      </section>
    </div>`;
}

function renderApprove() {
  const list = works.filter((work) => work.status === "review");
  const root = document.getElementById("approve-list");
  root.innerHTML = list.length
    ? list.map(checkRow).join("")
    : `<p class="empty">Tekshiriladigan ish yo‘q.</p>`;
}

function renderKpi() {
  const periods = [["day", "Bugun"], ["week", "Shu hafta"], ["month", "Shu oy"]];
  document.getElementById("kpi-filters").innerHTML = periods
    .map(([key, label]) => `<button type="button" class="chip${state.kpiPeriod === key ? " active" : ""}" data-act="filter-kpi" data-val="${key}">${label}</button>`)
    .join("");
  const period = state.kpiPeriod;
  const peopleList = people.filter((person) => person.role === "staff" && (isStaffView() ? person.id === currentPersonId() : true));
  const rows = peopleList.map((person) => {
    const pack = (kpi[person.id] && kpi[person.id][period]) || [0, 0];
    return `<tr><td><div class="person"><span class="avatar">${letter(person.name)}</span><b>${esc(person.name)}</b></div></td><td class="num">${pack[0]} ta</td><td class="num">${som(pack[1])}</td></tr>`;
  });
  const total = peopleList.reduce((sum, person) => {
    const pack = (kpi[person.id] && kpi[person.id][period]) || [0, 0];
    return [sum[0] + pack[0], sum[1] + pack[1]];
  }, [0, 0]);
  document.getElementById("kpi-root").innerHTML = `
    <section class="card table-card">
      <div class="table-wrap"><table>
        <thead><tr><th>Xodim</th><th>Tasdiqlangan ishlar</th><th>Jami summa</th></tr></thead>
        <tbody>
          ${rows.join("")}
          ${peopleList.length > 1 ? `<tr><td><b>Jami</b></td><td class="num">${total[0]} ta</td><td class="num">${som(total[1])}</td></tr>` : ""}
        </tbody>
      </table></div>
    </section>`;
}

function renderClients() {
  const query = state.clientQuery.trim().toLowerCase();
  const list = clients.filter((client) => `${client.name} ${client.phone} ${client.person}`.toLowerCase().includes(query));
  document.getElementById("clients-body").innerHTML = list.length
    ? list.map((client) => {
      const debt = clientDebt(client.id);
      return `<tr data-go="client" data-id="${client.id}">
        <td><div class="person"><span class="avatar">${letter(client.name)}</span><span><b>${esc(client.name)}</b><small>${esc(client.person || "")}</small></span></div></td>
        <td>${esc(client.phone)}</td>
        <td class="num">${debt ? som(debt) : "—"}</td>
        <td><button type="button" class="link" data-go="client" data-id="${client.id}">Ochish</button></td>
      </tr>`;
    }).join("")
    : `<tr><td class="empty" colspan="4">Mijoz topilmadi.</td></tr>`;
}

function renderClient() {
  const client = clientById(state.clientId) || clients[0];
  const root = document.getElementById("client-root");
  if (!client) {
    root.innerHTML = `<p class="empty">Mijoz yo‘q.</p>`;
    return;
  }
  state.clientId = client.id;
  const ownSales = sales.filter((sale) => sale.client === client.id);
  const ownPays = payments.filter((item) => item.client === client.id);
  const sold = ownSales.reduce((sum, sale) => sum + saleTotal(sale), 0);
  const paid = ownPays.reduce((sum, item) => sum + item.amount, 0);
  const canSell = can("sales");
  root.innerHTML = `
    <div class="kpi-row">
      ${kpiCard("Sotuv", money(sold), "so‘m")}
      ${kpiCard("To‘langan", money(paid), "so‘m")}
      ${kpiCard("Qarz", money(clientDebt(client.id)), "so‘m")}
    </div>
    <section class="card">
      <div class="card-head head-plain">
        <div>
          <h2>${esc(client.name)}</h2>
          <p class="note">${esc(client.person || "")} · ${esc(client.phone)} · ${esc(client.address || "")}</p>
        </div>
        <div class="actions">
          ${canSell ? `<button type="button" class="add-btn" data-act="new-sale" data-id="${client.id}">Sotuv</button>` : ""}
          ${clientDebt(client.id) ? `<button type="button" class="ghost" data-act="open-pay" data-id="${client.id}">To‘lov</button>` : ""}
        </div>
      </div>
    </section>
    <div class="split">
      <section class="card table-card">
        <div class="card-head"><h2>Sotuvlar</h2></div>
        <div class="table-wrap"><table>
          <thead><tr><th>Nima</th><th>Jami</th><th>Qoldiq</th><th></th></tr></thead>
          <tbody>
            ${ownSales.length ? ownSales.map((sale) => `<tr>
              <td>${esc(sale.item)} × ${sale.qty}<small class="note">${dateLabel(sale.dateKey)} · ${esc(sale.method)}</small></td>
              <td class="num">${som(saleTotal(sale))}</td>
              <td class="num">${saleLeft(sale) ? som(saleLeft(sale)) : "—"}</td>
              <td><button type="button" class="link" data-act="open-receipt" data-id="${sale.id}">Chek</button></td>
            </tr>`).join("") : `<tr><td class="empty" colspan="4">Sotuv yo‘q.</td></tr>`}
          </tbody>
        </table></div>
      </section>
      <section class="card table-card">
        <div class="card-head"><h2>To‘lovlar</h2></div>
        <div class="table-wrap"><table>
          <thead><tr><th>Sana</th><th>Usul</th><th>Summa</th></tr></thead>
          <tbody>
            ${ownPays.length ? ownPays.map((item) => `<tr><td>${dateLabel(item.dateKey)}</td><td>${esc(item.method)}</td><td class="num">${som(item.amount)}</td></tr>`).join("") : `<tr><td class="empty" colspan="3">To‘lov yo‘q.</td></tr>`}
          </tbody>
        </table></div>
      </section>
    </div>`;
}

function renderDebts() {
  const rows = sales
    .map((sale) => ({ sale, left: saleLeft(sale) }))
    .filter((item) => item.left > 0)
    .filter((item) => state.debtFilter !== "overdue" || item.sale.dueKey === "overdue");
  document.getElementById("debt-filters").innerHTML = [
    ["all", "Qarz bor"],
    ["overdue", "Muddati o‘tgan"],
  ].map(([key, label]) => `<button type="button" class="chip${state.debtFilter === key ? " active" : ""}" data-act="filter-debt" data-val="${key}">${label}</button>`).join("");
  document.getElementById("debts-body").innerHTML = rows.length
    ? rows.map(({ sale, left }) => {
      const client = clientById(sale.client);
      const late = sale.dueKey === "overdue";
      return `<tr data-go="client" data-id="${sale.client}">
        <td>${esc(client ? client.name : "—")}</td>
        <td>${esc(sale.item)} × ${sale.qty}</td>
        <td class="num">${som(saleTotal(sale))}</td>
        <td class="num">${som(sale.paid)}</td>
        <td class="num">${som(left)}</td>
        <td>${late ? `<span class="status pink">O‘tgan</span>` : "7 kun"}</td>
        <td><button type="button" class="link" data-go="client" data-id="${sale.client}">Ochish</button></td>
      </tr>`;
    }).join("")
    : `<tr><td class="empty" colspan="7">Qarz yo‘q.</td></tr>`;
}

function renderFinance() {
  const sold = sales.reduce((sum, sale) => sum + saleTotal(sale), 0);
  const income = payments.reduce((sum, item) => sum + item.amount, 0);
  const debt = sold - income;
  const cash = payments.filter((item) => item.method === "Naqd").reduce((sum, item) => sum + item.amount, 0);
  const card = payments.filter((item) => item.method === "Karta").reduce((sum, item) => sum + item.amount, 0);
  const spent = expenses.reduce((sum, item) => sum + item.amount, 0);
  document.getElementById("finance-root").innerHTML = `
    <div class="kpi-row">
      ${kpiCard("Sotuv summasi", money(sold), "so‘m")}
      ${kpiCard("Tushum", money(income), "so‘m")}
      ${kpiCard("Qarzdorlik", money(debt), "so‘m")}
    </div>
    <div class="split">
      <section class="card">
        <h2>To‘lov usuli</h2>
        <div class="rowline"><span>Naqd</span><b>${som(cash)}</b></div>
        <div class="rowline"><span>Karta</span><b>${som(card)}</b></div>
        <div class="rowline"><span>Xarajatlar</span><b>${som(spent)}</b></div>
      </section>
      <section class="card table-card">
        <div class="card-head">
          <h2>Xarajatlar</h2>
          <button type="button" class="add-btn" data-act="open-expense">Xarajat</button>
        </div>
        <div class="table-wrap"><table>
          <thead><tr><th>Nima</th><th>Sana</th><th>Summa</th></tr></thead>
          <tbody>
            ${expenses.map((item) => `<tr><td>${esc(item.name)}</td><td>${dateLabel(item.dateKey)}</td><td class="num">${som(item.amount)}</td></tr>`).join("")}
          </tbody>
        </table></div>
      </section>
    </div>`;
}

function attendState(row) {
  if (!row.inn) return "Kelmagan";
  return row.inn > "09:00" ? "Kechikkan" : "Vaqtida";
}

function attendClass(label) {
  if (label === "Vaqtida") return "green";
  if (label === "Kechikkan") return "orange";
  return "pink";
}

function renderAttendance() {
  const periods = [["day", "Bugun"], ["month", "Shu oy"]];
  document.getElementById("attend-filters").innerHTML = periods
    .map(([key, label]) => `<button type="button" class="chip${state.attendPeriod === key ? " active" : ""}" data-act="filter-attend" data-val="${key}">${label}</button>`)
    .join("");
  const list = attendance.filter((row) => !isStaffView() || row.person === currentPersonId());
  const headBtn = isStaffView() ? "" : `<button type="button" class="add-btn" data-act="open-attend">Davomat yozish</button>`;
  let body;
  if (state.attendPeriod === "month") {
    body = `<table><thead><tr><th>Xodim</th><th>Kelgan</th><th>Kechikkan</th><th>Kelmagan</th></tr></thead><tbody>
      ${list.map((row) => {
        const person = personById(row.person);
        const pack = monthAttendance[row.person] || [0, 0, 0];
        return `<tr><td>${esc(person ? person.name : "—")}</td><td>${pack[0]} kun</td><td>${pack[1]} kun</td><td>${pack[2]} kun</td></tr>`;
      }).join("")}
    </tbody></table>`;
  } else {
    body = `<table><thead><tr><th>Xodim</th><th>Keldi</th><th>Ketdi</th><th>Holat</th></tr></thead><tbody>
      ${list.map((row) => {
        const person = personById(row.person);
        const label = attendState(row);
        return `<tr><td>${esc(person ? person.name : "—")}</td><td>${row.inn || "—"}</td><td>${row.out || "—"}</td><td><span class="status ${attendClass(label)}">${label}</span></td></tr>`;
      }).join("")}
    </tbody></table>`;
  }
  document.getElementById("attendance-root").innerHTML = `
    <section class="card table-card">
      <div class="card-head"><h2>${state.attendPeriod === "month" ? "Oylik davomat" : "Bugungi davomat"}</h2>${headBtn}</div>
      <div class="table-wrap">${body}</div>
      ${state.attendPeriod === "month" ? `<p class="note pad-note">Oylik kunlar misol uchun qo‘yilgan.</p>` : ""}
    </section>`;
}

function renderStaff() {
  document.getElementById("staff-body").innerHTML = people.map((person) => `<tr class="${person.active ? "" : "dim"}">
    <td><div class="person"><span class="avatar">${letter(person.name)}</span><b>${esc(person.name)}</b></div></td>
    <td>${esc(person.login)}</td>
    <td>${person.role === "admin" ? "Administrator" : "Xodim"}</td>
    <td>${person.active ? `<span class="status green">Faol</span>` : `<span class="status gray">Faol emas</span>`}</td>
    <td class="actions">
      <button type="button" class="link" data-act="edit-staff" data-id="${esc(person.id)}">O‘zgartirish</button>
      ${person.id === "admin" ? "" : `<button type="button" class="danger" data-act="toggle-staff" data-id="${esc(person.id)}">${person.active ? "Faolsiz" : "Faol"}</button>`}
    </td>
  </tr>`).join("");
}

function renderServices() {
  document.getElementById("services-body").innerHTML = services.map((service) => `<tr class="${service.active ? "" : "dim"}">
    <td><b>${esc(service.name)}</b></td>
    <td class="num">${som(service.price)}</td>
    <td>${service.active ? `<span class="status green">Faol</span>` : `<span class="status gray">Faol emas</span>`}</td>
    <td class="actions">
      <button type="button" class="link" data-act="edit-service" data-id="${service.id}">O‘zgartirish</button>
      <button type="button" class="danger" data-act="toggle-service" data-id="${service.id}">${service.active ? "Faolsiz" : "Faol"}</button>
    </td>
  </tr>`).join("");
}

function renderRoles() {
  const rows = [
    ["Xodim qo‘shish", "Ha", "yoq"],
    ["Xizmat va narx", "Ha", "yoq"],
    ["Ish kiritish", "Ha", "ha"],
    ["Barcha ishlar", "Ha", "yoq"],
    ["O‘z ishlari", "Ha", "ha"],
    ["Tasdiqlash", "Ha", "yoq"],
    ["Barcha KPI", "Ha", "yoq"],
    ["O‘z KPI", "Ha", "ha"],
    ["Mijozlar", "Ha", "clients"],
    ["Sotuv", "Ha", "sales"],
    ["Moliya", "Ha", "finance"],
    ["Davomat, hammasi", "Ha", "yoq"],
    ["O‘z davomati", "Ha", "ha"],
  ];
  document.getElementById("roles-body").innerHTML = rows.map(([name, admin, staff]) => {
    let cell = "Yo‘q";
    if (staff === "ha") cell = "Ha";
    if (staff === "clients" || staff === "sales" || staff === "finance") {
      cell = `<input type="checkbox" data-act="perm" data-key="${staff}"${perms[staff] ? " checked" : ""}>`;
    }
    return `<tr><td>${name}</td><td>${admin}</td><td>${cell}</td></tr>`;
  }).join("");
}

function renderReport() {
  const period = state.reportPeriod;
  const labels = [["day", "Bugun"], ["week", "Shu hafta"], ["month", "Shu oy"]];
  document.getElementById("report-filters").innerHTML = labels
    .map(([key, label]) => `<button type="button" class="chip${period === key ? " active" : ""}" data-act="filter-report" data-val="${key}">${label}</button>`)
    .join("");
  const staff = people.filter((person) => person.role === "staff");
  const workCount = staff.reduce((sum, person) => sum + ((kpi[person.id] && kpi[person.id][period] && kpi[person.id][period][0]) || 0), 0);
  const workSum = staff.reduce((sum, person) => sum + ((kpi[person.id] && kpi[person.id][period] && kpi[person.id][period][1]) || 0), 0);
  const periodSales = sales.filter((sale) => inPeriod(sale.dateKey, period));
  const sold = periodSales.reduce((sum, sale) => sum + saleTotal(sale), 0);
  const income = payments.filter((item) => inPeriod(item.dateKey, period)).reduce((sum, item) => sum + item.amount, 0);
  const spent = expenses.filter((item) => inPeriod(item.dateKey, period)).reduce((sum, item) => sum + item.amount, 0);
  const debt = periodSales.reduce((sum, sale) => sum + saleLeft(sale), 0);
  const lines = [
    ["Tasdiqlangan ishlar", workCount + " ta"],
    ["Ishlar summasi", som(workSum)],
    ["Sotuv", som(sold)],
    ["Tushum", som(income)],
    ["Xarajat", som(spent)],
    ["Qarz", som(debt)],
  ];
  document.getElementById("report-root").innerHTML = `
    <section class="card">
      ${lines.map(([name, value]) => `<div class="rowline"><span>${name}</span><b>${value}</b></div>`).join("")}
    </section>`;
}

function renderReceipt() {
  const sale = sales.find((item) => item.id === state.saleId) || sales[0];
  const root = document.getElementById("receipt-root");
  if (!sale) {
    root.innerHTML = `<p class="empty">Chek yo‘q.</p>`;
    return;
  }
  const client = clientById(sale.client);
  const name = document.getElementById("set-name").value.trim() || "Laboratoriya";
  const thanks = document.getElementById("set-thanks").value.trim() || "Rahmat";
  root.innerHTML = `
    <article class="card receipt" id="receipt-print">
      <h2>${esc(name)}</h2>
      <p class="shop">Chek № ${sale.id}</p>
      <div class="rowline"><span>Mijoz</span><b>${esc(client ? client.name : "—")}</b></div>
      <div class="rowline"><span>Sana</span><b>${dateLabel(sale.dateKey)}</b></div>
      <div class="item">
        <div class="thumb">${photoBox(sale.photo)}</div>
        <div>
          <b>${esc(sale.item)}</b>
          <span class="note">${sale.qty} × ${som(sale.price)}</span>
        </div>
      </div>
      <div class="rowline"><span>Jami</span><b>${som(saleTotal(sale))}</b></div>
      <div class="rowline"><span>To‘landi</span><b>${som(sale.paid)}</b></div>
      <div class="rowline"><span>Qolgan qarz</span><b>${som(saleLeft(sale))}</b></div>
      <div class="rowline"><span>Usul</span><b>${esc(sale.method)}</b></div>
      <p class="shop thanks">${esc(thanks)}</p>
    </article>`;
}

function updateWorkPrice() {
  const service = services.find((item) => String(item.id) === document.getElementById("work-service").value);
  document.getElementById("work-price").textContent = service ? som(service.price) : "—";
}

function selectedService(id) {
  return services.find((item) => String(item.id) === String(id));
}

function updateSale() {
  const service = selectedService(document.getElementById("sale-service").value);
  const qty = Math.max(0, Number(document.getElementById("sale-qty").value) || 0);
  const total = service ? service.price * qty : 0;
  const method = document.getElementById("sale-method").value;
  const paidInput = document.getElementById("sale-paid");
  if (method === "Naqd" || method === "Karta") {
    paidInput.value = String(total);
    paidInput.readOnly = true;
  } else if (method === "Qarz") {
    paidInput.value = "0";
    paidInput.readOnly = true;
  } else {
    paidInput.readOnly = false;
  }
  const paid = Math.max(0, Number(paidInput.value) || 0);
  document.getElementById("sale-left").textContent = som(Math.max(0, total - paid));
}

function resetWorkForm() {
  state.editId = null;
  state.photo = "";
  document.getElementById("work-form").reset();
  document.getElementById("work-preview").hidden = true;
  document.getElementById("work-preview").innerHTML = "";
  document.getElementById("work-file-label").textContent = "Rasm olish yoki yuklash";
  document.getElementById("work-error").hidden = true;
  document.getElementById("work-submit").textContent = "Tasdiqlashga yuborish";
  fillForms();
}

function showWorkPreview(src) {
  const box = document.getElementById("work-preview");
  if (!src) {
    box.hidden = true;
    return;
  }
  box.hidden = false;
  box.innerHTML = src.startsWith("data:image/") ? `<img alt="Rasm" src="${src}">` : "<span>Rasm biriktirilgan</span>";
}

function readFile(file, done) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => done(String(reader.result || ""));
  reader.readAsDataURL(file);
}

function addKpi(person, price) {
  if (!kpi[person]) kpi[person] = { day: [0, 0], week: [0, 0], month: [0, 0] };
  ["day", "week", "month"].forEach((key) => {
    kpi[person][key][0] += 1;
    kpi[person][key][1] += price;
  });
}

function approveWork(id) {
  const work = works.find((item) => item.id === Number(id));
  if (!work || work.status === "approved") return;
  work.status = "approved";
  work.reason = "";
  addKpi(work.person, work.price);
  state.workId = work.id;
  flash("Ish tasdiqlandi");
  renderAll();
}

function openReject(id) {
  state.rejectId = Number(id);
  document.getElementById("reject-reason").value = "";
  openModal("modal-reject");
}

function openComposer(id) {
  const work = works.find((item) => item.id === Number(id));
  resetWorkForm();
  if (!work) {
    go("work-new");
    return;
  }
  state.editId = work.id;
  state.photo = typeof work.photo === "string" ? work.photo : "";
  const service = services.find((item) => item.name === work.service);
  document.getElementById("work-service").value = service ? String(service.id) : "";
  document.getElementById("work-person").value = work.person;
  document.getElementById("work-note").value = work.note || "";
  document.getElementById("work-submit").textContent = work.status === "rejected" ? "Qayta yuborish" : "Tasdiqlashga yuborish";
  if (work.photo && !state.photo) {
    showWorkPreview("keep");
    document.getElementById("work-file-label").textContent = "Rasm bor. Istasangiz almashtiring";
  } else showWorkPreview(state.photo);
  updateWorkPrice();
  go("work-new");
}

function submitWork(event) {
  event.preventDefault();
  const error = document.getElementById("work-error");
  const service = selectedService(document.getElementById("work-service").value);
  const existing = works.find((item) => item.id === state.editId);
  const personId = isStaffView() ? currentPersonId() : document.getElementById("work-person").value;
  if (!service) {
    error.hidden = false;
    error.textContent = "Ish turini tanlang.";
    return;
  }
  const photo = state.photo || (existing && existing.photo);
  if (!photo) {
    error.hidden = false;
    error.textContent = "Rasm kiriting.";
    return;
  }
  if (existing) {
    existing.service = service.name;
    existing.price = service.price;
    existing.person = personId;
    existing.note = document.getElementById("work-note").value.trim();
    existing.photo = state.photo || existing.photo;
    existing.status = "review";
    existing.reason = "";
    state.workId = existing.id;
  } else {
    const work = {
      id: ids.work++,
      person: personId,
      service: service.name,
      price: service.price,
      status: "review",
      dateKey: "today",
      photo: state.photo,
      note: document.getElementById("work-note").value.trim(),
      reason: "",
    };
    works.unshift(work);
    state.workId = work.id;
  }
  error.hidden = true;
  resetWorkForm();
  flash("Ish tasdiqlashga yuborildi");
  go("works");
  renderAll();
}

function submitSale(event) {
  event.preventDefault();
  const error = document.getElementById("sale-error");
  const service = selectedService(document.getElementById("sale-service").value);
  const qty = Number(document.getElementById("sale-qty").value) || 0;
  const method = document.getElementById("sale-method").value;
  const total = service ? service.price * qty : 0;
  const paid = Number(document.getElementById("sale-paid").value) || 0;
  if (!service || qty < 1) {
    error.hidden = false;
    error.textContent = "Mahsulot va sonini kiriting.";
    return;
  }
  if (paid < 0 || paid > total || (method === "Qisman" && (paid === 0 || paid === total))) {
    error.hidden = false;
    error.textContent = "To‘lov summasini tekshiring.";
    return;
  }
  const sale = {
    id: ids.sale++,
    client: Number(document.getElementById("sale-client").value),
    item: service.name,
    qty,
    price: service.price,
    paid,
    method,
    dateKey: "today",
    dueKey: paid < total ? "week" : "",
    photo: state.salePhoto,
  };
  sales.unshift(sale);
  if (paid > 0) {
    payments.unshift({ id: ids.pay++, client: sale.client, sale: sale.id, amount: paid, method: method === "Karta" ? "Karta" : "Naqd", dateKey: "today" });
  }
  state.saleId = sale.id;
  state.clientId = sale.client;
  error.hidden = true;
  document.getElementById("sale-form").reset();
  document.getElementById("sale-qty").value = "1";
  state.salePhoto = "";
  document.getElementById("sale-preview").hidden = true;
  document.getElementById("sale-file-label").textContent = "Rasm yuklash";
  fillForms();
  flash("Sotuv saqlandi");
  go("receipt");
  renderAll();
}

function submitPay(event) {
  event.preventDefault();
  const error = document.getElementById("pay-error");
  const sale = sales.find((item) => item.id === Number(document.getElementById("pay-sale").value));
  const amount = Number(document.getElementById("pay-amount").value) || 0;
  if (!sale || amount <= 0 || amount > saleLeft(sale)) {
    error.hidden = false;
    error.textContent = "Summa qolgan qarzdan oshmasin.";
    return;
  }
  sale.paid += amount;
  if (saleLeft(sale) === 0) sale.dueKey = "";
  payments.unshift({
    id: ids.pay++,
    client: sale.client,
    sale: sale.id,
    amount,
    method: document.getElementById("pay-method").value,
    dateKey: "today",
  });
  error.hidden = true;
  closeModals();
  flash("To‘lov yozildi");
  renderAll();
}

function startApp() {
  document.getElementById("login-screen").hidden = true;
  document.getElementById("app").hidden = false;
  fillForms();
  const page = (location.hash || "#home").slice(1);
  renderAll();
  go(META[page] ? page : "home");
}

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const login = document.getElementById("login-user").value.trim().toLowerCase();
  const pass = document.getElementById("login-pass").value;
  const error = document.getElementById("login-error");
  const person = people.find((item) => item.login === login);
  if (!person || passwords[person.id] !== pass) {
    error.hidden = false;
    error.textContent = "Login yoki parol noto‘g‘ri.";
    return;
  }
  if (!person.active) {
    error.hidden = false;
    error.textContent = "Bu xodim faol emas.";
    return;
  }
  error.hidden = true;
  state.session = { id: person.id, as: person.role === "admin" ? "admin" : person.id };
  startApp();
});

document.getElementById("logout").addEventListener("click", () => {
  state.session = null;
  document.getElementById("app").hidden = true;
  document.getElementById("login-screen").hidden = false;
  history.replaceState(null, "", location.pathname);
});

document.getElementById("role-switch").addEventListener("click", () => {
  if (!state.session || state.session.id !== "admin") return;
  state.session.as = state.session.as === "admin" ? "murat" : "admin";
  renderAll();
  if (!pageAllowed(state.page)) go("home");
  else go(state.page);
});

document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("overlay").hidden = false;
});
document.getElementById("overlay").addEventListener("click", closeMenu);
window.addEventListener("resize", () => {
  if (window.innerWidth > 860) closeMenu();
});

document.getElementById("work-search").addEventListener("input", (event) => {
  state.workQuery = event.target.value;
  renderWorks();
});
document.getElementById("client-search").addEventListener("input", (event) => {
  state.clientQuery = event.target.value;
  renderClients();
});
document.getElementById("work-service").addEventListener("change", () => {
  updateWorkPrice();
  document.getElementById("work-error").hidden = true;
});
document.getElementById("work-form").addEventListener("submit", submitWork);
document.getElementById("work-photo").addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  readFile(file, (src) => {
    state.photo = src;
    document.getElementById("work-file-label").textContent = file.name;
    showWorkPreview(src);
  });
});

["sale-service", "sale-qty", "sale-method", "sale-paid"].forEach((id) => {
  document.getElementById(id).addEventListener("input", updateSale);
  document.getElementById(id).addEventListener("change", updateSale);
});
document.getElementById("sale-form").addEventListener("submit", submitSale);
document.getElementById("sale-photo").addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  readFile(file, (src) => {
    state.salePhoto = src;
    document.getElementById("sale-file-label").textContent = file.name;
    const box = document.getElementById("sale-preview");
    box.hidden = false;
    box.innerHTML = `<img alt="Rasm" src="${src}">`;
  });
});

document.getElementById("form-reject").addEventListener("submit", (event) => {
  event.preventDefault();
  const work = works.find((item) => item.id === state.rejectId);
  const reason = document.getElementById("reject-reason").value.trim();
  if (!work || !reason) return;
  work.status = "rejected";
  work.reason = reason;
  closeModals();
  flash("Ish rad etildi");
  renderAll();
});

document.getElementById("form-pay").addEventListener("submit", submitPay);
document.getElementById("form-expense").addEventListener("submit", (event) => {
  event.preventDefault();
  expenses.unshift({
    id: ids.expense++,
    name: document.getElementById("expense-name").value.trim(),
    amount: Number(document.getElementById("expense-amount").value) || 0,
    dateKey: "today",
  });
  event.target.reset();
  closeModals();
  flash("Xarajat yozildi");
  renderAll();
});

document.getElementById("form-staff").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("staff-name").value.trim();
  const login = document.getElementById("staff-login").value.trim().toLowerCase();
  const pass = document.getElementById("staff-pass").value;
  const role = document.getElementById("staff-role").value;
  if (people.some((person) => person.login === login && person.id !== state.staffId)) {
    flash("Bu login band", false);
    return;
  }
  if (state.staffId) {
    const person = personById(state.staffId);
    person.name = name;
    person.login = login;
    person.role = role;
    if (pass) passwords[person.id] = pass;
  } else {
    const id = "u" + ids.work++;
    people.push({ id, name, login, role, active: true });
    passwords[id] = pass;
    if (role === "staff") {
      kpi[id] = { day: [0, 0], week: [0, 0], month: [0, 0] };
      attendance.push({ person: id, inn: "", out: "" });
      monthAttendance[id] = [0, 0, 0];
    }
  }
  event.target.reset();
  closeModals();
  fillForms();
  flash("Xodim saqlandi");
  renderAll();
});

document.getElementById("form-service").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("service-name").value.trim();
  const price = Number(document.getElementById("service-price").value) || 0;
  const active = document.getElementById("service-active").checked;
  if (state.serviceId) {
    const service = services.find((item) => item.id === state.serviceId);
    service.name = name;
    service.price = price;
    service.active = active;
    flash("Narx yangilandi. Eski ishlar o‘zgarmadi");
  } else {
    services.push({ id: ids.service++, name, price, active });
    flash("Xizmat qo‘shildi");
  }
  event.target.reset();
  document.getElementById("service-active").checked = true;
  closeModals();
  fillForms();
  renderAll();
});

document.getElementById("form-attend").addEventListener("submit", (event) => {
  event.preventDefault();
  const person = document.getElementById("attend-person").value;
  let row = attendance.find((item) => item.person === person);
  if (!row) {
    row = { person, inn: "", out: "" };
    attendance.push(row);
  }
  row.inn = document.getElementById("attend-in").value;
  row.out = document.getElementById("attend-out").value;
  closeModals();
  flash("Davomat yozildi");
  renderAll();
});

document.getElementById("form-client").addEventListener("submit", (event) => {
  event.preventDefault();
  const client = {
    id: ids.client++,
    name: document.getElementById("client-name").value.trim(),
    phone: document.getElementById("client-phone").value.trim(),
    person: document.getElementById("client-person").value.trim(),
    address: document.getElementById("client-address").value.trim(),
  };
  clients.unshift(client);
  state.clientId = client.id;
  event.target.reset();
  closeModals();
  fillForms();
  flash("Mijoz qo‘shildi");
  go("client");
  renderAll();
});

document.getElementById("set-name").addEventListener("input", applyChrome);
document.getElementById("set-thanks").addEventListener("input", renderReceipt);
document.getElementById("print-btn").addEventListener("click", () => window.print());

document.addEventListener("click", (event) => {
  const act = event.target.closest("[data-act]");
  if (act) {
    const id = act.dataset.id;
    if (act.dataset.act === "approve") approveWork(id);
    if (act.dataset.act === "reject") openReject(id);
    if (act.dataset.act === "edit-work") openComposer(id);
    if (act.dataset.act === "close") closeModals();
    if (act.dataset.act === "filter-work") {
      state.workFilter = act.dataset.val;
      renderWorks();
    }
    if (act.dataset.act === "filter-kpi") {
      state.kpiPeriod = act.dataset.val;
      renderKpi();
    }
    if (act.dataset.act === "filter-debt") {
      state.debtFilter = act.dataset.val;
      renderDebts();
    }
    if (act.dataset.act === "filter-report") {
      state.reportPeriod = act.dataset.val;
      renderReport();
    }
    if (act.dataset.act === "filter-attend") {
      state.attendPeriod = act.dataset.val;
      renderAttendance();
    }
    if (act.dataset.act === "new-sale") {
      state.clientId = Number(id);
      document.getElementById("sale-client").value = String(id);
      updateSale();
      go("sale");
    }
    if (act.dataset.act === "open-receipt") {
      state.saleId = Number(id);
      renderReceipt();
      go("receipt");
    }
    if (act.dataset.act === "open-pay") {
      const clientId = Number(id);
      const options = sales
        .filter((sale) => sale.client === clientId && saleLeft(sale) > 0)
        .map((sale) => `<option value="${sale.id}">${esc(sale.item)} · ${som(saleLeft(sale))}</option>`)
        .join("");
      document.getElementById("pay-sale").innerHTML = options;
      document.getElementById("pay-amount").value = "";
      document.getElementById("pay-error").hidden = true;
      openModal("modal-pay");
    }
    if (act.dataset.act === "open-expense") openModal("modal-expense");
    if (act.dataset.act === "open-client") openModal("modal-client");
    if (act.dataset.act === "open-attend") openModal("modal-attend");
    if (act.dataset.act === "open-staff") {
      state.staffId = null;
      document.getElementById("staff-modal-title").textContent = "Xodim qo‘shish";
      document.getElementById("form-staff").reset();
      document.getElementById("staff-pass").required = true;
      openModal("modal-staff");
    }
    if (act.dataset.act === "edit-staff") {
      const person = personById(id);
      state.staffId = person.id;
      document.getElementById("staff-modal-title").textContent = "Xodimni o‘zgartirish";
      document.getElementById("staff-name").value = person.name;
      document.getElementById("staff-login").value = person.login;
      document.getElementById("staff-pass").value = "";
      document.getElementById("staff-pass").required = false;
      document.getElementById("staff-role").value = person.role;
      openModal("modal-staff");
    }
    if (act.dataset.act === "toggle-staff") {
      const person = personById(id);
      if (person && person.id !== "admin") person.active = !person.active;
      renderAll();
    }
    if (act.dataset.act === "open-service") {
      state.serviceId = null;
      document.getElementById("service-modal-title").textContent = "Xizmat qo‘shish";
      document.getElementById("form-service").reset();
      document.getElementById("service-active").checked = true;
      openModal("modal-service");
    }
    if (act.dataset.act === "edit-service") {
      const service = services.find((item) => item.id === Number(id));
      state.serviceId = service.id;
      document.getElementById("service-modal-title").textContent = "Xizmatni o‘zgartirish";
      document.getElementById("service-name").value = service.name;
      document.getElementById("service-price").value = String(service.price);
      document.getElementById("service-active").checked = service.active;
      openModal("modal-service");
    }
    if (act.dataset.act === "toggle-service") {
      const service = services.find((item) => item.id === Number(id));
      service.active = !service.active;
      fillForms();
      renderAll();
    }
    if (act.dataset.act === "perm") {
      perms[act.dataset.key] = act.checked;
      applyChrome();
    }
    return;
  }

  const nav = event.target.closest("[data-go]");
  if (!nav) return;
  event.preventDefault();
  if (nav.dataset.id) {
    const num = Number(nav.dataset.id);
    if (nav.dataset.go === "work") state.workId = num;
    if (nav.dataset.go === "client") state.clientId = num;
  }
  if (nav.dataset.go === "work-new") resetWorkForm();
  if (nav.dataset.go === "client") renderClient();
  if (nav.dataset.go === "work") renderDetail();
  go(nav.dataset.go);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModals();
    closeMenu();
  }
});

document.querySelectorAll(".modal").forEach((box) => {
  box.addEventListener("click", (event) => {
    if (event.target === box) closeModals();
  });
});

document.getElementById("today-label").textContent = "17 oktabr 2026";
