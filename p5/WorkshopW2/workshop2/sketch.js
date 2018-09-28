function setup() {
  // put setup code here
    createCanvas(400,400);
}

function draw() {
  // put drawing code here
    background(200);
    
    fill('pink');
    ellipse(50, 50, 100, 100);
    
    fill('blue');
    rect(100, 100, 60, 30);
    
    fill('white');
    rect(160, 150, 80, 100, 20);
    
    triangle(290, 335, 318, 280, 346, 335);
    
    line(330, 120, 185, 135);
    
    fill('black');
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text( "(" + mouseX + ", " + mouseY + ")", 200, 200);
}