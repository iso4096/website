let img;
var xRot = 70, yRot = 50;

function preload() {
    img = loadImage('marscyl1.jpg');
}

function setup() {
    noStroke();
    createCanvas(2880, 1800, WEBGL)
}

function draw() {
    background(2, 4, 19, 255);
  
    rotateX(xRot);
    
    texture(img);
    sphere(700, 100, 100);

    xRot += 0.001;
}