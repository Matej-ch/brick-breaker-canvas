const {ctx} = require("./canvas");

class Brick {

    constructor(x,y,sizeX,sizeY,color) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.sizeX, this.sizeY);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

export default Brick;