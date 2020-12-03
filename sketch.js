var car, wall
var weight, speed
var deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  speed = random(55,90)
  weight = random(400,1500)
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = (80,80,80)
  car.velocityX = speed
  deformation = (weight * speed * speed)/45000
}

function draw() {
  background(255,275,250);  

  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
  car.velocityX = 0
  }
  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
  if(deformation < 100){
   car.shapeColor = "green"
  }
  if(deformation > 100 && deformation < 180){
   car.shapeColor = "yellow"
  }
  if(deformation > 180){
   car.shapeColor = "red"
  }
}
  drawSprites();
}