import {canvas,ctx} from "./canvas";

class Ball {

    gameState = null;

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

        if(this.y + this.dirY < this.radius) {
            this.dirY = -this.dirY;
        } else if(this.y + this.dirY > canvas.height-this.radius) {
            if(this.x > this.paddle.posX && this.x < this.paddle.posX + this.paddle.width ) {
                this.dirY = -this.dirY;
            } else {
                this.gameState.isGameOver = true;
            }
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

    setGameState(gameState) {
        this.gameState = gameState;
    }

    checkCollisions(paddle) {
        this.paddle = paddle;
    }
}

export default Ball;