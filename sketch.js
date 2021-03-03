function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow"

  movingRect = createSprite(500,300,50,50);
  movingRect.shapeColor = "blue"
}

function draw() {
  background("cyan"); 
  movingRect.y = mouseY 
  movingRect.x = mouseX

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2){
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "white"
  }
  else{
    fixedRect.shapeColor = "yellow"
    movingRect.shapeColor = "blue"
  }


  drawSprites();
}