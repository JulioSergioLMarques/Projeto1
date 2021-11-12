var bola;


function setup() {
  createCanvas(400,400);
  bola = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    bola.x = bola.x+5;
    background("red");
  }
  if (keyIsDown(LEFT_ARROW)){
    bola.x = bola.x-5;
    background("blue");
  }
  if (keyIsDown(UP_ARROW)){
    bola.y = bola.y-5;
    background("pink");
  }
  if (keyIsDown(DOWN_ARROW)){
    bola.y = bola.y+5;
    background("green");
  }

  drawSprites();
}
