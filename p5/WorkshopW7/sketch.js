let playerSprite;
let personImages = new Array(4);
//let images = [];
//let sprites = [];
//let speed = 2;

function preload(){
    
    personImages[0] = loadImage('images/person1.jpg');
    personImages[1] = loadImage('images/person2.jpg');
    personImages[2] = loadImage('images/person3.jpg');
    personImages[3] = loadImage('images/person4.jpg');
    
    /*
    
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 2; j++){
            images.push(loadImage('images/' + i + '_' + j + '.jpg'));
        }
    }
        console.log(images.length);
        
        */
}

function setup(){
    createCanvas(800,600);
    
    // Create Sprite
    playerSprite = createSprite(random(width), random(height), 50, 50);
   //playerSprite.addImage(walkImages[0]);
    playerSprite.addAnimation('run', personImages[0], personImages[1], personImages[2], personImages[3]);
    playerSprite.setVelocity(2,0);
    
    
    /*
    for(let i = 0; i < images.length; i++){
        let sprite = createSprite(random(width), random(height), 50, 50);
        sprite.addImage(images[i]);
        sprite.scale = 0.1;
        
        // Set some speed and direction
        sprite.setSpeed(speed, random(360));
        
        //sprite.setCollider('circle', 0, 0, 50, 50);
        
        sprites.push(sprite);
    }
    
    */
}

function draw(){
    background('grey');
    
    /*
    for(let i = 0; i < sprites.length; i++){
        for(let j = 0; j < sprites.length; j++){
            if(i != j){
                sprites[i].bounce(sprites[j]);
            }
        }
    }
    
    */
    
    drawSprites();
}