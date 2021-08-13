var sea 
var ship
var seaImg
var shipImg1
function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png" )

}

function setup(){
  createCanvas(400,400);
// spriteName.addImage(shipImg1);
background("blue");
sea = createSprite( 400,200)
sea.addImage(seaImg)
sea.velocityX = -5
sea.scale = 0.5
ship = createSprite(100,200,100,200)
ship.addAnimation("ship",shipImg1)
ship.scale = 0.3
}

function draw() {
  
  if(sea.x < 0) {
    sea.x = sea.width/2;
  }
 drawSprites();
}