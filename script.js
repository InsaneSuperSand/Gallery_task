const gallery = document.querySelector(".gallery");
let cardTag;
function getPhotos(images) {
  images.map((image) => {
    cardTag = `
                <div class="gallery-pad">
                  <img class="gallery-image" src=${image.src.portrait} alt=${image.photographer}/>
                  <div class="info-banner">
                    <p class="author"> ${image.photographer} </p>
                  </div>
                </div>
              `;
    gallery.innerHTML += cardTag;
  });
}
let page = Math.floor(Math.random() * 10 + 1);
fetch(
  `https://api.pexels.com/v1/search?query=cyberpunk&per_page=18&orientation=landscape&size=small&page=${page}`,
  {
    headers: {
      Authorization: "563492ad6f91700001000001cf063f04a3ee4a43ba2bd2ba1fc03aa1",
    },
  }
)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    getPhotos(data.photos);
    console.log(data);
  });
