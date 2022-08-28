import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

renderGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery__item', {});

function renderGallery(items) {
    const markup = items.map(({ preview, original, description }) =>
        `<li><a class="gallery__item" href=${original}>
            <img class="gallery__image" src=${preview} alt=${description} />
        </a></li>`

    ).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}

