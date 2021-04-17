
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var child,child1,tree,tree1;
var ground,mango1;
var stone;
function preload()
{
	child1=loadImage("images/boy.png");
	tree1=loadImage("images/tree.png");
}

function setup() {
	createCanvas(1200,700);
	engine = Engine.create();
	world = engine.world;
	mango1=new mango(670,370);
	ground=new Ground(600,670,1200,100);
	mango2=new mango(690,370);
	stone=new Stone(170,570);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
child=createSprite(180,550,100,100);
child.addImage(child1);
child.scale=0.15;

tree=createSprite(900,400,500,500);
tree.addImage(tree1);
tree.scale=0.4;
tree.depth=mango1.depth;
tree.depth=tree.depth-1;
ground.display();
mango1.display();
mango2.display();
stone.display();
 drawSprites();
 
}



