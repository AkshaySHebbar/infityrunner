const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var player1;
var scene,invisibleground;
var onstacles;
var cactus1,watertank1,snake1,rock;
var snakes,watertanks,cactuses;
var ropes;
var gameState;
var End;

function preload(){
  sceneImage=loadImage("images/ninja.jpg");
   playerrunner1=loadAnimation("images/run1.png","images/run3.png","images/run4.png","images/run5.png","images/run6.png");
jumpanimation=loadImage("images/jump1.png");
rock=loadImage("images/rock2.png");
snake1=loadImage("images/snake.png");
watertank1=loadImage("images/watertanks.png");
cactus1=loadImage("images/Cactus.png");
rope1=loadImage("images/rope.png")


}
function setup() {
  createCanvas(800,800);
  scene=createSprite(200,200,800,800);
scene.x=scene.width/2
player1=createSprite(100, 450, 50, 50);
invisibleground=createSprite(100,530,800,10);
ropes=createSprite(400,150,800,5)



invisibleground.visible=false;

player1.addAnimation("ninja",playerrunner1);
scene.addImage(sceneImage);
ropes.addImage(rope1)

 scene.velocityX=-10;
scene.display();

scene.scale=1;
player1.scale=0.75;
ropes.scale=2



ObstacleGroup=new Group();
spawnsnake=new Group();

}

function draw() {
 background("white");

 player1.collide(invisibleground)
  if (scene.x<0) {
    scene.x=scene.width/2
  }
  
  if (keyDown("space")){
    player1.velocityY=-15;
    player1.changeImage(jumpanimation);
      }
     if(player1.isTouching(ropes)||player1.isTouching(snake)||player1.isTouching(rock)){

       gameState =End;
      }
 
      player1.velocityY = player1.velocityY + 1;
 
spawnObstacles();
spawnsnakes();;

 drawSprites();
}

function spawnObstacles() {
 if (frameCount % 80 === 0) {
   var obstacles = createSprite(400,500,40,10);

obstacles.addImage(rock);
obstacles.scale= 0.2;
   
   obstacles.velocityX = -10;
    obstacles.lifetime = 134;
  ObstacleGroup.add(obstacles);
 }}
 
function spawnsnakes() {
  if (frameCount % 177 === 0) {
    var snakes = createSprite(400,500,40,10);
 
 snakes.addImage(snake1);
 snakes.scale= 0.4;
    
    snakes.velocityX = -10;
    snakes.lifetime = 134;
   spawnsnake.add(snakes);
  }}

