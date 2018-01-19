var stk = 3;

function setup()
{
  var myCanvas = createCanvas(794, 244);
  myCanvas.parent('mySketch');
  smooth();
  stroke(0);
}

function draw()
{
    if(mouseIsPressed)
    {
      strokeWeight(stk);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function keyPressed()
{
  if(keyCode == 8)
  {
    clear();
  }

  if(keyCode == 49)
  {
    stk = 1;
  }

  if(keyCode == 50)
  {
    stk = 3;
  }

  if(keyCode == 51)
  {
    stk = 6;
  }
}
