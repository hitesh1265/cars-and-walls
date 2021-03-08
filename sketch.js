var car,wall
var speed,wegiht

function setup() {
  createCanvas(800,400);

  car. createSprite(50,200,50,50);
  wall.createSprite(1200,200,60,100);

  speed=random(55,90);
  wegiht.createSprite(400,1200);

  carvelocityx=speed
  createSprite(400, 200, 50, 50);
}

function draw() {
  baground("Balck");

  if(wall.x=car.x<(car.Width+wall.with)/2){
  car.velocity.x=0;
  var deformation=0.5+wegiht+speed/22509;
  if(deformation>180){
  car.shapecolour="red"
  }
  if(deformation>180 &&deformation>100){
  car.shapecolour="yellow"
  }
  if(deformation<100){
  car.shapecolour="green"
  }
 
}
    background(255,255,255);  
  drawSprites();
}