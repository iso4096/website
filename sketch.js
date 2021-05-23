let img;
var xRot = 70, yRot = 50, zRot = 0;

function preload() {
    img = loadImage('assets/marscyl1.jpg');
}

function setup() {
    noStroke();
    createCanvas(windowWidth*2, windowHeight*2, WEBGL)
}
  

function draw() {
    background(2, 4, 19, 255);
  
    rotateZ(zRot);
    rotateX(xRot);
    rotateY(yRot);
  
    //pass image as texture
    texture(img);
    sphere(600, 100, 100);

    xRot += 0.001;
    zRot += 0.0004;
}