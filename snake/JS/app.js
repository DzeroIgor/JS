
let snake = new Snake(2, 3, "up");
let map = new Map();
let apple = new Apple(3, 6);
let mouse = new Mouse(4, 7);
let heart = new Heart(7, 4);
let frog = new Frog(7, 2);
let egg = new Egg(9, 3);
let coin = new Coin(3, 8);

map.children.push(apple);
map.children.push(coin);
map.children.push(egg);
map.children.push(frog);
map.children.push(heart);
map.children.push(mouse);
map.children.push(snake);
map.render(container)

setInterval(()=> {
    snake.move()
    map.render(container)
}, 1000 )

const userAction = (e) => {
    switch(e.code) {
        case "ArrowUp": snake.children[0].dir = "up"; break;
        case "ArrowRight": snake.children[0].dir = "right"; break;
        case "ArrowDown": snake.children[0].dir = "down"; break;
        case "ArrowLeft": snake.children[0].dir = "left"; break;
    }
}