import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Створення розмітки карток галереї
const galleryCards = galleryItems
  .map(({ preview, original, description }) => {
    return ` <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
    </div>`;
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
    createModalImageViewer(event.target.dataset.source);
  }
}

// 4. Створення розмітки та відкриття модального вікна перегляду зображення
let modalImageViewer;

function createModalImageViewer(url) {
  modalImageViewer = basicLightbox.create(`<img src="${url}" width="800" height="600">`, {
    onShow: addWindowEventListener,
    onClose: removeWindowEventListener,
  });
  modalImageViewer.show();
}

// 5. Реалізація закриття модального вікна з клавіатури
function addWindowEventListener() {
  window.addEventListener('keydown', onEscapeKeyPress);
  return true;
}

function onEscapeKeyPress(event) {
  if (event.code === 'Escape') {
    modalImageViewer.close();
    return true;
  }
}

function removeWindowEventListener() {
  window.removeEventListener('keydown', onEscapeKeyPress);
}

console.log(galleryCards);

