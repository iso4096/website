let img;
var theta = 0;

function preload() {
  img = loadImage('assets/zh.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
}
  
function draw() {
    background(255, 255, 255, 255);
    noStroke();
  
    rotateZ(theta * mouseX * 0.001);
    rotateX(theta * mouseX * 0.001);
    rotateY(theta * mouseX * 0.001);
  
    //pass image as texture
    texture(img);
    sphere(300, 100, 100);
  
    theta += 0.05;
  }