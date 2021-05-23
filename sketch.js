let img;
var xRot = 70, yRot = 50, zRot = 0;

function preload() {
    img = loadImage('assets/marscyl1.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
}
  

function draw() {
    background(0, 0, 0, 255);
  
    rotateZ(zRot);
    rotateX(xRot);
    rotateY(yRot);
  
    //pass image as texture
    texture(img);
    sphere(300, 100, 100);

    xRot += 0.0005;
    zRot += 0.0002;
}