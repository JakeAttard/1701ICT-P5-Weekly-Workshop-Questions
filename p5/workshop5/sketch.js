let img = new Array(5);
let x = new Array(5);
let y = new Array(5);
let vX = new Array(5);
let vY = new Array(5);
let w = 50;
let h = 50;

function preload(){
    for (let i = 0; i < img.length; i++){
        img[i] = loadImage('images/img' + i + '.jpg');
    }
}

function setup() {
    createCanvas(800,600);

    for( let i = 0; i < x.length; i++){
        x[i] = random(width - w);
        y[i] = random(height - h);
        vX[i] = random(-3, 3);
        vY[i] = random(-3, 3);
    }
}

function mousePressed(){
    for( let i = 0; i < img.length; i++){
        if( mouseX >= x[i] &&
          mouseX <= x[i] + w &&
           mouseY >= y[i] &&
          mouseY <= y[i] + h){
            x[i] = undefined;
            y[i] = undefined;
        }
    }
}

function draw() {
  // put drawing code here
    background('grey');

        for(let i = 4; i > -1; i--){

        if(img[1] >= width - w || x[i] <= 0){
            vX[i] *= -1;
        }
        if( y[i] >= height - h || y[i] <= 0){
            vY[i] *= -1;
        }
        x[i] += vX[i];
        y[i] += vY[i];

        image(img[i], x[i], y[i], w, h);

    }


}
