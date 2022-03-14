
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world

var block
var circle
var block2
var ground

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);
	engine = Engine.create();
	world = engine.world;

   var block_options = {
	   frictionAir : 0.25,
	   restitution : 0.80
   }
   var circle_options = {
	   restitution : 0.90,
       frictionAir : 0.01 
	}   
   var block2_options = {
	   restitution : 0.40
   }
   var ground_options = {
     isStatic : true
   }

   //Crie os Corpos Aqui.
  block = Bodies.rectangle(110,210,30,30,block_options);
  World.add(world,block);

  circle = Bodies.circle(110,210,30,circle_options);
  World.add(world,circle);
  
  block2 = Bodies.rectangle(340,100,20,70,block2_options);
  World.add(world,block2);

  ground = Bodies.rectangle(250,500,500,40,ground_options);
  World.add(world,ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
	
  Engine.run(engine);
  
}


function draw() {
  
  Engine.update(engine)
  background("blue");
  
  ellipse(circle.position.x,circle.position.y,20);
  rect(block.position.x,block.position.y,30,50);
  rect(block2.position.x,block2.position.y,20,70);
  rect(ground.position.x,ground.position.y,500,40);
 
  
  
  drawSprites();
 
}



