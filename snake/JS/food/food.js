class Apple {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    render() {
        return `
        <div
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/snake.png');
        background-position: 0 -192px;
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}
class Mouse {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    render() {
        return `
        <div
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/mouse.png');
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}
class Frog {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    render() {
        return `
        <div
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/frog.png');
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}
class Egg {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    render() {
        return `
        <div
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/egg.png');
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}
class Coin {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    render() {
        return `
        <div
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/coin.png');
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}
class Heart {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    render() {
        return `
        <div
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/heart.png');
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}