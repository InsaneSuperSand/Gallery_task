const gallery = document.querySelector(".gallery");
let cardTag;
function getPhotos(images) {
  images.map((image) => {
    cardTag = `<div class="gallery-pad">
              <img src=${image.src.landscape}/>
              <p> ${image.photographer}| ${image.title} </p>
         </div>`;
    gallery.innerHTML += cardTag;
  });
}
fetch("https://api.pexels.com/v1/search?query=cyberpunk&per_page=9", {
  headers: {
    Authorization: "563492ad6f91700001000001cf063f04a3ee4a43ba2bd2ba1fc03aa1",
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    getPhotos(data.photos);
    console.log(data);
  });

/* DZIAŁA 
class PhotoGallery {
  constructor() {
    this.API_KEY = "563492ad6f91700001000001cf063f04a3ee4a43ba2bd2ba1fc03aa1";
    this.galleryDIv = document.querySelector(".gallery");

    this.eventHandle();
  }
  eventHandle() {
    document.addEventListener("DOMContentLoaded", () => {
      this.getImg();
    });
  }
  async getImg(index) {
    const baseURL = `https://api.pexels.com/v1/curated?per_page=9`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
    console.log(data);
  }
  async fetchImages(baseURL) {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: this.API_KEY,
      },
    });
    const data = await response.json();
    // console.log(data);
    return data;
  }
  GenerateHTML(photos) {
    photos.forEach((photo) => {
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
      <a href='${photo.src.original}' target="_blank">
        <img src="${photo.src.medium}">
        <h3>${photo.photographer}</h3>
      </a>
      `;
      this.galleryDIv.appendChild(item);
    });
  }
}
const gallery = new PhotoGallery();
*/

/*class photo_gallery {
  constructor() {
    this.API_KEY = "563492ad6f91700001000001cf063f04a3ee4a43ba2bd2ba1fc03aa1";
    this.gallery_div - document.querySelector(".gallery");
    this.eventHandle();
  }
  eventHandle() {
    document.addEventListener("DOMContentLoaded", () => {
      this.get_img();
    });
  }
  async get_img() {
    const base_URL = "https://api.pexels.com/v1/curated?per_page=9";
    const data = await this.fetch_image(base_URL);
    this.create_HTML(data.photos);
    console.log(data);
  }
  async fetch_image(base_URL) {
    const response = await fetch(base_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: this.API_KEY,
      },
    });
    const data = await response.json();
    return data;
  }
  create_HTML(photos) {
    photos.forEach((photo) => {
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
            
            <a href='#'>
                <img src="${photo.src.medium}>
                </a>
            `;
      this.gallery_div.appendChild(item);
    });
  }
}
const gallery = new photo_gallery();
*/
