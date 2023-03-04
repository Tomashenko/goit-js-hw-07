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
        <div class="gallery__item">
           <a class="gallery__link" href="${original}">
              <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
               />
           </a>
        </div>
        `;
    } )
    .join('');
};

function ongalleryConteinerClick(event) {
    event.preventDefault();
    console.log(event.target.dataset.source);
    const instance = basicLightbox.create(`
<img width="1400" height="900" src="${event.target.dataset.source}">
`)
instance.show();

};


