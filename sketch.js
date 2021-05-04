
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var hammer ;
var ground ;
var iron;
var rubber;
var sand1,sand2,sand3,sand4;
var stone;



function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  hammer = new Hammer(10,100);
	ground = new Ground(600,height,1200,20);
  iron = new Iron(300,350);
  sand1 = new Sand(505,450,10);
  sand2 = new Sand(510,450,10);
  sand3 = new Sand(515,450,10);
  sand4 = new Sand(520,450,10);
  rubber = new Rubber(900,450,25);
  stone = new Stone(700,320,100,100);


	
  
}


function draw() {

  background("lightBlue");
  Engine.update(engine);
  hammer.display();
  ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();
  rubber.display();
  stone.display();
   

}



