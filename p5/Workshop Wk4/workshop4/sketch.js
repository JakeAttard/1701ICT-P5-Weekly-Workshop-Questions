let img1;
let img2;

function preload(){
    img1 = loadImage("images/image1.jpg");
    img2 = loadImage("images/image2.jpg");
}

function setup() {
  // put setup code here
    createCanvas(800,600);
}

function draw() {
    image(img1, 0, 0);
    
    image(img2, 
          mouseX, 0, 0, height, 
          mouseX, 0, 0, height);

}