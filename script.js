// -----------------------------
// i18n (UA / RU / EN)
// -----------------------------
const STORAGE_KEY = "site_lang";

const I18N = {
  uk: {
    lang_label: "Мова",

    nav_home: "Головна",
    nav_products: "Асортимент",
    nav_about: "Про нас",
    nav_why: "Чому ми",
    nav_contacts: "Контакти",

    btn_catalog: "Завантажити каталог",
    btn_view_products: "Переглянути асортимент",
    btn_contact: "Зв'язатися з нами",
    btn_order: "Замовити",

    hero_title: "Відкрийте смак сонця",
    hero_subtitle: "Сухофрукти та горіхи – природний смак і сонячна енергія в кожній жмені!",

    feat_1_title: "Багатий смак",
    feat_1_desc: "Перевірені постачальники",
    feat_2_title: "Гарантія якості",
    feat_2_desc: "Міжнародні сертифікати",
    feat_3_title: "Українська компанія",
    feat_3_desc: "Прозорість процесів",
    feat_4_title: "Товар у наявності",
    feat_4_desc: "Швидка доставка",

    products_title: "Наш асортимент",
    products_subtitle: "Обираємо тільки найкращих виробників, які постачають сировину найвищої якості",

    badge_hot: "ХІТ ПРОДАЖУ",
    badge_new: "НОВИНКА",

    p_pack_250_500_1: "Фасування: 250г / 500г / 1кг",
    p_pack_200_500_1: "Фасування: 200г / 500г / 1кг",

    p_prune_title: "Чорнослив без кісточки",
    p_prune_desc: "М'який, соковитий чорнослив преміум-класу. Великі плоди з насиченим смаком.",
    p_prune_price: "від ₴110/кг",

    p_apricot_title: "Курага (абрикос сушений)",
    p_apricot_desc: "Золотиста солодка курага. Без консервантів та барвників, природна сушка.",
    p_apricot_price: "від ₴120/кг",

    p_raisin_title: "Ізюм золотий та темний",
    p_raisin_desc: "Натуральний ізюм двох видів: золотистий та темний. Ідеальний для випічки та перекусів.",
    p_raisin_price: "від ₴85/кг",

    p_almond_title: "Мигдаль очищений",
    p_almond_desc: "Відбірний мигдаль преміум-якості. Для снеків, десертів та здорового харчування.",
    p_almond_price: "від ₴350/кг",

    p_walnut_title: "Грецький горіх",
    p_walnut_desc: "Очищені ядра та половинки. Хрусткий смак, чудово для салатів та випічки.",
    p_walnut_price: "від ₴230/кг",

    about_title: "Сонячний смак від природи!",
    about_p1: "Ми постачаємо найвищої якості сухофрукти та горіхи. Співпрацюємо з перевіреними виробниками.",
    about_p2: "Контролюємо якість від сировини до пакування, щоб продукт відповідав найвищим стандартам.",

    why_title: "Чому обирають нас",
    why_1_title: "Українська компанія",
    why_1_desc: "Прозорі процеси, легка комунікація та довгострокове партнерство",
    why_2_title: "Товар у наявності",
    why_2_desc: "Швидка відправка та надійне пакування",
    why_3_title: "Гнучкі умови",
    why_3_desc: "Підбираємо формат співпраці під обсяг і потреби клієнта",
    why_4_title: "Сертифікація",
    why_4_desc: "Працюємо за стандартами якості та безпеки",

    contacts_title: "Зацікавлені співпрацею?",
    contacts_subtitle:
      "Ведете бізнес, магазин чи просто бажаєте придбати більшу кількість наших продуктів?<br>Зв'яжіться з нашим представником!",

    footer_text: "© 2025 SunDry. Натуральні сухофрукти та горіхи преміум-якості. Всі права захищені.",

    // Modal
    modal_order_title: "Замовлення",
    modal_general_title: "Загальний запит",
    modal_price_label: "Ціна",
    modal_name_ph: "Ваше ім'я *",
    modal_phone_ph: "Телефон *",
    modal_email_ph: "Email *",
    modal_comment_ph: "Коментар до замовлення",
    modal_submit: "Відправити",
    modal_close: "Закрити",
    modal_thanks_title: "Дякуємо!",
    modal_thanks_text: "Наш менеджер зв'яжеться з вами найближчим часом для підтвердження деталей.",
    modal_thanks_btn: "Чудово!",
  },

  ru: {
    lang_label: "Язык",

    nav_home: "Главная",
    nav_products: "Ассортимент",
    nav_about: "О нас",
    nav_why: "Почему мы",
    nav_contacts: "Контакты",

    btn_catalog: "Скачать каталог",
    btn_view_products: "Смотреть ассортимент",
    btn_contact: "Связаться с нами",
    btn_order: "Заказать",

    hero_title: "Откройте вкус солнца",
    hero_subtitle: "Сухофрукты и орехи — природный вкус и солнечная энергия в каждой горсти!",

    feat_1_title: "Насыщенный вкус",
    feat_1_desc: "Проверенные поставщики",
    feat_2_title: "Гарантия качества",
    feat_2_desc: "Международные сертификаты",
    feat_3_title: "Украинская компания",
    feat_3_desc: "Прозрачные процессы",
    feat_4_title: "Товар в наличии",
    feat_4_desc: "Быстрая доставка",

    products_title: "Наш ассортимент",
    products_subtitle: "Выбираем только лучших производителей, которые поставляют сырье высшего качества",

    badge_hot: "ХИТ ПРОДАЖ",
    badge_new: "НОВИНКА",

    p_pack_250_500_1: "Фасовка: 250г / 500г / 1кг",
    p_pack_200_500_1: "Фасовка: 200г / 500г / 1кг",

    p_prune_title: "Чернослив без косточки",
    p_prune_desc: "Мягкий сочный чернослив премиум-класса. Крупные плоды с насыщенным вкусом.",
    p_prune_price: "от ₴110/кг",

    p_apricot_title: "Курага (сушеный абрикос)",
    p_apricot_desc: "Золотистая сладкая курага. Без консервантов и красителей, натуральная сушка.",
    p_apricot_price: "от ₴120/кг",

    p_raisin_title: "Изюм золотой и темный",
    p_raisin_desc: "Натуральный изюм двух видов: золотой и темный. Отлично для выпечки и перекусов.",
    p_raisin_price: "от ₴85/кг",

    p_almond_title: "Миндаль очищенный",
    p_almond_desc: "Отборный миндаль премиум-качества. Для снеков, десертов и полезного питания.",
    p_almond_price: "от ₴350/кг",

    p_walnut_title: "Грецкий орех",
    p_walnut_desc: "Очищенные ядра и половинки. Хрустящий вкус, отлично для салатов и выпечки.",
    p_walnut_price: "от ₴230/кг",

    about_title: "Солнечный вкус от природы!",
    about_p1: "Поставляем сухофрукты и орехи высокого качества. Работаем с проверенными производителями.",
    about_p2: "Контролируем качество от сырья до упаковки, чтобы продукт соответствовал высоким стандартам.",

    why_title: "Почему выбирают нас",
    why_1_title: "Украинская компания",
    why_1_desc: "Прозрачные процессы, удобная коммуникация и долгосрочное партнерство",
    why_2_title: "Товар в наличии",
    why_2_desc: "Быстрая отправка и надежная упаковка",
    why_3_title: "Гибкие условия",
    why_3_desc: "Подбираем формат сотрудничества под объем и задачи клиента",
    why_4_title: "Сертификация",
    why_4_desc: "Работаем по стандартам качества и безопасности",

    contacts_title: "Интересует сотрудничество?",
    contacts_subtitle:
      "Есть бизнес, магазин или хотите купить больший объем продукции?<br>Свяжитесь с нашим представителем!",

    footer_text: "© 2025 SunDry. Натуральные сухофрукты и орехи премиум-качества. Все права защищены.",

    // Modal
    modal_order_title: "Заказ",
    modal_general_title: "Общий запрос",
    modal_price_label: "Цена",
    modal_name_ph: "Ваше имя *",
    modal_phone_ph: "Телефон *",
    modal_email_ph: "Email *",
    modal_comment_ph: "Комментарий к заказу",
    modal_submit: "Отправить",
    modal_close: "Закрыть",
    modal_thanks_title: "Спасибо!",
    modal_thanks_text: "Менеджер свяжется с вами в ближайшее время для подтверждения деталей.",
    modal_thanks_btn: "Отлично!",
  },

  en: {
    lang_label: "Language",

    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About",
    nav_why: "Why us",
    nav_contacts: "Contacts",

    btn_catalog: "Download catalog",
    btn_view_products: "View products",
    btn_contact: "Contact us",
    btn_order: "Order",

    hero_title: "Discover the taste of the sun",
    hero_subtitle: "Dried fruits and nuts — natural taste and sunny energy in every handful!",

    feat_1_title: "Rich taste",
    feat_1_desc: "Trusted suppliers",
    feat_2_title: "Quality guarantee",
    feat_2_desc: "International certificates",
    feat_3_title: "Ukrainian company",
    feat_3_desc: "Transparent processes",
    feat_4_title: "In stock",
    feat_4_desc: "Fast delivery",

    products_title: "Our products",
    products_subtitle: "We choose only the best producers who deliver top-quality raw materials",

    badge_hot: "BESTSELLER",
    badge_new: "NEW",

    p_pack_250_500_1: "Pack sizes: 250g / 500g / 1kg",
    p_pack_200_500_1: "Pack sizes: 200g / 500g / 1kg",

    p_prune_title: "Pitted prunes",
    p_prune_desc: "Soft premium prunes with a rich taste. Large fruits, perfect for desserts and snacks.",
    p_prune_price: "from ₴110/kg",

    p_apricot_title: "Dried apricots",
    p_apricot_desc: "Golden sweet dried apricots. No preservatives or dyes, naturally dried.",
    p_apricot_price: "from ₴120/kg",

    p_raisin_title: "Golden & dark raisins",
    p_raisin_desc: "Natural raisins (golden and dark). Perfect for baking, muesli, and snacks.",
    p_raisin_price: "from ₴85/kg",

    p_almond_title: "Blanched almonds",
    p_almond_desc: "Premium almonds for snacks, desserts, and healthy nutrition.",
    p_almond_price: "from ₴350/kg",

    p_walnut_title: "Walnuts",
    p_walnut_desc: "Shelled walnut kernels and halves. Crunchy taste, great for salads and baking.",
    p_walnut_price: "from ₴230/kg",

    about_title: "Sunny taste from nature!",
    about_p1: "We supply high-quality dried fruits and nuts and work with trusted producers.",
    about_p2: "We control quality from raw materials to packaging to meet high standards.",

    why_title: "Why choose us",
    why_1_title: "Ukrainian company",
    why_1_desc: "Transparent processes, easy communication, long-term partnership",
    why_2_title: "In stock",
    why_2_desc: "Fast dispatch and reliable packaging",
    why_3_title: "Flexible terms",
    why_3_desc: "We adapt cooperation format to your volume and needs",
    why_4_title: "Certification",
    why_4_desc: "We follow quality and safety standards",

    contacts_title: "Interested in cooperation?",
    contacts_subtitle:
      "Have a business/store or want to buy larger quantities?<br>Contact our representative!",

    footer_text: "© 2025 SunDry. Premium dried fruits and nuts. All rights reserved.",

    // Modal
    modal_order_title: "Order",
    modal_general_title: "General inquiry",
    modal_price_label: "Price",
    modal_name_ph: "Your name *",
    modal_phone_ph: "Phone *",
    modal_email_ph: "Email *",
    modal_comment_ph: "Order comment",
    modal_submit: "Send",
    modal_close: "Close",
    modal_thanks_title: "Thank you!",
    modal_thanks_text: "Our manager will contact you shortly to confirm the details.",
    modal_thanks_btn: "Great!",
  },
};

