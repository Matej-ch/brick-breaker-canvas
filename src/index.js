import "./styles/main.css";
import {canvas, ctx} from "./js/canvas";
import Ball from "./js/ball";
import Paddle from "./js/paddle";
import BrickFactory from "./js/brickFactory";

let balls = [];
let bricks = [];
let paddles = [];
let brickFactory = null;

let rightPressed = false;
let leftPressed = false;

let runAnimation = {
    value: true
};

function init() {
    initBall();
    initPaddle();

    brickFactory = new BrickFactory();
    brickFactory.init();
}

function initBall() {
    let size = 15;
    let dirX = 2;
    let dirY = 2;
    let x = canvas.width/2;
    let y = canvas.height-30;

    let ball = new Ball(x,y,dirX,dirY,size,'green');
    balls.push(ball);
}

function initPaddle() {
    let height = 20;
    let width = 150;
    let color = 'gold';

    let posX = (canvas.width - width) / 2

    let paddle = new Paddle(posX,width,height,color);

    paddles.push(paddle);
}

function draw() {
    if(runAnimation.value) {
        requestAnimationFrame(draw);
        ctx.clearRect(0,0,innerWidth,innerHeight);

        for (let i =0; i < balls.length; i++) {
            balls[i].update();
            balls[i].checkCollisions(paddles[0])
        }

        for (let i =0; i < paddles.length; i++) {
            if(rightPressed) {
                paddles[i].setPosition(7);
            } else if(leftPressed) {
                paddles[i].setPosition(-7);
            }

            paddles[i].update();
        }

        brickFactory.draw();
    }
}

init();

draw();


/*canvas.addEventListener('click', function() {
    runAnimation.value = !runAnimation.value;

    if(runAnimation.value) {
        draw();
    }
});*/

window.addEventListener('resize',e => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.code === "KeyD" || e.code === "ArrowRight") {
        rightPressed = true;
    }
    else if(e.code === "KeyA" || e.code === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.code === "KeyD" || e.code === "ArrowRight") {
        rightPressed = false;
    }
    else if(e.code === "KeyA" || e.code === "ArrowLeft") {
        leftPressed = false;
    }
}