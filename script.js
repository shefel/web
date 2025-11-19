// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Анимация кнопок при клике
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
  });
  
  btn.addEventListener('mouseup', function() {
    this.style.transform = '';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});

// Модальное окно для заказа
document.querySelectorAll('.btn-order').forEach(btn => {
  btn.addEventListener('click', function() {
    const productCard = this.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    showOrderModal(productName);
  });
});

// Кнопка "Написати нам"
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => showOrderModal('Загальний запит'));
}

function showOrderModal(productName) {}
  if (document.getElementById('orderModal')) return;
  
  const modal = document.createElement('div');
  modal.id = 'orderModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s;
  `;
  
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    animation: slideUp 0.3s;
  `;
  
  modalContent.innerHTML = `
    <h2 style="color: var(--color-primary); margin-bottom: 1rem;">Замовлення: ${productName}</h2>
    <form id="orderForm">
      <input type="text" placeholder="Ваше ім'я" required style="width: 100%; padding: 0.875rem; margin-bottom: 1rem; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem;">
      <input type="tel" placeholder="Телефон" required style="width: 100%; padding: 0.875rem; margin-bottom: 1rem; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem;">
      <input type="email" placeholder="Email" required style="width: 100%; padding: 0.875rem; margin-bottom: 1rem; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem;">
      <textarea placeholder="Коментар до замовлення" rows="3" style="width: 100%; padding: 0.875rem; margin-bottom: 1rem; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1rem; font-family: inherit;"></textarea>
      <button type="submit" class="btn btn-primary" style="width: 100%; background: var(--color-primary); color: white; margin-bottom: 0.5rem;">Відправити замовлення</button>
      <button type="button" id="closeModal" class="btn" style="width: 100%; background: #f5f5f5; color: var(--color-text);">Закрити</button>
    </form>
  `;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Закрытие модального окна
  document.getElementById('closeModal').onclick = () => modal.remove();
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
