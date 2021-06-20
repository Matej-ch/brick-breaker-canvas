import {canvas, ctx} from "./canvas";

class Paddle {
    posX;

    constructor(posX,width,height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.posX = posX;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.posX,canvas.height - this.height,this.width,this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {

        this.draw();
    }
}

export default Paddle;