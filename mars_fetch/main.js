const KEY = "sESkWNLWXJHc1QSyCNVyyLSbeaIhXCkWNBaYloOk"
let slidersContainer = document.querySelector('.glider')     

function loadMarsRoverPhotosData() {
    let input = document.querySelector(`#search`);
    let date = input.value;

    const ENDPOINT_MARTS_ROVER_PHOTOS = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&earth_date=${date}&api_key=${KEY}&page=1`;

    fetch(ENDPOINT_MARTS_ROVER_PHOTOS)
        .then(response => response.json())
        .then(parseMarsRoverPhotosData);

    console.log(ENDPOINT_MARTS_ROVER_PHOTOS);
}

function parseMarsRoverPhotosData( data ) {

    

    createGliderDOM( data )    
}

function createGliderDOM(data) {
    if (data.photos.length === 0) {
        slidersContainer.innerHTML = `<p style="text-align: center; width: 100vw;">Nu există date disponibile pentru această căutare.</p>`;
    } else {
        slidersContainer.innerHTML = '';
        data.photos.forEach(photo => {
            div = document.createElement('div')
            div.appendChild(document.createElement('img'))
            div.firstElementChild.src = photo.img_src
            div.appendChild(document.createElement('h5'))
            div.lastChild.innerText = photo.earth_date
            div.appendChild(document.createElement('h4'))
            div.lastChild.innerText = photo.camera.full_name
            slidersContainer.appendChild(div)

        });
        newGlider()
    }
}

function newGlider (){
new Glider(document.querySelector('.glider'), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: true,
//   dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

}
