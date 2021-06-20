import {canvas} from "./canvas";

const {ctx} = require("./canvas");

class Ball {
    constructor(x,y,dirX,dirY,radius,color) {
        this.x = x;
        this.y = y;
        this.dirX = dirX;
        this.dirY = dirY;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {

        if(this.isOnCanvasX()) {
            this.dirX = -this.dirX;
        }

        if(this.isOnCanvasY()) {
            this.dirY = -this.dirY;
        }

        this.x += this.dirX;
        this.y += this.dirY;

        this.draw();
    }

    isOnCanvasY() {
        return this.y + this.dirY > canvas.height-this.radius || this.y + this.dirY < this.radius;
    }

    isOnCanvasX() {
        return this.x + this.dirX > canvas.width - this.radius || this.x + this.dirX < this.radius;
    }
}

export default Ball;