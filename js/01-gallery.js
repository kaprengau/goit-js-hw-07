import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function galleryMarkup(items) {
  return items
    .map(
      (item) =>
        `
    <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
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

gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault(evt);
  if (evt.target === "IMG") {
    return;
  }
  {
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

    instance.show();
  }
}
