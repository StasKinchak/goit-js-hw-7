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
galleryContainer.addEventListener('click', onCardClick);

let instance;

function onCardClick(event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery')) {
        return;
    }

    instance = basicLightbox.create(
        `
        <img src="${event.target.dataset.source}">
        `,
        {
            onShow: instance => {
                document.addEventListener('keydown', modalClose);
            }
            onclose: instance => {
                document.removeEventListener('keydown', modalClose);
            },
        }
    );

    instance.show();

    function modalClose(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
            instance.close();
        };
    }
}