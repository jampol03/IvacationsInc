const changeColorButton = document.getElementById('changeColorButton');
if (changeColorButton) {
  changeColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    if (target) {
      window.location.href = target;
    }
  });
});

function highlightActiveMenu() {
  const currentPath = window.location.pathname;
  menuItems.forEach((item) => {
    if (item.getAttribute('href') === currentPath) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}
highlightActiveMenu();

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  if (slides.length > 0) {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = 'block';
  }
}

function initSlideshow() {
  if (slides.length > 0) {
    slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'block' : 'none';
    });
    setInterval(showNextSlide, 3000);
  }
}
initSlideshow();