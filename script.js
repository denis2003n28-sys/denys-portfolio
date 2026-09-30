"use strict";

/*
  email: shown as a mailto link next to the form.
  endpoint: POST FormData to Formspree. The email field is Reply-To.
*/
const contactConfig = {
  email: "moneygangwizard228@gmail.com",
  endpoint: "https://formspree.io/f/maenkblp"
};

const STORAGE_KEY = "portfolio-lang";
const LANGS = ["de", "en", "ru"];

const translations = {
  de: {
    "meta.title": "Denys — Websites für kleine Betriebe",
    "meta.description": "Denys baut Websites für Handwerk, Werkstatt und andere lokale Betriebe. Zwei Konzeptseiten sind online. Keine Kundenaufträge.",
    "a11y.skip": "Zum Inhalt",
    "a11y.nav": "Hauptnavigation",
    "a11y.lang": "Sprache",
    "a11y.legal": "Rechtliches",
    "nav.work": "Beispiele",
    "nav.services": "Leistungen",
    "nav.process": "Ablauf",
    "nav.contact": "Kontakt",
    "nav.cta": "Anfragen",
    "hero.eyebrow": "Websites für kleine Betriebe",
    "hero.title": "Ich baue Seiten, auf denen Kunden Sie erreichen.",
    "hero.lead": "Für Handwerk, Werkstatt und andere lokale Betriebe. Leistungen, Kontakt und eine Anfrage — lesbar auf dem Handy.",
    "hero.note": "Eine Ansprechperson. Antwort in der Regel innerhalb eines Werktags.",
    "hero.view": "Beispiele ansehen",
    "projects.title": "Beispiele",
    "projects.statement": "Zwei Konzepte. Keine Kundenaufträge.",
    "projects.intro": "NordWerk und AutoKraft sind fiktive Betriebe. Die Seiten sind fertig und online. Sie zeigen Aufbau, Gestaltung und eine Funktion. Namen, Adressen und Bewertungen dort sind erfunden.",
    "projects.flag": "Konzept · fiktiver Betrieb · keine Auftragsarbeit",
    "projects.demoLang": "Die Demo selbst ist auf Deutsch.",
    "projects.nordwerk.trade": "Innenausbau",
    "projects.nordwerk.summary": "Eine ruhige Seite für Leistungen, den Betrieb, den Ablauf und eine Anfrage.",
    "projects.nordwerk.p1": "Der Ton passt zu einem Handwerksbetrieb.",
    "projects.nordwerk.p2": "Die Leistungen sind ohne Katalog lesbar.",
    "projects.nordwerk.p3": "Die Anfrage liegt offen und ist nicht im Menü versteckt.",
    "projects.nordwerk.iframe": "Vorschau der Konzeptseite NordWerk",
    "projects.nordwerk.liveAria": "NordWerk live ansehen, öffnet in neuem Tab",
    "projects.autokraft.trade": "Kfz-Werkstatt",
    "projects.autokraft.summary": "Eine Werkstattseite mit Öffnungsstatus, Leistungsübersicht und einem unverbindlichen Preisrechner.",
    "projects.autokraft.p1": "Viele Leistungen bleiben auf einer Seite übersichtlich.",
    "projects.autokraft.p2": "Eine Preisspanne ist vor dem Anruf sichtbar.",
    "projects.autokraft.p3": "Telefon und Anfrage bleiben leicht zu erreichen.",
    "projects.autokraft.iframe": "Vorschau der Konzeptseite AutoKraft",
    "projects.autokraft.liveAria": "AutoKraft live ansehen, öffnet in neuem Tab",
    "projects.live": "Live ansehen",
    "projects.closing": "Eine Seite in dieser Art für Ihren Betrieb.",
    "services.title": "Leistungen",
    "services.intro": "Was derzeit möglich ist.",
    "services.i1": "Eine Website mit einer oder wenigen Seiten.",
    "services.i2": "Leistungen, Ablauf und Kontakt so erklärt, dass klar ist, was als Nächstes zu tun ist.",
    "services.i3": "Darstellung auf dem Handy.",
    "services.i4": "Anruf, E-Mail und Formular.",
    "services.i5": "Eine kleine Hilfe auf der Seite, wenn sie zum Betrieb passt — zum Beispiel eine unverbindliche Preiseinschätzung.",
    "services.i6": "Veröffentlichung unter einer Adresse, die Sie weitergeben können.",
    "services.i7": "Textänderungen nach Absprache.",
    "services.boundaryTitle": "Derzeit nicht im Angebot",
    "services.boundary": "Onlineshop, Terminbuchung mit Bezahlung, Google-Werbung und laufende Suchmaschinenbetreuung.",
    "process.title": "Ablauf",
    "process.s1t": "Ausgangslage",
    "process.s1d": "Sie schreiben, was der Betrieb macht und was die Seite können soll. Texte und Fotos, die schon da sind, genügen oft.",
    "process.s2t": "Umfang und Preis",
    "process.s2d": "Ich sage, was möglich ist, und nenne Umfang und Preis, bevor ich anfange.",
    "process.s3t": "Erste Version",
    "process.s3d": "Sie sehen eine erste Version. Wir korrigieren, dann geht die Seite online.",
    "about.title": "Über mich",
    "about.p1": "Ich heiße Denys und entwickle Websites für kleine Betriebe. Beim Entwurf und im Code nutze ich moderne Werkzeuge, auch KI. Struktur, Texte und das, was online geht, lege ich selbst fest.",
    "about.p2": "Ich arbeite direkt mit Ihnen, ohne Projektmanager dazwischen.",
    "about.p3": "Die Beispiele oben sind Übungen, keine Referenzen von Auftraggebern.",
    "contact.title": "Kontakt",
    "contact.heading": "Projekt anfragen",
    "contact.text": "Schreiben Sie, welcher Betrieb es ist und was die Seite können soll. Texte und Fotos, die schon da sind, können Sie erwähnen. Ich melde mich in der Regel innerhalb eines Werktags.",
    "contact.emailPending": "Eine direkte E-Mail-Adresse wird hier ergänzt.",
    "form.name": "Name",
    "form.business": "Betrieb",
    "form.email": "E-Mail",
    "form.phone": "Telefon",
    "form.optional": "optional",
    "form.message": "Nachricht",
    "form.privacyBefore": "Die Formulardaten werden über Formspree gesendet. Ich habe den Hinweis zum ",
    "form.privacyLink": "Datenschutz",
    "form.privacyAfter": " gelesen.",
    "form.privacyAria": "Die Formulardaten werden über Formspree gesendet. Ich habe den Hinweis zum Datenschutz gelesen.",
    "form.phName": "Ihr Name",
    "form.phBusiness": "z. B. Werkstatt oder Laden",
    "form.phEmail": "name@domain.com",
    "form.phPhone": "Für einen Rückruf",
    "form.phMessage": "Was die Seite können soll",
    "form.submit": "Anfrage senden",
    "form.required": "Bitte füllen Sie dieses Feld aus.",
    "form.badEmail": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    "form.needPrivacy": "Bitte bestätigen Sie den Hinweis zum Datenschutz.",
    "form.sending": "Wird gesendet …",
    "form.demo": "Vorschau: die Nachricht wurde nicht gesendet. Das Formular ist noch nicht an ein Postfach angeschlossen.",
    "form.error": "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
    "form.rateLimit": "Zu viele Anfragen. Bitte versuchen Sie es in ein paar Minuten erneut.",
    "form.success": "Nachricht gesendet. Ich melde mich in der Regel innerhalb eines Werktags.",
    "footer.privacy": "Datenschutz",
    "impressum.note": "",
    "privacy.text": "Die gewählte Sprache wird lokal in diesem Browser gespeichert (localStorage). Die Angaben aus dem Formular werden zur Bearbeitung der Anfrage über Formspree gesendet."
  },
  en: {
    "meta.title": "Denys — Websites for small businesses",
    "meta.description": "Denys builds websites for trades, workshops, and other local businesses. Two concept sites are online. No client projects.",
    "a11y.skip": "Skip to content",
    "a11y.nav": "Main navigation",
    "a11y.lang": "Language",
    "a11y.legal": "Legal",
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.cta": "Contact",
    "hero.eyebrow": "Websites for small businesses",
    "hero.title": "I build pages that help customers reach you.",
    "hero.lead": "For trades, workshops, and other local businesses. Services, contact, and an inquiry — readable on a phone.",
    "hero.note": "One person to talk to. A reply usually within one working day.",
    "hero.view": "View examples",
    "projects.title": "Work",
    "projects.statement": "Two concepts. No client projects.",
    "projects.intro": "NordWerk and AutoKraft are fictional businesses. The sites are finished and online. They show structure, design, and one working feature. Names, addresses, and reviews there are invented.",
    "projects.flag": "Concept · fictional business · not a client project",
    "projects.demoLang": "The live demo itself is in German.",
    "projects.nordwerk.trade": "Interior fit-out",
    "projects.nordwerk.summary": "A calm page for services, the business, the process, and an inquiry.",
    "projects.nordwerk.p1": "The tone fits a trade business.",
    "projects.nordwerk.p2": "The services are readable without a catalogue.",
    "projects.nordwerk.p3": "The inquiry is in the open, not tucked into a menu.",
    "projects.nordwerk.iframe": "Preview of the NordWerk concept site",
    "projects.nordwerk.liveAria": "View NordWerk live, opens in a new tab",
    "projects.autokraft.trade": "Car workshop",
    "projects.autokraft.summary": "A workshop page with open status, a service list, and a non-binding price estimate.",
    "projects.autokraft.p1": "Many services stay clear on a single page.",
    "projects.autokraft.p2": "A price range is visible before the call.",
    "projects.autokraft.p3": "Phone and inquiry stay easy to reach.",
    "projects.autokraft.iframe": "Preview of the AutoKraft concept site",
    "projects.autokraft.liveAria": "View AutoKraft live, opens in a new tab",
    "projects.live": "View live",
    "projects.closing": "A page like this for your business.",
    "services.title": "Services",
    "services.intro": "What is possible right now.",
    "services.i1": "A website with one page or a few short pages.",
    "services.i2": "Services, process, and contact explained so the next step is clear.",
    "services.i3": "A layout that works on a phone.",
    "services.i4": "Call, email, and a form.",
    "services.i5": "A small on-page tool when the business needs one — for example a non-binding price estimate.",
    "services.i6": "Publication at an address you can pass on.",
    "services.i7": "Text changes by agreement.",
    "services.boundaryTitle": "Not part of the work right now",
    "services.boundary": "Online shops, appointment booking with payment, Google ads, and ongoing search-engine work.",
    "process.title": "Process",
    "process.s1t": "Starting point",
    "process.s1d": "You write what the business does and what the page should do. Existing text and photos are often enough.",
    "process.s2t": "Scope and price",
    "process.s2d": "I say what is possible and name the scope and price before I start.",
    "process.s3t": "First version",
    "process.s3d": "You see a first version. We adjust it, then the site goes online.",
    "about.title": "About",
    "about.p1": "My name is Denys. I build websites for small businesses. For the layout and the code I use modern tools, including AI. I decide the structure, the wording, and what goes online.",
    "about.p2": "I work with you directly. There is no project manager in between.",
    "about.p3": "The examples above are practice concepts, not client projects.",
    "contact.title": "Contact",
    "contact.heading": "Start a project",
    "contact.text": "Write which business it is and what the page should do. You can mention text and photos you already have. I usually reply within one working day.",
    "contact.emailPending": "A direct email address will be added here.",
    "form.name": "Name",
    "form.business": "Business",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.optional": "optional",
    "form.message": "Message",
    "form.privacyBefore": "Form details are sent through Formspree. I have read the ",
    "form.privacyLink": "privacy note",
    "form.privacyAfter": ".",
    "form.privacyAria": "Form details are sent through Formspree. I have read the privacy note.",
    "form.phName": "Your name",
    "form.phBusiness": "e.g. workshop or shop",
    "form.phEmail": "name@domain.com",
    "form.phPhone": "For a callback",
    "form.phMessage": "What the page should do",
    "form.submit": "Send inquiry",
    "form.required": "Please fill in this field.",
    "form.badEmail": "Please enter a valid email address.",
    "form.needPrivacy": "Please confirm the privacy note.",
    "form.sending": "Sending …",
    "form.demo": "Preview: the message was not sent. The form is not connected to an inbox yet.",
    "form.error": "The inquiry could not be sent. Please try again later.",
    "form.rateLimit": "Too many requests. Please try again in a few minutes.",
    "form.success": "Message sent. I usually reply within one working day.",
    "footer.privacy": "Privacy",
    "impressum.note": "The legal notice below is in German.",
    "privacy.text": "The chosen language is stored locally in this browser (localStorage). The details from the form are sent through Formspree so the inquiry can be handled."
  },
  ru: {
    "meta.title": "Denys — Сайты для небольших компаний",
    "meta.description": "Denys делает сайты для ремесленных мастерских и других местных компаний. Два концепта уже онлайн. Это не заказы клиентов.",
    "a11y.skip": "К содержанию",
    "a11y.nav": "Основная навигация",
    "a11y.lang": "Язык",
    "a11y.legal": "Правовая информация",
    "nav.work": "Работы",
    "nav.services": "Услуги",
    "nav.process": "Этапы",
    "nav.contact": "Контакт",
    "nav.cta": "Написать",
    "hero.eyebrow": "Сайты для небольших компаний",
    "hero.title": "Делаю сайты, с которых клиенты легко с вами связываются.",
    "hero.lead": "Для ремесленных мастерских, автосервисов и других местных компаний. Услуги, контакт и заявка — удобно читать с телефона.",
    "hero.note": "Один собеседник. Ответ обычно в течение одного рабочего дня.",
    "hero.view": "Смотреть примеры",
    "projects.title": "Работы",
    "projects.statement": "Два концепта. Не заказы клиентов.",
    "projects.intro": "NordWerk и AutoKraft — вымышленные компании. Сайты готовы и открываются в браузере. Они показывают структуру, оформление и одну рабочую функцию. Имена, адреса и отзывы там придуманы.",
    "projects.flag": "Концепт · вымышленная компания · не заказ клиента",
    "projects.demoLang": "Сама демонстрация на немецком языке.",
    "projects.nordwerk.trade": "Внутренняя отделка",
    "projects.nordwerk.summary": "Спокойная страница: услуги, компания, ход работы и заявка.",
    "projects.nordwerk.p1": "Тон подходит ремесленной фирме.",
    "projects.nordwerk.p2": "Услуги читаются без каталога.",
    "projects.nordwerk.p3": "Заявка на виду, её не нужно искать в меню.",
    "projects.nordwerk.iframe": "Предпросмотр концепта NordWerk",
    "projects.nordwerk.liveAria": "Открыть сайт NordWerk в новой вкладке",
    "projects.autokraft.trade": "Автомастерская",
    "projects.autokraft.summary": "Страница мастерской: статус работы, список услуг и необязательная оценка цены.",
    "projects.autokraft.p1": "Много услуг остаётся обзорным на одной странице.",
    "projects.autokraft.p2": "Порядок цен виден до звонка.",
    "projects.autokraft.p3": "Телефон и заявка всегда под рукой.",
    "projects.autokraft.iframe": "Предпросмотр концепта AutoKraft",
    "projects.autokraft.liveAria": "Открыть сайт AutoKraft в новой вкладке",
    "projects.live": "Открыть сайт",
    "projects.closing": "Такая страница для вашей компании.",
    "services.title": "Услуги",
    "services.intro": "Что реально сделать сейчас.",
    "services.i1": "Сайт на одну или несколько коротких страниц.",
    "services.i2": "Услуги, ход работы и контакт — так, чтобы было понятно, что делать дальше.",
    "services.i3": "Вёрстка для телефона.",
    "services.i4": "Звонок, почта и форма.",
    "services.i5": "Небольшая функция на странице, если она нужна компании, — например, необязательная оценка цены.",
    "services.i6": "Публикация по адресу, которым можно поделиться.",
    "services.i7": "Правки текста по договорённости.",
    "services.boundaryTitle": "Сейчас не предлагаю",
    "services.boundary": "Интернет-магазин, запись с оплатой, реклама в Google и постоянное ведение поискового продвижения.",
    "process.title": "Этапы",
    "process.s1t": "Исходные данные",
    "process.s1d": "Напишите, чем занимается компания и что должен уметь сайт. Часто хватает уже готовых текстов и фотографий.",
    "process.s2t": "Объём и цена",
    "process.s2d": "Я скажу, что реально сделать, и назову объём и цену до начала работы.",
    "process.s3t": "Первая версия",
    "process.s3d": "Вы смотрите первую версию. Мы правим её, затем сайт публикуется.",
    "about.title": "Обо мне",
    "about.p1": "Меня зовут Denys. Я делаю сайты для небольших компаний. В макете и в коде пользуюсь современными инструментами, в том числе ИИ. Структуру, формулировки и то, что попадает на сайт, решаю сам.",
    "about.p2": "Работаю с вами напрямую, без менеджера между нами.",
    "about.p3": "Примеры выше — учебные концепты, а не заказы клиентов.",
    "contact.title": "Контакт",
    "contact.heading": "Запросить проект",
    "contact.text": "Напишите, какая это компания и что должен делать сайт. Можно сразу сказать, какие тексты и фото уже есть. Обычно отвечаю в течение одного рабочего дня.",
    "contact.emailPending": "Прямой адрес почты будет добавлен сюда.",
    "form.name": "Имя",
    "form.business": "Компания",
    "form.email": "Эл. почта",
    "form.phone": "Телефон",
    "form.optional": "необязательно",
    "form.message": "Сообщение",
    "form.privacyBefore": "Данные формы отправляются через Formspree. Я прочитал ",
    "form.privacyLink": "примечание о защите данных",
    "form.privacyAfter": ".",
    "form.privacyAria": "Данные формы отправляются через Formspree. Я прочитал примечание о защите данных.",
    "form.phName": "Ваше имя",
    "form.phBusiness": "например, мастерская или магазин",
    "form.phEmail": "name@domain.com",
    "form.phPhone": "Для обратного звонка",
    "form.phMessage": "Что должен делать сайт",
    "form.submit": "Отправить заявку",
    "form.required": "Заполните это поле.",
    "form.badEmail": "Укажите корректный адрес почты.",
    "form.needPrivacy": "Подтвердите, что вы прочитали примечание о защите данных.",
    "form.sending": "Отправка …",
    "form.demo": "Предпросмотр: сообщение не отправлено. Форма пока не подключена к почте.",
    "form.error": "Заявку не удалось отправить. Попробуйте ещё раз позже.",
    "form.rateLimit": "Слишком много запросов. Попробуйте ещё раз через несколько минут.",
    "form.success": "Сообщение отправлено. Обычно отвечаю в течение одного рабочего дня.",
    "footer.privacy": "Конфиденциальность",
    "impressum.note": "Юридические сведения ниже приведены на немецком языке.",
    "privacy.text": "Выбранный язык хранится локально в этом браузере (localStorage). Данные из формы отправляются через Formspree, чтобы обработать заявку."
  }
};

