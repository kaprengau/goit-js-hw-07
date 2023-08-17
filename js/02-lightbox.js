import { galleryItems } from "./gallery-items.js";
// import { simpleLightbox } from "simplelightbox/dist/simple-lightbox.esm";
// Change code below this line

const gallery = document.querySelector(".gallery");

function galleryMarkup(items) {
  return items
    .map(
      (item) =>
        `
    <li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
`
    )
    .join("");
}

gallery.innerHTML = galleryMarkup(galleryItems);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
