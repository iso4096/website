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
  
    rotateZ(theta * 0.001);
    rotateX(theta * 0.001);
    rotateY(theta * 0.001);
  
    //pass image as texture
    texture(img);
    sphere(300, 100, 100);

    theta += theta > 100 ? 0 : 0.01;
  }