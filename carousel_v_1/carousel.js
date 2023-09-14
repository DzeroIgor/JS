// 1. function
// events
// array, number, string, boolean
// if/ else for/ while

const IMAGES = [          // HW1: what is const and why CAPS?
    "1-700x400.jpg",
    "2-700x400.jpg",
    "3-700x400.jpg",
    "4-700x400.jpg",
    "5-700x400.jpg"
]
const TITLES = [        
    "Car Free Day of European Mobility Week", 
    "A « phygital » purchasing journey", 
    "10 Things to Make You See Laos in a Different Light", 
    "Happy Travel Road Mountains Nature Scenery", 
    "How To Receive Cosmic Energy Through Chakra System"
]

const EFFECTS = [
    "animate__bounceIn",
    "animate__bounceInDown",
    "animate__bounceInUp",
    "animate__flipInX",
    "animate__flipInY"
] 

let currentIndex = 0

function showImages ( n ) {

    let i = Math.round(Math.random() * EFFECTS.length)

    carouselSlides.innerHTML = `
    <img src="${IMAGES[n]}" class="animate__animated ${EFFECTS[i]}"/>
    `
} 
function showTitle ( n ) {
    carouselTitles.innerHTML = `
    <h4 class="animate__animated animate__bounceIn">${TITLES[n]}</h4>  
    ` // de schimbat animatia
} 
function next() {
    currentIndex ++
    if (currentIndex > IMAGES.length-1) {
        currentIndex = 0
    } 
    showImages(currentIndex)  // HW3*: showImages(++currentIndex) pot fi dar nu in cazul cum am facut eu
    showIndicators(currentIndex) 
    showTitle (currentIndex)   
}
function prev() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = IMAGES.length - 1
    }
    showImages(currentIndex)
    showIndicators(currentIndex)
    showTitle (currentIndex)
}

function showIndicators ( n ) {
    carouselIndicators.innerHTML = ``
    for (let i=0; i < IMAGES.length; i++) {        
        if (i == n) {
            carouselIndicators.innerHTML += `<i class="fa-solid fa-circle"></i>`
        } else {
            carouselIndicators.innerHTML += `<i class="fa-regular fa-circle"></i>`
        }
    }
}

showImages(currentIndex)
showIndicators(currentIndex)
showTitle(currentIndex)



function play() {
    setInterval( next , 3000 )
}

function action () {
switch (event.key) {
    case "ArrowLeft":                    
        prev();
        break;

    case "ArrowRight":
        event.preventDefault();        
        next();        
        break;
    }       
}