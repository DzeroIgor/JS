// [Snake]> parent > [Head]

class Snake {
    // when creating a new snake -> attach a head to it
    constructor(x,y, dir="up") {

        // snake segments/ elements
        this.children = [];
        this.children.push(new Head(x, y, "up"));
        this.children.push(new Body(x, y+1, dir));
        // this.children.push(new Body(x, y+2, dir));
        this.children.push(new Tail(x, y+2, dir));

        // switch (dir) {
        //     case "up":
        //         this.dir = dir;
        //         this.head = new Head(x, y, this.dir);
        //         this.body = new Body(x, y + 1, this.dir);
        //         this.tail = new Tail(x, y + 2, this.dir);
        //         break;
        //     case "down":
        //         this.dir = dir;
        //         this.head = new Head(x, y, this.dir);
        //         this.body = new Body(x, y - 1, this.dir);
        //         this.tail = new Tail(x, y - 2, this.dir);
        //         break;
        //     case "left":
        //         this.dir = dir;
        //         this.head = new Head(x, y, this.dir);
        //         this.body = new Body(x + 1, y, this.dir);
        //         this.tail = new Tail(x + 2, y, this.dir);
        //         break;
        //     case "right":
        //         this.dir = dir;
        //         this.head = new Head(x, y, this.dir);
        //         this.body = new Body(x - 1, y, this.dir);
        //         this.tail = new Tail(x - 2, y, this.dir);
        //         break;
        //     default:
        //         this.dir = "up"; 
        //         break;
        // }        
    }

    move() {
        
        this.children.reverse()
       //     0    1     2 
        // [Tail.Body, Head]
        this.children.forEach( (s,i)=> {
            
            if(i == this.children.length -1) {
                if(s.dir == "up") {s.y--}
                if(s.dir == "down") {s.y++}
                if(s.dir == "right") {s.x++}
                if(s.dir == "left") {s.x--}    
                
                            
            } else {
                // if+s where is the neighbor 
                let neighbor = this.children[i + 1];
                
                if (s.x < neighbor.x) {
                    s.dir = "right";
                    s.x++;
                } else if (s.x > neighbor.x) {
                    s.dir = "left";
                    s.x--;
                } else if (s.y < neighbor.y) {
                    s.dir = "down";
                    s.y++;
                } else if (s.y > neighbor.y) {
                    s.dir = "up";
                    s.y--;
                }
                // s.x = this.children[i+1].x
                // s.y = this.children[i+1].y

                
                
                // function for change segment to corner
                if (s.dir === "up" && neighbor.dir === "right") {
                    s.dir = "up-right";
                } else if (s.dir === "left" && neighbor.dir === "down") {
                    s.dir = "up-right";
                } else if (s.dir === "up" && neighbor.dir === "left") {
                    s.dir = "up-left";
                } else if (s.dir === "right" && neighbor.dir === "down") {
                    s.dir = "up-left";
                } else if (s.dir === "down" && neighbor.dir === "right") {
                    s.dir = "down-right";
                } else if (s.dir === "left" && neighbor.dir === "up") {
                    s.dir = "down-right";
                } else if (s.dir === "down" && neighbor.dir === "left") {
                    s.dir = "down-left";
                } else if (s.dir === "right" && neighbor.dir === "up") {
                    s.dir = "down-left";
                }

                // function for turn tail
                if (i === 0) {    
                    if (s.dir === "up" && neighbor.dir === "right") {
                    s.dir = "right";
                } else if (s.dir === "left" && neighbor.dir === "down") {
                    s.dir = "down";
                } else if (s.dir === "up" && neighbor.dir === "left") {
                    s.dir = "left";
                } else if (s.dir === "right" && neighbor.dir === "down") {
                    s.dir = "right";
                } else if (s.dir === "down" && neighbor.dir === "right") {
                    s.dir = "down";
                } else if (s.dir === "left" && neighbor.dir === "up") {
                    s.dir = "left";
                } else if (s.dir === "down" && neighbor.dir === "left") {
                    s.dir = "down";
                } else if (s.dir === "right" && neighbor.dir === "up") {
                    s.dir = "right";
                }
                }

            }                        
        } )
        this.children.reverse()
        border()
    }
    
    // when rendering the SNAKE - also render the head
    render() {
        let html = ``
        for (let i = 0; i < this.children.length; i++) {
            html += this.children[i].render();
        }
        
        return html
    }
    
}


function border() {
    if (snake.children[0].x > (map.width - 2)) {
        snake.children[0].dir = "down";
    }
    if (snake.children[0].y > (map.height - 2)) {
        snake.children[0].dir = "left";
    }
    if (snake.children[0].x < 1) {
        snake.children[0].dir = "up";
    }
    if (snake.children[0].y < 1) {
        snake.children[0].dir = "right";
    }

}













// snake -> unidirectional -> head 

/*

*Coposition

- An Object (parent) refereces object of other classes (children)
- an "has a" relationship
- unidirectional/ bidirectional
- one-to-one, many-to-one, ...
*/