let img;
var xRot = 70, yRot = 50, zRot = 0;

function preload() {
    img = loadImage('assets/marscyl1.jpg');
}

function setup() {
    noStroke();
    createCanvas(2880, 1400, WEBGL)
}
  

function draw() {
    background(2, 4, 19, 255);
  
    rotateZ(zRot);
    rotateX(xRot);
    rotateY(yRot);
  
    //pass image as texture
    texture(img);
    sphere(700, 100, 100);

    xRot += 0.001;
    zRot += 0.0004;
}