let img;
var xRot = 70, yRot = 50, zRot = 0;

function preload() {
    img = loadImage('assets/marscyl1.jpg');
}

function setup() {
    noStroke();
    createCanvas(windowWidth*1.5, windowHeight*1.5, WEBGL)
}
  

function draw() {
    background(0, 0, 0, 255);
  
    rotateZ(zRot);
    rotateX(xRot);
    rotateY(yRot);
  
    //pass image as texture
    texture(img);
    sphere(500, 100, 100);

    xRot += 0.001;
    zRot += 0.0004;
}