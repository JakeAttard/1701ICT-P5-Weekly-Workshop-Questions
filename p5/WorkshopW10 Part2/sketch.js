var coneX = new Array(15);
var coneZ = new Array(15);
var cameraX = 0;
var cameraZ = 1000;
let images = [];

function preload(){
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 2; j++){
            let image = loadImage('images/' + i + '_' + j + '.jpg');
            images.push(image);
        }
    }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(100);

  for (var i = 0; i < coneX.length; i++) {
    coneX[i] = random(-windowWidth, windowWidth);
    coneZ[i] = random(-windowHeight, windowHeight);
  }
}

function draw() {
	background(100);
  camera(cameraX, 0, cameraZ, 0, 0, 0, 0, 1, 0);

  for (var i = 0; i < coneX.length; i++) {
    push();
    translate(coneX[i], 0, coneZ[i]);
 //   rotateX(PI);
    plane(100, 200);
    texture(images[i]);
    pop();
  }
  
  if (keyIsDown(UP_ARROW)) {
    cameraZ -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    cameraZ += 10;
  }
  if (keyIsDown(LEFT_ARROW)) {
    cameraX -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    cameraX += 10;
  }

}