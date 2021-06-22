import {canvas} from "./canvas";
import Brick from "./brick";

class BrickFactory {
    rows = 10;
    columns = 5;
    padding = 10;
    offsetTop = 30;
    offsetLeft = 30;
    bricksWidth = 75;
    bricksHeight = 20;
    bricks = [];
    gameState = null;

    constructor(rows = 10,columns= 5,padding = 10,offsetTop = 30,offsetLeft = 30) {
        this.rows = rows;
        this.columns = columns;
        this.padding = padding;
        this.offsetTop = offsetTop;
        this.offsetLeft = offsetLeft;
        this.bricksWidth = canvas.width / rows;
    }

    init() {
        for(let i= 0; i < this.rows; i++) {
            this.bricks[i] = [];
            for(let j=0; j < this.columns; j++) {
                this.bricks[i][j] = { x: 0, y: 0,status: 1 };
            }
        }
    }

    draw() {
        for(let i= 0; i < this.rows; i++) {
            for(let j= 0; j < this.columns; j++) {
                if (this.bricks[i][j].status === 1) {
                    let brickX = (i * (this.bricksWidth + this.padding)) + this.offsetLeft;
                    let brickY = (j * (this.bricksHeight + this.padding)) + this.offsetTop;
                    this.bricks[i][j].x = brickX;
                    this.bricks[i][j].y = brickY;
                    let brick = new Brick(brickX, brickY, this.bricksWidth, this.bricksHeight,"#0095DD")
                    brick.draw();
                }
            }
        }
    }

    collisionDetection(ball) {
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.columns; j++) {
                let b = this.bricks[i][j];
                if(b.status === 1) {
                    if (ball.x > b.x && ball.x < b.x + this.bricksWidth && ball.y > b.y && ball.y < b.y + this.bricksHeight) {
                        ball.dirY = -ball.dirY;
                        b.status = 0;
                        this.gameState.score++;
                        if(this.gameState.score === this.columns * this.rows) {
                            this.gameState.isGameOver = true;
                        }
                    }
                }
            }
        }
    }

    setGameState(gameState) {
        this.gameState = gameState;
    }
}

export default BrickFactory