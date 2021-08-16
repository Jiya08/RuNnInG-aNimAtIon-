var path
var runner
var leftb
var rightb
function preload(){
  //pre-load images
pathImg = loadImage("path.png");

runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  runner = createSprite(100,100,50,10);
  runner.addAnimation("runner",runnerImg);
  runner.scale = 0.08;
  

  leftb = createSprite(10,200,20,400);
  rightb = createSprite(400,200,20,400);
  leftb.visible = false;
  rightb.visible = false;
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  if(mouseX>0 && mouseX<400){
    runner.x = mouseX;
  }
  
  runner.collide(leftb);
  runner.collide(rightb);
  drawSprites();

}
