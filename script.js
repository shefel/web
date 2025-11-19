// Плавная прокрутка по разделам для навигации и кнопок с href="#..."
document.querySelectorAll('a[href^="#"], .btn[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Модальное окно для обратной связи
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', showModal);
}

function showModal() {
  if (document.getElementById('modalOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'modalOverlay';
  overlay.style.cssText = `
    position:fixed;top:0;left:0;width:100vw;height:100vh;
    background:rgba(0,0,0,0.42);display:flex;
    align-items:center;justify-content:center;z-index:99999;
  `;
  const modal = document.createElement('div');
  modal.style.cssText = `
    background:#fff;padding:30px 28px;border-radius:15px;max-width:370px;
    box-shadow:0 9px 40px rgba(23,102,209,0.16);text-align:center;
  `;
  modal.innerHTML = `
    <h3>Зворотній зв’язок</h3>
    <form>
      <input type="text" placeholder="Ім'я" required style="width:100%;margin-bottom:12px;padding:8px;border-radius:6px;border:1px solid #ccc;" />
      <input type="email" placeholder="Email" required style="width:100%;margin-bottom:12px;padding:8px;border-radius:6px;border:1px solid #ccc;" />
      <textarea placeholder="Ваше питання" rows="3" required style="width:100%;margin-bottom:10px;padding:8px;border-radius:6px;border:1px solid #ccc;"></textarea>
      <button type="submit" style="background:var(--accent,#22b573);color:#fff;border:none;border-radius:7px;padding:10px 20px;cursor:pointer;">Відправити</button>
    </form>
    <button id="closeModal" style="margin-top:12px;background:#eef;border:none;padding:5px 16px;border-radius:7px;cursor:pointer;">Закрити</button>
  `;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  modal.querySelector('#closeModal').onclick = () => overlay.remove();
  overlay.onclick = event => { if(event.target === overlay) overlay.remove(); };
  modal.querySelector('form').onsubmit = e => {
    e.preventDefault();
    modal.innerHTML = `
      <h3>Дякуємо, звернення надіслано!</h3>
      <p>Наш менеджер зв’яжеться з вами найближчим часом.</p>
      <button id="closeModal" style="margin-top:12px;background:#eef;border:none;padding:5px 16px;border-radius:7px;cursor:pointer;">Закрити</button>
    `;
    modal.querySelector('#closeModal').onclick = () => overlay.remove();
  }
}

// Клик по кнопкам для аналитики/доп. действия (можно интегрировать Яндекс/GA)
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    console.log(`Кнопка "${this.textContent.trim()}" натиснута`);
    // Например, здесь можно отправлять событие трекеру
  });
});

// Флэш-анимация для CTA
document.querySelectorAll('.cta-btn').forEach(cta => {
  cta.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 0 30px 8px #ffa72677';
  });
  cta.addEventListener('mouseleave', function() {
    this.style.boxShadow = '';
  });
});
