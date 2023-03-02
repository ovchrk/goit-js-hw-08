import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createImageGallery(galleryItems);

function createImageGallery(galleryItems) {
  const galleryElementMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}" />
      </a>
      `;
    })
    .join('');
  return galleryElementMarkup;
  //   console.log(galleryElementMarkup);
}
// console.log(createImageGallery(galleryItems));

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

const photoGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'outside',
  fadeSpeed: 200,
  captionDelay: 250,
});
