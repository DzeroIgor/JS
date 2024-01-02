const KEY = "sESkWNLWXJHc1QSyCNVyyLSbeaIhXCkWNBaYloOk"
let slidersContainer = document.querySelector('.glider')     
let div

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
    slidersContainer.innerHTML = ``
    createGliderDOM( data )

}

function createGliderDOM( data ) {
    
    data.photos.forEach( photo => {
        div = document.createElement('div')
        div.appendChild( document.createElement('img') )
        div.firstElementChild.src = photo.img_src
        div.appendChild(document.createElement('h5'))
        div.lastChild.innerText = photo.earth_date
        div.appendChild(document.createElement('h4'))
        div.lastChild.innerText = photo.camera.full_name
        slidersContainer.appendChild(div)
        
    });
    newGlider()    
}

function newGlider (){
  new Glider(document.querySelector('.glider'), {
  slidesToScroll: 3,
  slidesToShow: 3,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next' 
  }
})
}