var ctr = 0;

function setup()
{
  var myCanvas = createCanvas(794, 244);
  myCanvas.parent('mySketch');
  smooth();
}

function draw()
{
    strokeWeight(mouseX/100);
    if(ctr == 0) {
      fill(0);
      strokeWeight(0);
      textSize(14);
    }

    if (mouseIsPressed)  {
      clear();
    }

    fill(255);
    textSize(40);

    line(mouseX, mouseY, pmouseX, pmouseY);
    ctr++;
}
