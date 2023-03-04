import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery')

const galleryBox = createGalleryMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', galleryBox);

galleryConteiner.addEventListener('click', ongalleryConteinerClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(( {preview, original, description} ) => {
        return`
        <a class="gallery__item" href="${original}">
              <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
               />
        </a>
        `;
    } )
    .join('');
    
};

function ongalleryConteinerClick(event) {
    event.preventDefault();
   var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});
   };


