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
        this.dirX = 2;
        this.dirY = -2;
        /*if(this.isOnCanvasX()) {
            this.dirX = -this.dirX;
        }
        if(this.isOnCanvasY()) {
            this.dirY = -this.dirY;
        }*/

        this.x += this.dirX;
        this.y += this.dirY;

        this.draw();
    }
}

export default Ball;