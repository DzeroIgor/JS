const duration = 1000
const delay = 1000

const fadeOut = [
    {opacity: 1 },    
    {opacity: 0 },
    {opacity: 1 },    
]

class Slide {
    constructor(url) {
        this.url = url;
    }
    render (rootSelector) {
        let parentDiv = document.querySelector(rootSelector);
        this.slideElement = document.createElement ('div');
            this.slideElement.className = 'slide'

        if (parentDiv.firstElementChild)
            parentDiv.removeChild(parentDiv.firstElementChild);
        
        parentDiv.appendChild(this.slideElement);
    
        for (let y = 1; y <= 12; y++) {
            for (let x = 1; x <=16; x++) {
                let sq = document.createElement('div');
                    sq.className = 'sq';
                    sq.style.backgroundImage = `url(${this.url})`;
                        
                    sq.style.top = `${(y-1)*50}px`;
                    sq.style.left = `${(x-1)*50}px`;
                    sq.style.backgroundPositionY = `${-(y-1)*50}px`;
                    sq.style.backgroundPositionX = `${-(x-1)*50}px`;
    
                this.slideElement.appendChild(sq);
    
            }
        }
        
    };

    addEffect() {
        for(let i = 0; i < this.slideElement.children.length; i++) {
            // this.slideElement.children[i].style.animation 
            // = `fadeOut 1s linear ${Math.random() * 1}s forwards`

            let animationParams = {
                duration: duration,
                delay: Math.random() * delay,
                easing: 'linear',
                fill: 'forwards'
            }
            let anim = this.slideElement.children[i].animate(fadeOut, animationParams)
        }
    }

}

class Carousel {
    constructor(rootSelector, slides) {
        this.rootSelector = rootSelector;
        this.slides = slides;    
    }

    render(slideIndex) {
        this.slides[slideIndex].render(this.rootSelector);
        
        // test rgb color
        // colorjs.prominent(
        //     this.slides[slideIndex].url, 
        //         { amount: 3 }
        //         ).then(color => {
        //         document.querySelector("#titleBar h1").style.color = 
        //         `rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]})`
        //         })

        // test hex color
        colorjs.average(this.slides[slideIndex].url, { format: 'hex' }).then(color => {
            document.querySelector("#titleBar h1").style.color = color
        })
        
        // test hex background color
        colorjs.average(this.slides[slideIndex].url, { format: 'hex' }).then(color => {
                document.querySelector(".carousel").style.backgroundColor = color
                })
    }

    next() {
        this.slides.push(this.slides.shift());
        this.render(0)
        this.slides[0].addEffect()
    }
    prev() {
        const lastSlide = this.slides.pop(); // Elimină ultimul slide din array
        this.slides.unshift(lastSlide); // Adaugă slide-ul eliminat la începutul array-ului
        this.render(0);
        this.slides[0].addEffect();
    }
}


// //////////////////////////////////////////////////////////////////
const carousel = new Carousel('.carousel', [
    new Slide("images/1-800x600.jpg"),
    new Slide("images/2-800x600.jpg"),
    new Slide("images/3-800x600.jpg"),
    new Slide("images/4-800x600.jpg"),
    new Slide("images/5-800x600.jpg"),
]); 

carousel.render(0)
// carousel.next()

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', function() {
    carousel.prev(); 
});
nextButton.addEventListener('click', function() {
    carousel.next(); 
});
