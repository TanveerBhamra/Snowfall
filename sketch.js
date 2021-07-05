const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow = [];

function preload() {
  bgImg = loadImage("snow.png");
}


function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  for (var j = 0; j <= 500; j = j + 8) {
    snow.push(new Snow(random(100, 700), 10));
  }
}

function draw() {
  Engine.update(engine);
  background(255, 255, 255);
  imageMode(CENTER);
  image(bgImg, 400, 200, 800, 400);

  for(var h = 0; h <= 10; h++){
    snow[h].display();
  }
}