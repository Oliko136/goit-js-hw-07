import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

renderGallery(galleryItems);

function renderGallery(items) {
    const markup = items.map(({preview, original, description}) =>
        `<a class="gallery__link" href="${original}">
         <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
         </a>`
    ).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}

console.log(galleryItems);
