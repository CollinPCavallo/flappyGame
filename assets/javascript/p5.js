var bird;

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
}

function draw() {
    background(0);
    bird.update();
    bird.show();

}

function mouseDown() {
    document.body.onmousedown = function () {
        bird.up();
    }
}
mouseDown();

function keyPressed() {
    if (key === ' ') {
        bird.up();
    }
}