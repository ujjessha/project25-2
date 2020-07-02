var paper1,dustbin1,dustbin2,dustbin3,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	 paper1=new Paper(150,650,70);
	 dustbin1=new Dustbin(1200,650);
	 ground1=new Ground(800,670,1600,10);
	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  dustbin1.display();
  ground1.display();
  
  
  
  drawSprites();
}


function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:300,y:-300});
	}
}
 
