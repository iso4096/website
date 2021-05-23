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
  vertex(-50, -50, 0, 0);
  vertex(50, -50, 1, 0);
  vertex(50, 50, 1, 1);
  vertex(-50, 50, 0, 1);
  endShape();
}