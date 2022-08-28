import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

renderGallery(galleryItems);

gallery.addEventListener('click', onModalOpen);

function renderGallery(items) {
    const markup = items.map(({preview, original, description}) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
         </div>`
    ).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}

function onModalOpen(event) {
    event.preventDefault();
    
    const imageEl = event.target.classList.contains('gallery__image');
    const bigImageURL = event.target.dataset.source;

    if (!imageEl) {
        return;
    };

    const instance = basicLightbox.create(`
    <img src="${bigImageURL}">
    `);

    instance.show();
}
