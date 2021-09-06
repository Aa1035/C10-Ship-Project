
function preload(){
  seaImg = loadImage("sea.png")
  ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200);
  sea.addImage(seaImg)
  sea.scale = 0.25;
  ship = createSprite(100, 300)
  ship.addAnimation("sailing", ship_sailing)
  ship.scale = 0.25
}

function draw() {
  background("blue");
  drawSprites();
  if (sea.x < 0) {
    sea.x=sea.width/2
  }
}