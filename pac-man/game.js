let pac_x = Math.round(Math.random() * 9 + 1)
let pac_y = Math.round(Math.random() * 9 + 1)

let coinOne_x = Math.round(Math.random() * 9 + 1)
let coinOne_y = Math.round(Math.random() * 9 + 1)

let coinTwo_x = Math.round(Math.random() * 9 + 1)
let coinTwo_y = Math.round(Math.random() * 9 + 1)

let coinThree_x = Math.round(Math.random() * 9 + 1)
let coinThree_y = Math.round(Math.random() * 9 + 1)

let coinFour_x = Math.round(Math.random() * 9 + 1)
let coinFour_y = Math.round(Math.random() * 9 + 1)

let bombOne_x = Math.round(Math.random() * 9 + 1)
let bombOne_y = Math.round(Math.random() * 9 + 1)

let bombTwo_x = Math.round(Math.random() * 9 + 1)
let bombTwo_y = Math.round(Math.random() * 9 + 1)

let score = 0

let cOneFound = false
let cTwoFound = false
let cThreeFound = false
let cFourFound = false
let bOneFound = false
let bTwoFound = false

function action () {
    console.log (
        event.key
        )
        switch (event.key) {
            case "ArrowDown":  
            pac_y++
            if (pac_y > 10) {
                pac_y = 10
            } 
            break
            case "ArrowUp":    
            pac_y--
            if (pac_y < 1) {
                pac_y = 1
            } 
            break
            case "ArrowRight": 
            pac_x++
            if (pac_x > 10) {
                pac_x = 10
            } 
            break
            case "ArrowLeft":  
            pac_x--
            if (pac_x < 1) {
                pac_x = 1
            }             
            break
        }
        if (pac_x == coinOne_x && pac_y == coinOne_y && !cOneFound) {
            cOneFound = true
            score += 30  
            coinOne_x = -1
            coinOne_y = -1
        }
        if (pac_x == coinTwo_x && pac_y == coinTwo_y && !cTwoFound) {
            cTwoFound = true
            score += 20              
            coinTwo_x = -1
            coinTwo_y = -1            
        }
        if (pac_x == coinThree_x && pac_y == coinThree_y && !cThreeFound) {
            cThreeFound = true
            score += 30  
            coinThree_x = -1
            coinThree_y = -1            
        }
        if (pac_x == coinFour_x && pac_y == coinFour_y && !cFourFound) {
            cFourFound = true
            score += 20  
            coinFour_x = -1
            coinFour_y = -1            
        }
        if (pac_x == bombOne_x && pac_y == bombOne_y && !bOneFound) {
            bOneFound = true
            score -= 20  
            bombOne_x = -1
            bombOne_y = -1
        }
        if (pac_x == bombTwo_x && pac_y == bombTwo_y && !bTwoFound) {
            bTwoFound = true
            score -= 10 
            bombTwo_x = -1
            bombTwo_y = -1
        }

        renderMap ()
}



function renderMap () {
    gameMap.innerHTML = ``
    for (let y = 1; y <= 10; y++) {
        for (let x = 1; x <= 10; x++) {

            if (x==pac_x && y==pac_y) {
                gameMap.innerHTML += `<div class="pac"></div>`
            } else if (x==coinOne_x && y==coinOne_y) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x==coinTwo_x && y==coinTwo_y) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x==coinThree_x && y==coinThree_y) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x==coinFour_x && y==coinFour_y) {
                gameMap.innerHTML += `<div class="coin"></div>`
            } else if (x==bombOne_x && y==bombOne_y) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            } else if (x==bombTwo_x && y==bombTwo_y) {
                gameMap.innerHTML += `<div class="bomb"></div>`
            } else {
                gameMap.innerHTML += `<div class=""></div>`
            } 
        }
    }
    gameScore.innerHTML = `Score: ${score}`
}

renderMap()