let img;

function preload() {
  img = loadImage('assets/zh.jpg');
}

function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  texture(img);
  textureMode(NORMAL);
  beginShape();
  vertex(-20, -40, 0, 0);
  vertex(20, -50, 1, 0);
  vertex(20, 20, 1, 1);
  vertex(-40, 20, 0, 1);
  endShape();
}