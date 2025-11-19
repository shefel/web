// Плавный скролл по якорям для всех кнопок и ссылок с href="#...":
document.querySelectorAll('a[href^="#"], .btn[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Анимация клика для всех кнопок
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousedown', function() {
    this.style.transform = "scale(0.96)";
    this.style.boxShadow = "0 2px 12px rgba(247,151,72,0.17)";
  });
  btn.addEventListener('mouseup', function() {
    this.style.transform = "";
    this.style.boxShadow = "";
  });
  btn.addEventListener('mouseleave', function() {
    this.style.transform = "";
    this.style.boxShadow = "";
  });
});

// Модальное окно для любых кнопок "заказа" или "обратной связи"
const triggerBtnTexts = [
  "Замовити", "Купити", "В корзину", "Написати нам", "Оформити заявку", "Консультація митного експерта"
];
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Определяем триггер-текст (можно добавить новые варианты)
    if (triggerBtnTexts.some(txt => btn.textContent.trim().includes(txt))) {
      showModal(btn.textContent.trim());
    }
    // Для аналитики или отладки
    console.log(`Кнопка "${btn.textContent.trim()}" нажата`);
  });
});

// Модалка "заявка/обратная связь"
function showModal(triggerText = "Зворотній зв’язок") {
  if (document.getElementById('modalOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'modalOverlay';
  overlay.style.cssText = `
    position:fixed;top:0;left:0;width:100vw;height:100vh;
    background:rgba(248,193,125,0.30);display:flex;
    align-items:center;justify-content:center;z-index:99999;
  `;
  const modal = document.createElement('div');
  modal.style.cssText = `
    background:#fff;padding:27px 28px;border-radius:16px;max-width:340px;
    box-shadow:0 9px 36px rgba(155,100,50,0.19);text-align:center;
  `;
  modal.innerHTML = `
    <h3>${triggerText}</h3>
    <form>
      <input type="text" placeholder="Ваше ім'я" required style="width:100%;margin-bottom:12px;padding:8px;border-radius:6px;border:1px solid #eee;" />
      <input type="email" placeholder="Email" required style="width:100%;margin-bottom:12px;padding:8px;border-radius:6px;border:1px solid #eee;" />
      <textarea placeholder="Ваше питання/замовлення" rows="3" required style="width:100%;margin-bottom:10px;padding:8px;border-radius:6px;border:1px solid #eee;"></textarea>
      <button type="submit" style="background:var(--accent-orange,#f79748);color:#fff;border:none;border-radius:8px;padding:10px 22px;cursor:pointer;">Надіслати</button>
    </form>
    <button id="closeModal" style="margin-top:12px;background:#eef;border:none;padding:5px 16px;border-radius:8px;cursor:pointer;">Закрити</button>
  `;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  modal.querySelector('#closeModal').onclick = () => overlay.remove();
  overlay.onclick = event => { if(event.target === overlay) overlay.remove(); };
  modal.querySelector('form').onsubmit = e => {
    e.preventDefault();
    modal.innerHTML = `
      <h3>Дякуємо, ваше звернення/замовлення прийнято!</h3>
      <p>Наш менеджер зв’яжеться з вами найближчим часом.</p>
      <button id="closeModal" style="margin-top:12px;background:#eef;border:none;padding:5px 16px;border-radius:8px;cursor:pointer;">Закрити</button>
    `;
    modal.querySelector('#closeModal').onclick = () => overlay.remove();
  }
}
