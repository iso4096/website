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
  
    rotateZ(theta * 0.000005);
    rotateX(theta * 0.000005);
    rotateY(theta * 0.000005);
  
    //pass image as texture
    texture(img);
    sphere(300, 100, 100);
  
    theta ++;
  }