// Данные слайдов
const slides = [
  {
    title: 'Rostov-on-Don, Admiral',
    city: 'Rostov-on-Don, LCD admiral',
    area: '81 m²',
    time: '3.5 months',
    cost: 'Upon request',
    img: 'images/MaskGroup.png'
  },
  {
    title: 'Sochi Thieves',
    city: 'Sochi Thieves',
    area: '105 m²',
    time: '4 months',
    cost: 'Upon request',
    img: 'images/MaskGroup1.png'
  },
  {
    title: 'Rostov-on-Don Patriotic',
    city: 'Rostov-on-Don, Patriotic',
    area: '93 m²',
    time: '3 months',
    cost: 'Upon request',
    img: 'images/MaskGroup2.png'
  }
];

let current = 0;

// Селекторы
const nav = document.querySelector('.slider-nav');
const cityEl = document.querySelector('.city');
const areaEl = document.querySelector('.area');
const timeEl = document.querySelector('.time');
const costEl = document.querySelector('.cost');
const imageEl = document.querySelector('.image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

// Инициализация навигации
function initNav() {
  slides.forEach((slide, i) => {
    const a = document.createElement('a');
    a.textContent = slide.title;
    a.href = '#';
    a.dataset.index = i;
    a.addEventListener('click', e => {
      e.preventDefault();
      goTo(+e.currentTarget.dataset.index);
    });
    nav.appendChild(a);
  });
}

// Инициализация точек
function initDots() {
  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.dataset.index = i;
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
}

// Обновить состояние слайдера
function update() {
  const s = slides[current];
  // Текстовые поля
  cityEl.textContent = s.city;
  areaEl.textContent = s.area;
  timeEl.textContent = s.time;
  costEl.textContent = s.cost;
  // Картинка
  imageEl.style.backgroundImage = `url(${s.img})`;
  // Активная ссылка
  document.querySelectorAll('.slider-nav a').forEach(a => {
    a.classList.toggle('active', +a.dataset.index === current);
  });
  // Активная точка
  document.querySelectorAll('.dot').forEach(d => {
    d.classList.toggle('active', +d.dataset.index === current);
  });
}

// Перейти к слайду, ведя index по кругу
function goTo(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  current = index;
  update();
}

// Навешиваем стрелки
prev.addEventListener('click', () => goTo(current - 1));
next.addEventListener('click', () => goTo(current + 1));

// Запуск
initNav();
initDots();
goTo(0);
