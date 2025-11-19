// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Анимация кнопок
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.97)';
  });
  
  btn.addEventListener('mouseup', function() {
    setTimeout(() => {
      this.style.transform = '';
    }, 100);
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});

// Модальное окно для заказа
document.querySelectorAll('.btn-product').forEach(btn => {
  btn.addEventListener('click', function() {
    const productCard = this.closest('.product-card');
    const productTitle = productCard.querySelector('.product-title').textContent;
    const productPrice = productCard.querySelector('.product-price').textContent;
    showOrderModal(productTitle, productPrice);
  });
});

// Кнопки связи
document.getElementById('contactBtn')?.addEventListener('click', () => {
  showOrderModal('Загальний запит', '');
});

document.getElementById('contactHeroBtn')?.addEventListener('click', () => {
  showOrderModal('Загальний запит', '');
});

// Функция модального окна
function showOrderModal(productName, price) {
  if (document.getElementById('orderModal')) return;
  
  const modal = document.createElement('div');
  modal.id = 'orderModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(44, 24, 16, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
    backdrop-filter: blur(4px);
  `;
  
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: white;
    padding: 3rem 2.5rem;
    border-radius: 20px;
    max-width: 540px;
    width: 90%;
    box-shadow: 0 24px 80px rgba(0,0,0,0.3);
    animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  
  modalContent.innerHTML = `
    <h2 style="color: var(--color-primary); margin-bottom: 0.5rem; font-size: 2rem;">${productName}</h2>
    ${price ? `<p style="color: var(--color-text-light); margin-bottom: 2rem; font-size: 1.25rem; font-weight: 600;">${price}</p>` : '<p style="margin-bottom: 2rem; color: var(--color-text-light);">Заповніть форму і ми зв\'яжемось з вами</p>'}
    <form id="orderForm">
      <input type="text" placeholder="Ваше ім'я *" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 2px solid #e8c8a0; border-radius: 12px; font-size: 1rem; font-family: inherit;">
      <input type="tel" placeholder="Телефон *" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 2px solid #e8c8a0; border-radius: 12px; font-size: 1rem; font-family: inherit;">
      <input type="email" placeholder="Email *" required style="width: 100%; padding: 1rem; margin-bottom: 1rem; border: 2px solid #e8c8a0; border-radius: 12px; font-size: 1rem; font-family: inherit;">
      <textarea placeholder="Коментар до замовлення" rows="3" style="width: 100%; padding: 1rem; margin-bottom: 1.5rem; border: 2px solid #e8c8a0; border-radius: 12px; font-size: 1rem; font-family: inherit; resize: vertical;"></textarea>
      <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1.125rem; font-size: 1.05rem; margin-bottom: 0.75rem;">Відправити замовлення</button>
      <button type="button" id="closeModal" class="btn" style="width: 100%; padding: 1rem; background: #f5f1ed; color: var(--color-text);">Закрити</button>
    </form>
  `;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // Закрытие
  document.getElementById('closeModal').onclick = () => {
    modal.remove();
    document.body.style.overflow = '';
  };
  
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  };
  
  // Обработка формы
  document.getElementById('orderForm').onsubmit = (e) => {
    e.preventDefault();
    modalContent.innerHTML = `
      <div style="text-align: center; padding: 2rem 0;">
        <div style="font-size: 5rem; margin-bottom: 1.5rem; animation: scaleIn 0.5s;">✓</div>
        <h2 style="color: var(--color-primary); margin-bottom: 1rem; font-size: 2rem;">Дякуємо за замовлення!</h2>
        <p style="margin-bottom: 2.5rem; color: var(--color-text-light); font-size: 1.05rem; line-height: 1.6;">Ваше замовлення прийнято.<br>Наш менеджер зв'яжеться з вами найближчим часом для підтвердження деталей.</p>
        <button type="button" id="closeModal2" class="btn btn-primary" style="padding: 1.125rem 3rem; font-size: 1.05rem;">Чудово!</button>
      </div>
    `;
    document.getElementById('closeModal2').onclick = () => {
      modal.remove();
      document.body.style.overflow = '';
    };
  };
}

// CSS анимации
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { 
      transform: translateY(60px);
      opacity: 0;
    }
    to { 
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes scaleIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

console.log('✅ Сайт завантажено успішно!');
