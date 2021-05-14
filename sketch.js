var fixedRect, movingRect;
var ob1,ob2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  ob1 = createSprite(200,200,40,40);
  ob1.shapeColor = "green";
  ob2 = createSprite(100,200,40,40);
  ob2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;



if(isTouching(movingRect,ob1)) {
  movingRect.shapeColor = "red";
  ob1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  ob1.shapeColor = "green";
}

 
  drawSprites();
}



