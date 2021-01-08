
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	b1 = new Bob(width/2-240,310,60,"orange");
	b2 = new Bob(width/2-120,310,60,"orange");
	b3 = new Bob(width/2,310,60,"orange");
	b4 = new Bob(width/2+120,310,60,"orange");
	b5 = new Bob(width/2+240,310,60,"orange");
	
	
	var options={
		isStatic: true,
	}

	ground=Bodies.rectangle(width/2,75,700,75,options);
    World.add(world,ground);

	r1 = new Rope(b1.body,ground,-240, 00, ); 
	r2 = new Rope(b2.body,ground,-120 , 00 ); 
	r3 = new Rope(b3.body,ground,0 ,00 ); 
	r4 = new Rope(b4.body,ground,+120 ,00 ); 
	r5 = new Rope(b5.body,ground,+240 ,00 ); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  push();
  fill("brown");
  rectMode(CENTER),
  rect(width/2,75,700,75);
  pop();
  drawSprites();
 
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

   
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
}


function mouseDragged(){
	   Matter.Body.setPosition(b1.body,{x:mouseX ,y:mouseY});		
}
 
