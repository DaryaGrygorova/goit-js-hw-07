import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Створення розмітки карток галереї
const galleryCards = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
  })
  .join(' ');

// 2. Додавання розмітки в DOM, підключення слухача подій
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', galleryCards);
galleryEl.addEventListener('click', onCardClick);

// 3. Функція обробки кліку на картку галереї
function onCardClick(event) {
  event.preventDefault();

  if (event.target.nodeName === `IMG`) {
    createModalGallery();
  }
}

// 4. Створення розмітки та відкриття модального вікна перегляду зображення
function createModalGallery() {
  const modalGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  modalGallery.open();
}

console.log(galleryCards);
