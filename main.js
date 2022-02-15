function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 120, 100, 400, 280);
    stroke(0,700,0);
    circle(70, 50, 100, 100);
    circle(170, 50, 100, 100);
    circle(270, 50, 100, 100);
    circle(370, 50, 100, 100);
    circle(470, 50, 100, 100);
    circle(570, 50, 100, 100);
    circle(70, 430, 100, 100);
    circle(170, 430, 100, 100);
    circle(270, 430, 100, 100);
    circle(370, 430, 100, 100);
    circle(470, 430, 100, 100);
    circle(570, 430, 100, 100);
    circle(570, 140, 100, 100);
    circle(570, 240, 100, 100);
    circle(570, 340, 100, 100);
    circle(70, 140, 100, 100);
    circle(70, 240, 100, 100);
    circle(70, 340, 100, 100);
}

function take_snapshot() {
    save('student_name.png');
}