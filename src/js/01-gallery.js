// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector('.gallery');
galleryList.style.listStyle = "none";

// Створення і рендер розмітки на підставі масиву даних galleryItems
function createGalleryItem({preview, original, description}) {
    const galleryItem = `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    return galleryItem
}
const galleryItemsMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'outside',
    captionDelay: 250,
});
console.log(galleryItems);

