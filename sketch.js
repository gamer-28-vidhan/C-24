const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3, box4;
var pig, pig2;
var log, log2;
var bird;


log = new Log(810,260,300,PI)
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    
   box1 = new BOX (700,320,70,70)
   box2 = new BOX (920,320,70,70)
   box3 = new BOX (700,240,70,70)
   box4 = new BOX (920,240,70,70)

   bird = new Bird(200,200)

   

   pig = new Pig(810,350)
   pig2 = new Pig(810,220)

   log = new Log(810,260,300,PI)
   log2 = new Log(810,180,300,PI)


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig.display();
    pig2.display();
    log2.display();
    bird.display();
log.display();
}