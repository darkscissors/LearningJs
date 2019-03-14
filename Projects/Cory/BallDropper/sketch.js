
let balls = [];
let mouseHeld = false;
let startX, startY;
function setup()
{
  createCanvas(1000,1000);
  background(52);
  frameRate(60);
}

function draw()
{
  background(52);
  fill(255);
  textSize(30);
  text('Press space to clear all balls\nClick and drag to shoot a ball in a given dirrection\nMore distance dragged = more speed',15,30);

  for(let i = 0; i < balls.length; i++)
  {

    balls[i].show();
    balls[i].step();
  }
  if(mouseHeld)
  line(startX,startY,mouseX,mouseY);

}

function keyPressed()
{

  if(key == ' ')
    balls = [];

}

function mousePressed()
{


mouseHeld = true;
startX = mouseX;
startY = mouseY;

}

function mouseReleased()
{
  let div = 10;
  let vX_ = ((startX - mouseX) / div)*-1;
  let vY_ = ((startY - mouseY) / div)*-1;
spawnBall(startX,startY,vX_,vY_);

mouseHeld = false;

}

function spawnBall(x,y,vX,vY)
{

  balls.push(new Ball(x,y,16,vX,vY));

}

class Ball
{
  constructor(x,y,r,vX,vY)
  {
    this.x = x;
    this.y = y;
    this.r = r;
    // this.vY = random(-10,10);
    // this.vX = random(-10,10);
    this.vX = vX;
    this.vY = vY;
    this._x = x;
    this._y = y;
    this.color = color(random(0,255),random(0,255),random(0,255));
  }

  show()
  {
    fill(this.color);
    ellipse(this.x,this.y,this.r,this.r);
    //ellipse(this._x,this._y,this.r,this.r);

  }

  step()
  {
    this.y = this.y + this.vY;
    this.vY = this.vY + 1;
    this.x = this.x + this.vX;
    if(this.y >= 1000 - 10)
    {
      this.vY = this.vY * -1;
      this.vY = this.vY + 1;

    }
    if(this.x >= 1000 - 8 || this.x <= 0 + 8)
    {
      this.vX = this.vX * -1;
      this.color = color(random(0,255),random(0,255),random(0,255));

    }
    if(this.y > 1000)
    {
      this.y = 1000;
    }


  }


}
