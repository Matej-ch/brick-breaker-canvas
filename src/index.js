import "./styles/main.css";
import {canvas, ctx} from "./js/canvas";
import Ball from "./js/ball";

let balls = [];
let bricks = [];

let runAnimation = {
    value: true
};

function init() {
    let x = 10;
    let y = 10;
    let size = 5;
    let ball = new Ball(x,y,size,'green');
    balls.push(ball);
}

function draw() {
    if(runAnimation.value) {
        requestAnimationFrame(draw);
        ctx.clearRect(0,0,innerWidth,innerHeight);

        for (let i =0; i < balls.length; i++) {
            balls[i].draw();
        }
    }
}

init();

draw();


canvas.addEventListener('click', function() {
    runAnimation.value = !runAnimation.value;

    if(runAnimation.value) {
        draw();
    }
});

window.addEventListener('resize',e => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})