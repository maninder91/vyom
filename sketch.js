const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var dustbingreen;
function preload()
{
   dustbingreen=loadImage("dustbingreen.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,60);
    paper1 = new paper ();

      dustbin1 = new dustbin (1009,390,200,40 );
      dustbin2= new dustbin (900,360,20,100 )
      dustbin3 = new dustbin (1100,360,20,100);


    

    

   

    Engine.run(engine);
}

function draw(){
    background("lightgreen");

   //ground.display();
    
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    
    paper1.display()
    
   image(dustbingreen,880,200,250,200);

    
     

}
function keyPressed() {
  if (keyCode === UP_ARROW) 
  
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-80});
  }
}