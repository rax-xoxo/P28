const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

const Render = Matter.Render;

const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;

var mango1,mango2,mango3,mango4,mango5,
mango6,mango7,mango8,mango9,mango10,
mango11,mango12;

var world,boy;

var launchingForce=90;

function preload(){
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new Stone(235,420,30); 

	mango1=new Mango(1065,176,50);
  mango2=new Mango(1170,130,50);
	mango3=new Mango(1010,160,50);
	mango4=new Mango(1000,70,50);
  mango5=new Mango(1100,70,50);
  
	mango6=new Mango(1000,230,50);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,220,40);
	mango9=new Mango(1100,230,40);
  mango10=new Mango(1200,200,40);
  
	mango11=new Mango(1076,130,40);
	mango12=new Mango(950,160,40);

  treeObj=new Tree(1050,600);
  
  groundObject=new Ground(width/2,600,width,20);
  
  launcherObject=new Launcher(stoneObj.body,{x:235,y:450});
	
  Engine.run(engine);

}

function draw() {

  background(mouseX,128,mouseY);

  fill("black");
  textSize(30);
  text("Press Space to play another chance...",50 ,50);

  textSize(50);
  text("YUMMY!!!", 50,100);

  image(boy,200,375,200,300);

  treeObj.display();

  stoneObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  mango11.display();
  mango12.display();

  stoneObj.display();

  groundObject.display();

  launcherObject.display();

  detectollision(stoneObj,mango1);

  detectollision(stoneObj,mango2);

  detectollision(stoneObj,mango3);

  detectollision(stoneObj,mango4);

  detectollision(stoneObj,mango5);

  detectollision(stoneObj,mango6);

  detectollision(stoneObj,mango7);

  detectollision(stoneObj,mango8);

  detectollision(stoneObj,mango9);

  detectollision(stoneObj,mango10);

  detectollision(stoneObj,mango11);

  detectollision(stoneObj,mango12);

  console.log(mouseY,mouseX);

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}); 
	  launcherObject.attach(stoneObj.body);
	}}

  function detectollision(stone,mango){
    mangoBodyPosition=mango.body.position;
    stoneBodyPosition=stone.body.position;
  
   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  	if(distance<=mango.r+stone.r){
      Matter.Body.setStatic(mango.body,false);
      
    }
  }
  