let currentLang = "de";
let sending = false;

function resolveInitialLang() {
  const params = new URLSearchParams(window.location.search);
  const query = (params.get("lang") || "").toLowerCase();
  let stored = "";
  try {
    stored = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
  } catch (error) {
    stored = "";
  }
  if (LANGS.indexOf(query) !== -1) return query;
  if (LANGS.indexOf(stored) !== -1) return stored;
  return "de";
}

function textOf(lang, key) {
  const dict = translations[lang];
  if (!dict || typeof dict[key] !== "string") return null;
  return dict[key];
}

function setLanguage(lang, updateUrl) {
  if (LANGS.indexOf(lang) === -1) return;
  currentLang = lang;
  const root = document.documentElement;
  root.lang = lang;
  root.dataset.lang = lang;
  document.title = textOf(lang, "meta.title");

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", textOf(lang, "meta.description"));

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const value = textOf(lang, el.getAttribute("data-i18n"));
    if (value === null) return;
    el.textContent = value;
    if (el.hasAttribute("data-i18n-hide-empty")) el.hidden = value.length === 0;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const value = textOf(lang, el.getAttribute("data-i18n-placeholder"));
    if (value === null) return;
    el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
    const value = textOf(lang, el.getAttribute("data-i18n-aria-label"));
    if (value === null) return;
    el.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
    const value = textOf(lang, el.getAttribute("data-i18n-title"));
    if (value === null) return;
    el.setAttribute("title", value);
  });

  document.querySelectorAll("[data-error-key]").forEach(function (el) {
    const value = textOf(lang, el.dataset.errorKey);
    if (value !== null) el.textContent = value;
  });

  const status = document.getElementById("form-status");
  if (status && status.dataset.statusKey) {
    const value = textOf(lang, status.dataset.statusKey);
    if (value !== null) status.textContent = value;
  }

  document.querySelectorAll("[data-lang-option]").forEach(function (button) {
    const active = button.dataset.langOption === lang;
    button.setAttribute("aria-checked", active ? "true" : "false");
    button.tabIndex = active ? 0 : -1;
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    /* Storage can be blocked. The page still switches. */
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }

  root.removeAttribute("data-pending");
}

