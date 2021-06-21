import {canvas, ctx} from "./canvas";

class BrickFactory {
    rows = 10;
    columns = 5;
    padding = 10;
    offsetTop = 30;
    offsetLeft = 30;
    bricksWidth = 75;
    bricksHeight = 20;
    bricks = [];

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
                this.bricks[i][j] = { x: 0, y: 0 };
            }
        }
    }

    draw() {
        for(let i= 0; i < this.rows; i++) {
            for(let j= 0; j < this.columns; j++) {
                let brickX = (i * (this.bricksWidth + this.padding)) + this.offsetLeft;
                let brickY = (j * (this.bricksHeight + this.padding)) + this.offsetTop;
                this.bricks[i][j].x = brickX;
                this.bricks[i][j].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, this.bricksWidth, this.bricksHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

export default BrickFactory