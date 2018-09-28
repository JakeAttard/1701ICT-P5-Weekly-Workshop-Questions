function setup() {
    // put setup code here
    createCanvas(600, 600);
    noLoop();
}

function draw() {
    drawBackground();
    drawEnemies();
    drawFire();
    drawPlayer();
}

function drawFire() {
    // Drawing Fire
    stroke('red');
    strokeWeight(5);
    line(290, 400, 290, 350);
    line(290, 400, 290, 250);
    line(290, 400, 290, 150);
}

function drawPlayer() {
    // The
    fill('grey');
    triangle(250, 500, 290, 460, 330, 500);
    fill('darkgrey');
    triangle(280, 520, 290, 430, 300, 520);
}

function drawBackground() {
    // Test
    background('orange');
    fill('black');
    stroke('lightgreen');
    strokeWeight(20);
    rect(50, 50, 500, 500);
    noStroke();
}

function drawEnemies() {
    fill('lightgreen');
    rect(120, 120, 50, 50);
    rect(220, 120, 50, 50);
    rect(320, 120, 50, 50);
    rect(420, 120, 50, 50);

    fill('purple');

    ellipse(130, 260, 50, 50);
    ellipse(230, 260, 50, 50);
    ellipse(330, 260, 50, 50);
    ellipse(430, 260, 50, 50);

    fill('lightgreen');

    rect(120, 360, 50, 50);
    rect(220, 360, 50, 50);
    rect(320, 360, 50, 50);
    rect(420, 360, 50, 50);
}