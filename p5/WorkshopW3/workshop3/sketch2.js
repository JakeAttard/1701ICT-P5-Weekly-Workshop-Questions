function setup() {
  // put setup code here
    createCanvas(400,400);
}

const ellipseX = 200;
const ellipseY = 200;
const ellipseWidth = 100;
const ellipseHeight = 100;

let x = 0;
let velocity = 5;

function draw() {
  // put drawing code here
    background(200);
    
    ellipse(x, ellipseY, ellipseWidth, ellipseHeight);
    
    x = x + velocity;
    
    if (d < radius) {
        velocity();
    } else {
        velocity(0);
    }
}