function preLoad(){
    
}

function setup(){
    createCanvas(800,600, WEBGL);
}

function draw(){
    background('grey');
    
    push();
    translate(100, 0, 50);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cylinder(20,50);
    pop();
    
    push();
    // translate(50, 0, 50);
    torus(50, 15);
    pop();
    
    push();
    translate(-100, 0, 50);
    rotateX(frameCount * -0.01);
    rotateZ(frameCount * -0.01);
    box(50);
    pop();
    
}
