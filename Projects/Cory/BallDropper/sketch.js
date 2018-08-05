
let balls = [];

function setup()
{
  createCanvas(1000,1000);
  background(52);
  frameRate(60);
}

function draw()
{
  background(52);
  for(let i = 0; i < balls.length; i++)
  {

    balls[i].show();
    balls[i].step();
  }

}

function mousePressed()
{

  balls.push(new Ball(mouseX,mouseY,16));

}

class Ball
{
  constructor(x,y,r)
  {
    this.x = x;
    this.y = y;
    this.r = r;
    //this.c = c;
    this.vY = 5;
    this.vX = random(.1,1);
    this._x = x;
    this._y = y;
  }

  show()
  {

    ellipse(this.x,this.y,this.r,this.r);
    ellipse(this._x,this._y,this.r,this.r);

  }

  step()
  {
    this.y = this.y + this.vY;
    this.vY = this.vY + 1;
    this.x = this.x + this.vX;
    if(this.y >= 1000)
    {
      this.vY = this.vY * -1;
      this.vY = this.vY + 1;
    }
    if(this.x >= 1000 || this.x <= 0)
    {
      this.vX = this.vX * -1;

    }
    if(this.y > 1000)
    {
      this.y = 1000;
    }

  }

}