function bindLanguageSwitcher() {
  const group = document.querySelector(".lang");
  if (!group) return;

  group.addEventListener("click", function (event) {
    const button = event.target.closest("[data-lang-option]");
    if (!button) return;
    setLanguage(button.dataset.langOption, true);
  });

  group.addEventListener("keydown", function (event) {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (keys.indexOf(event.key) === -1) return;
    const buttons = Array.prototype.slice.call(group.querySelectorAll("[data-lang-option]"));
    const current = buttons.findIndex(function (button) {
      return button.getAttribute("aria-checked") === "true";
    });
    let next = current;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (current + 1) % buttons.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (current - 1 + buttons.length) % buttons.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = buttons.length - 1;
    event.preventDefault();
    buttons[next].focus();
    setLanguage(buttons[next].dataset.langOption, true);
  });
}

function setupEmailLink() {
  const email = (contactConfig.email || "").trim();
  const pending = document.querySelector("[data-email-pending]");
  const ready = document.querySelector("[data-email-ready]");
  const link = document.getElementById("email-link");
  if (!email || !pending || !ready || !link) return;
  pending.hidden = true;
  ready.hidden = false;
  link.textContent = email;
  link.href = "mailto:" + email;
}

function setFieldError(input, key) {
  const error = document.querySelector('[data-error-for="' + input.name + '"]');
  if (!error) return;
  if (!key) {
    delete error.dataset.errorKey;
    error.textContent = "";
    error.hidden = true;
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
    return;
  }
  error.dataset.errorKey = key;
  error.hidden = false;
  error.textContent = textOf(currentLang, key) || "";
  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", error.id);
}

