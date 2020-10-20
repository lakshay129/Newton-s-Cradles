
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var b1,ground1,b2,b3,b4,b5,sling,sling1,sling2,sling3,sling4;


function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;


	ground1=new ground(280,100,350,20)
	b1=new bob(170,400,50)
	b2=new bob(220,400,50)
	b3=new bob(270,400,50)
	b4=new bob(320,400,50)
	b5=new bob(370,400,50)


	sling=new rope(b1.body,{x:170,y:110})
	sling1=new rope1(b2.body,{x:220,y:110})
	sling2=new rope2(b3.body,{x:270,y:110})
	sling3=new rope3(b4.body,{x:320,y:110})
	sling4=new rope4(b5.body,{x:370,y:110})

  
	Engine.run(engine);
  
}


function draw() {
 
  background("blue");
  Engine.update(engine);

 
  ground1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  

  sling.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();

  drawSprites();
 
}


function keyPressed(){
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-150,y:100})
		
		
	}
}

