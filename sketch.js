const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,bg
var snow = []

function preload(){
  bg = loadImage("snow2.jpg")
}
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create()
  world = engine.world

}

function draw() {
  Engine.update(engine)
  background(bg);
  if(frameCount%30 ==0){
    snow.push(new Snow(Math.round(random(0,800)),90,50))
    
  }
  for(var i = 0;i<snow.length;i++){
    snow[i].display()
  }
  drawSprites();
}