function setStatus(key) {
  const status = document.getElementById("form-status");
  if (!status) return;
  if (!key) {
    delete status.dataset.statusKey;
    status.textContent = "";
    status.hidden = true;
    return;
  }
  status.dataset.statusKey = key;
  status.hidden = false;
  status.textContent = textOf(currentLang, key) || "";
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateForm(form) {
  const name = form.elements.name;
  const company = form.elements.company;
  const email = form.elements.email;
  const message = form.elements.message;
  const privacy = form.elements.privacy;
  let firstInvalid = null;

  function check(input, key) {
    setFieldError(input, key);
    if (key && !firstInvalid) firstInvalid = input;
  }

  check(name, name.value.trim() ? "" : "form.required");
  check(company, company.value.trim() ? "" : "form.required");
  if (!email.value.trim()) check(email, "form.required");
  else if (!isEmail(email.value.trim())) check(email, "form.badEmail");
  else check(email, "");
  check(message, message.value.trim() ? "" : "form.required");
  check(privacy, privacy.checked ? "" : "form.needPrivacy");

  return firstInvalid;
}

async function sendInquiry(form) {
  const response = await fetch(contactConfig.endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: new FormData(form)
  });

  if (response.status === 429) {
    const error = new Error("rate-limited");
    error.status = 429;
    throw error;
  }

  if (!response.ok) {
    const error = new Error("request-failed");
    error.status = response.status;
    throw error;
  }

  return { ok: true };
}

function bindForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  function onEdit(event) {
    const input = event.target;
    if (!input.name || sending) return;
    if (input.getAttribute("aria-invalid") === "true") setFieldError(input, "");
    const status = document.getElementById("form-status");
    if (status && !status.hidden) setStatus("");
  }

  form.addEventListener("input", onEdit);
  form.addEventListener("change", onEdit);

  const submitButton = form.querySelector("[type='submit']");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (sending) return;
    const invalid = validateForm(form);
    if (invalid) {
      setStatus("");
      invalid.focus();
      return;
    }

    sending = true;
    submitButton.disabled = true;
    form.setAttribute("aria-busy", "true");
    setStatus("form.sending");

    try {
      await sendInquiry(form);
      setStatus("form.success");
      form.reset();
      document.getElementById("form-status").focus();
    } catch (error) {
      setStatus(error && error.status === 429 ? "form.rateLimit" : "form.error");
      document.getElementById("form-status").focus();
    } finally {
      sending = false;
      submitButton.disabled = false;
      form.removeAttribute("aria-busy");
    }
  });
}

function fitPreviews() {
  document.querySelectorAll(".preview-stage").forEach(function (stage) {
    const frame = stage.querySelector("iframe");
    if (!frame || !stage.clientWidth) return;
    const width = 1280;
    const scale = stage.clientWidth / width;
    frame.style.transform = "scale(" + scale + ")";
    frame.style.height = Math.round(stage.clientHeight / scale) + "px";
  });
}

function bindPreviews() {
  fitPreviews();
  window.addEventListener("resize", fitPreviews);
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(fitPreviews);
    document.querySelectorAll(".preview-stage").forEach(function (stage) {
      observer.observe(stage);
    });
  }
}

function bindReveal() {
  document.documentElement.setAttribute("data-motion-bound", "");
  if (!document.documentElement.classList.contains("motion")) return;

  var nodes = document.querySelectorAll(".reveal, .stagger");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.16
  });

  document.querySelectorAll(".reveal").forEach(function (el) {
    if (el.closest(".stagger")) return;
    observer.observe(el);
  });
  document.querySelectorAll(".stagger").forEach(function (el) {
    observer.observe(el);
  });
}

setLanguage(resolveInitialLang(), false);
bindLanguageSwitcher();
setupEmailLink();
bindForm();
bindPreviews();
bindReveal();
