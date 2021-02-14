const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImage
var enemy
var superman,block1,block2,block3,block4,block5,block6,block7,block8,block9,rope,floor
function preload() {
  backgroundImage=loadImage("sky image.jpg")
}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;
enemy = new Monster (700,400,200)
 superman = new Superman(0,50,200)
 block1= new Block(300,200,50,50)
 block2= new Block (300,250,90,90)
 block3= new Block (300,400,60,90)
 block4= new Block (400,100,60,100)
 block5= new Block (400,40,60,90)
 block6= new Block (500,410,60,130)
 block7= new Block (500,400,60,110)
 block8= new Block (500,200,60,90)
 block9= new Block (600,200,60,80)
 
 


floor = new Ground(290,470,990,15)
 rope = new Rope(superman.body,{x:190, y:5});
}

function draw() {
background(backgroundImage);
Engine.update(engine)
enemy.display()
superman.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()

rope.display()
floor.display()

}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(superman.body, {x: mouseX , y: mouseY});
  //}
}