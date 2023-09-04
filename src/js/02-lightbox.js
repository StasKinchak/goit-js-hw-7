import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const markup = galleryItems
    .map(
    ({preview, original, description}) =>
`<li class="gallery_item">
<a class="gallery_ link" href="${original}">
<img
class="gallery_image" 
src="${preview}"
alt="${description}"
/>
</a>
</li>`
)
.join('');


galleryContainer.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
gallery.on('show.simpleLightbox', function () {});