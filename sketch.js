
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score=0;
var SurvivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  
  if(keyDown("space")&& monkey.y >= 100) {
   monkey.velocityY = -12;}
   monkey.velocityY = monkey.velocityY + 0.8
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX =-4;
  ground.x = ground.width/2;
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
  
  
}


function draw() {

  background(255);
  
  stroke("black");
  textSize(17);
  fill("black");
  text("score: "+ score,520,50);

  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
   monkey.velocityY = -12;
  }
  
   monkey.velocityY = monkey.velocityY + 0.8;
  
   monkey.collide(ground);
  
  SpawnObstacles();
  Food();
  
  if (obstaclesGroup.isTouching(monkey)){
     ground.velocityX = 0;
     monkey.velocityY = 0;
     obstaclesGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
     obstaclesGroup.setLifetimeEach(-1);
     FoodGroup.setLifetimeEach(-1);
  }
  stroke("black");
  textSize("17");
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,30);
  
  
  drawSprites();
}


function SpawnObstacles(){
  if(frameCount % 300===0){
    obstacle = createSprite(800,320,10,200);
    obstacle.velocityX = -6;
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    
    obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle);
  }
   
  
  
}

function Food(){
  if(frameCount % 80===0){
  banana = createSprite(600,250,40,10);
  banana.y = random(120,200);
  banana.velocityX = -5;
  
  
  banana.lifetmite = 300;
  monkey.depth = banana.depth + 1;
    
  banana.addImage(bananaImage);
  banana.scale = 0.05;
    
  FoodGroup.add(banana);
  
  
  
  }
  
}