let currentLang = "uk";

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.uk && I18N.uk[key]) || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    const value = t(key);

    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });
}

function setLanguage(lang) {
  if (!I18N[lang]) lang = "uk";
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations();
}

// -----------------------------
// Smooth scroll
// -----------------------------
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    });
  });
}

// -----------------------------
// Button press animation
// -----------------------------
function setupButtonPress() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.97)";
    });
    btn.addEventListener("mouseup", function () {
      setTimeout(() => (this.style.transform = ""), 80);
    });
    btn.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });
}

// -----------------------------
// Modal (order/contact)
// -----------------------------
function showOrderModal({ title, priceText = "" }) {
  if (document.getElementById("orderModal")) return;

  const modal = document.createElement("div");
  modal.id = "orderModal";
  modal.style.cssText = `
    position: fixed; inset: 0;
    background: rgba(44, 24, 16, 0.75);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
    backdrop-filter: blur(4px);
  `;

  const modalContent = document.createElement("div");
  modalContent.style.cssText = `
    background: white;
    padding: 2.25rem 2rem;
    border-radius: 20px;
    max-width: 560px;
    width: 92%;
    box-shadow: 0 24px 80px rgba(0,0,0,0.3);
    animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  `;

  const priceBlock = priceText
    ? `<p style="color:#6d4c41;margin:0 0 1.5rem;font-size:1.05rem;font-weight:600;">
         ${t("modal_price_label")}: ${priceText}
       </p>`
    : `<p style="margin:0 0 1.5rem;color:#6d4c41;">${t("modal_general_title")}</p>`;

  modalContent.innerHTML = `
    <h2 style="color:#d4a574;margin:0 0 .5rem;font-size:1.8rem;">${title}</h2>
    ${priceBlock}

    <form id="orderForm">
      <input data-i18n-placeholder="modal_name_ph" placeholder="${t("modal_name_ph")}" required
        style="width:100%;padding:1rem;margin-bottom:1rem;border:2px solid #e8c8a0;border-radius:12px;font-size:1rem;font-family:inherit;">
      <input data-i18n-placeholder="modal_phone_ph" placeholder="${t("modal_phone_ph")}" required
        style="width:100%;padding:1rem;margin-bottom:1rem;border:2px solid #e8c8a0;border-radius:12px;font-size:1rem;font-family:inherit;">
      <input type="email" data-i18n-placeholder="modal_email_ph" placeholder="${t("modal_email_ph")}" required
        style="width:100%;padding:1rem;margin-bottom:1rem;border:2px solid #e8c8a0;border-radius:12px;font-size:1rem;font-family:inherit;">
      <textarea rows="3" data-i18n-placeholder="modal_comment_ph" placeholder="${t("modal_comment_ph")}"
        style="width:100%;padding:1rem;margin-bottom:1.25rem;border:2px solid #e8c8a0;border-radius:12px;font-size:1rem;font-family:inherit;resize:vertical;"></textarea>

      <button type="submit" class="btn btn-primary"
        style="width:100%;padding:1.05rem;font-size:1rem;margin-bottom:.75rem;">
        ${t("modal_submit")}
      </button>

      <button type="button" id="closeModal" class="btn"
        style="width:100%;padding:1rem;background:#f5f1ed;color:#3e2723;">
        ${t("modal_close")}
      </button>
    </form>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";

  const close = () => {
    modal.remove();
    document.body.style.overflow = "";
  };

  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  modalContent.querySelector("#closeModal").addEventListener("click", close);

  modalContent.querySelector("#orderForm").addEventListener("submit", (e) => {
    e.preventDefault();

    modalContent.innerHTML = `
      <div style="text-align:center;padding:1.5rem 0;">
        <div style="font-size:4.25rem;margin-bottom:1rem;animation:scaleIn .5s;">✓</div>
        <h2 style="color:#d4a574;margin-bottom:.75rem;font-size:1.8rem;">${t("modal_thanks_title")}</h2>
        <p style="margin-bottom:1.75rem;color:#6d4c41;font-size:1rem;line-height:1.65;">
          ${t("modal_thanks_text")}
        </p>
        <button type="button" id="closeModal2" class="btn btn-primary"
          style="padding:1rem 2.5rem;font-size:1rem;">
          ${t("modal_thanks_btn")}
        </button>
      </div>
    `;

    modalContent.querySelector("#closeModal2").addEventListener("click", close);
  });
}

// -----------------------------
// Setup
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  // language init
  const switcher = document.querySelector("[data-i18n-switcher]");
  const saved = localStorage.getItem(STORAGE_KEY);
  setLanguage(saved || "uk");

  if (switcher) {
    switcher.value = currentLang;
    switcher.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  setupSmoothScroll();
  setupButtonPress();

  // Order buttons (cards)
  document.querySelectorAll(".btn-product").forEach((btn) => {
    btn.addEventListener("click", function () {
      const card = this.closest(".product-card");
      const titleEl = card?.querySelector(".product-title");
      const priceEl = card?.querySelector(".product-price");
      const productTitle = titleEl ? titleEl.textContent.trim() : t("modal_order_title");
      const productPrice = priceEl ? priceEl.textContent.trim() : "";
      showOrderModal({ title: `${t("modal_order_title")}: ${productTitle}`, priceText: productPrice });
    });
  });

  // Contact buttons
  document.getElementById("contactBtn")?.addEventListener("click", () => {
    showOrderModal({ title: t("btn_contact") });
  });
  document.getElementById("contactHeroBtn")?.addEventListener("click", () => {
    showOrderModal({ title: t("btn_contact") });
  });

  // Catalog buttons
  const catalogHandler = () => showOrderModal({ title: t("btn_catalog") });
  document.getElementById("catalogBtn")?.addEventListener("click", catalogHandler);
  document.getElementById("catalogBtn2")?.addEventListener("click", catalogHandler);
});

// Inject keyframes
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn { from {opacity: 0} to {opacity: 1} }
  @keyframes slideUp { from {transform: translateY(60px);opacity: 0} to {transform: translateY(0);opacity: 1} }
  @keyframes scaleIn { from {transform: scale(0)} to {transform: scale(1)} }
`;
document.head.appendChild(style);
