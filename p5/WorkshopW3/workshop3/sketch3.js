function setup() {
  // put setup code here
    createCanvas(400,400);
}

let angle = 0;

function draw() {
  // put drawing code here
    background('green');
    
    stroke(200);
    strokeWeight(40);
    noFill()
    ellipse(200, 200, 200, 100);
   
    
    //fill(255,0,0);
    
    
   
    angleMode(DEGREES);
    
    let centreX = width / 2;
    let centreY = height / 2;
    let radius = 100;
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    
    fill('red')
    ellipse(centreX + x, centreY + y, 10, 10);
    
    angle++;
    
}