const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var circle;
var ground;
var dustbin;



function setup() {
	createCanvas(1600, 600);

	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic:true
	}

	groundSprite = Bodies.rectangle(width/2, height-35, width, 10, ground_options);
	World.add(world,groundSprite)

	boxSprite = createSprite(1150, 500, 20, 80);
	boxSprite.shapeColor = ("red");

	box2Sprite = createSprite(1200, 550, 100, 20);
	box2Sprite.shapeColor = ("red");

	box3Sprite = createSprite(1250, 500, 20, 80);
	box3Sprite.shapeColor = ("red");
	
	var options = {
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
	circle = Bodies.circle(200,100,20,options);
	World.add(world,circle);

  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  fill("yellow");
  rect(groundSprite.position.x,groundSprite.position.y,width,10);
	ellipseMode(RADIUS);
	fill(255);
	ellipse(circle.position.x,circle.position.y,20,20 );
	console.log(World.mouseX, World.mouseY);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(circle,circle.position,{x:85,y:-85})
	}
}


