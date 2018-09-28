let images = [];
let sprites = [];
let speed = 2;
let labels = [];

function preload(){
    
    // Loading Images
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 2; j++){
            images.push(loadImage('images/' + i + '_' + j + '.jpg'));
        }
    }
        console.log(images.length);
    
    // Loading Labels
    labels = loadStrings('labels.txt');
}

function setup(){
    
    // Console Log of Strings
    for(let i = 0; i < labels.length; i++){
        console.log(labels[i]);
    }
    
    createCanvas(800,600);
    
    for(let i = 0; i < images.length; i++){
        let sprite = createSprite(random(width), random(height), 50, 50);
        sprite.addImage(images[i]);
        sprite.scale = 0.1;
        
        // Set some speed and direction
        sprite.setSpeed(speed, random(360));
        
        sprite.setCollider('circle', 0, 0, 50, 50);
        
        sprites.push(sprite);
    }
}

function draw(){
    background('grey');
    
    for(let i = 0; i < sprites.length; i++){
        for(let j = i + 1; j < sprites.length; j++){
            if(i != j){
                sprites[i].bounce(sprites[j]);
            }
        }
        
        // Add a label to our sprite
        textAlign(CENTER);
        text(labels[i], sprites[i].position.x - 50, sprites[i].position.y + 35, 100, 50);
    }
    
    drawSprites();
}