const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var playButton,playButtonImage;

var form, player, game;

var player1,player2,heros,players;
var player1_img,player2_img;

var formBg,gamePageBg,battleFieldBg;
var fightMusic;
var playerIndicate;
var instruction,instructionImage;
var Hero,idleHeroImg,hittedHeroImg,jumpingHeroImg,swordAttackingHeroImg,
laserAttackingHeroImg,runningHeroImg,walkingHeroImg,killedHeroImg,
killedHeroGif;
var leftIdleHeroImg,leftHittedHeroImg,leftJumpingHeroImg,leftSwordAttackingHeroImg,
leftLaserAttackingHeroImg,leftRunningHeroImg,leftWalkingHeroImg,leftKilledHeroImg,
leftKilledHeroGif;

function preload()
{
   // idleHeroImg=loadAnimation("right/idle-warrior-unscreen.gif");
   // hittedHeroImg=loadAnimation("right/hitted-warrior-unscreen.gif");
   // jumpingHeroImg=loadAnimation("right/jumping-warrior-unscreen (1).gif");
   // walkingHeroImg=loadAnimation("right/walking-warrior-unscreen.gif");
   // runningHeroImg=loadAnimation("right/running-warrior-unscreen.gif");
   // laserAttackingHeroImg=loadAnimation("right/attacking-warrior1-unscreen.gif");
   // swordAttackingHeroImg=loadAnimation("right/attacking-warrior2-unscreen.gif");
   // killedHeroGif=loadAnimation("right/killed warrior unscreen2.gif");
   // killedHeroImg=loadImage("right/killed-warrior-unscreen.gif");

//   leftIdleHeroImg=loadAnimation("left/idle left warrior.gif");
//    leftHittedHeroImg=loadAnimation("left/hitted left warrior.gif");    
//  leftJumpingHeroImg=loadAnimation("left/jumping left warrior.gif");
//    leftWalkingHeroImg=loadAnimation("left/walking warrior left.gif");
//    leftRunningHeroImg=loadAnimation("left/running warrior left.gif");
//    leftLaserAttackingHeroImg=loadAnimation("left/left attacking warrior1.gif");
//    leftSwordAttackingHeroImg=loadAnimation("left/left attacking warrior2.gif");
//    leftKilledHeroGif=loadAnimation("left/left killed warrior.gif");
//    leftKilledHeroImg=loadImage("left/left killed warrior.png");

    formBg=loadImage("backgrounds/game open image.jpg");
    gamePageBg=loadImage("backgrounds/game open image2.jpg");
    playButtonImage= loadImage("button.png");
    instructionImage=loadImage("Picture1.png");
    battleFieldBg=loadImage("backgrounds/treasure battle ground.png")
    
}

function setup(){
  canvas=createCanvas(displayWidth-50,displayHeight-200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  
}


function draw(){
  background(gamePageBg);
 
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();  
  }
  
  drawSprites();
}
