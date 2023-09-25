
const N_FLAKES = 100

let flakes_x = [
    Math.round(Math.random() * 500)
]
let flakes_y = [
    -Math.round(Math.random() * 100)
]

let pressButton = true
let fallTimer = setInterval(fall, 150)

function generateCoords() {
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_x[i] = Math.round(Math.random() * 500)
        flakes_y[i] = -Math.round(Math.random() * 500)
    }
}
function drawFlakes ( i ) {
    snowContainer.innerHTML += `
    <div class="flake" style="
    left: ${flakes_x[i]}px; 
    top: ${flakes_y[i]}px
    "></div>
    `
}
function drawAllFlakes() {
    snowContainer.innerHTML = ``
    for (let i = 0; i < N_FLAKES; i++) {
        drawFlakes(i)
    }
}

function fall() {
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_y[i] += 4
        if (flakes_y[i]>500) {
            flakes_y[i] = -Math.round(Math.random() * 250)
        }
    }
    drawAllFlakes()
}
button.innerHTML += `
    <button onclick="toggleAnimation()" class="btn btn-outline-light">
    <i class="fa-solid fa-stop"></i>
    </button>`

function start() {
    button.innerHTML = ``
    pressButton = true
    button.innerHTML += `
    <button onclick="toggleAnimation()" class="btn btn-outline-light">
    <i class="fa-solid fa-stop"></i>
    </button>`
    fallTimer = setInterval(fall, 150)
}
function stop() {
    button.innerHTML = ``
    pressButton = false 
    button.innerHTML += `
    <button onclick="toggleAnimation()" class="btn btn-outline-light">
    <i class="fa-solid fa-play"></i>
    </button>`
    
    clearInterval(fallTimer)
}

function toggleAnimation() {
    if (!pressButton) {
        start()
    } else {
        stop()
    }
}

generateCoords()
drawAllFlakes()

