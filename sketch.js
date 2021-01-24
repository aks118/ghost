var towerImg,tower;
var doorImg,door,doorsGroup;
var climberImg,climber,climbersGroups;
var ghost,ghoustImg;
function preload()
{
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  doorsGroup= new Group();
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  climbersGroup= new Group();
  spookySound =loadSound("spooky.wav");
}
function setup()
{
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerImg);
 
  tower.velocityY=1;

  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImg);
  spookySound.loop();
}
function draw()
{
  background(0);
  if(tower.y>400){
    tower.y=300;
  }
  
  if(keyDown("space")){
    ghst.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+0.8;
  if(climbersGroup.isTouching(ghost)){
    ghost.velocity=0;
  }
  drawSprites();
  spawnDoors();
}
function spawnDoors()
{
  if(frameCount%240===0){
  var door=createSprite(200,-50);
  door.addImage(doorImg);
    var climber=createSprite(200,10);
    climber.addImage(climberImg);
    var invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
  door.x=Math.round(random(120,400));
 door.velocityY=1;
    climberX=door.x;
   invisibleBlock.velocityY=1;
    ghost.depth=door.depth;
    ghost.depth+=1;
    climber.velocityY=1;
  door.lifetime=800;
    climber.lifetime=800;
    invisibleBlock.lifetime=800;
  doorsGroup.add(door);
    climbersGroup.add(climber);
}
}