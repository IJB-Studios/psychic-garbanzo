
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var show = true;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 690, 800, 20)
	paperPiece = new Paper(200, 540, 55, 45)
	binThing = new Bin(600, 605, 150, 200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  ground.display();
  if (show) {
  paperPiece.display();
  }
  binThing.display();
  drawSprites();
  decideToShow()
	console.log(paperPiece.body.position.x) 
  console.log(paperPiece.body.position.y)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paperPiece.body,paperPiece.body.position,{x:50,y:-50})
	}
}

function decideToShow() {
	if (Math.round(paperPiece.body.position.y)<483 && Math.round(paperPiece.body.position.y) > 476 && (paperPiece.body.position.x>540 && paperPiece.body.position.x<660)) {
		show = false;
	}
}

