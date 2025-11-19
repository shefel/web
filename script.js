// Плавное прокручивание к секциям меню
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Модальное окно с контактной формой
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', function () {
    showModal();
  });
}

// Функция для создания и показа модального окна
function showModal() {
  // уже есть модальное окно? Тогда не создаём повторно
  if(document.getElementById('modalOverlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'modalOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.45)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 1000;

  const modal = document.createElement('div');
  modal.style.background = '#fff';
  modal.style.padding = '28px 32px';
  modal.style.borderRadius = '14px';
  modal.style.boxShadow = '0 6px 30px rgba(23,102,209,0.18)';
  modal.style.maxWidth = '370px';
  modal.inner
  }