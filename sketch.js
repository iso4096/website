let img;
var xRot = 70, yRot = 50, zRot = 0;

function preload() {
    img = loadImage('assets/marscyl1.jpg');
}

function setup() {
    noStroke();
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
    translate(-windowWidth/3, -windowHeight/3.5)

    xRot += 0.001;
    zRot += 0.0004;
}