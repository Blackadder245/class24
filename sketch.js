const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var land;
var box2;
var pig1;
var pig2;
var log1;
var log2;
var box3;
var box4;
var bird;
var roof;
var log3;
var log4;


function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,100,100);
    box2=new Box(900,300,100,100)
    pig1=new Pig(800,300,80,80)
    log1=new Log(800,280,300,PI)
    box3 = new Box(700,250,100,100);
    box4=new Box(900,250,100,100)
    pig2=new Pig(800,250,80,80)
    log2=new Log(800,200,300,PI)
    bird=new Bird(700,250,50,50)
    roof=new Box(800,150,100,100)
    log3=new Log(750,100,170,-45)
    log4=new Log(860,100,170,45)
    
    land=new ground ()
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    land.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    bird.display();
    roof.display();
    log3.display();
    log4.display();
    
   
}