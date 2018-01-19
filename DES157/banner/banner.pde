int ctr = 0;

void setup()
{
  size(800, 250);
  smooth();
  background(255);
  strokeWeight(15);
}

void draw()
{
    if(ctr == 0) {
      fill(0);
      textSize(14);
      text("Scribble to reveal hidden message below!", 260, 40); 
      text("Press for added surprise.", 310, 210);
    }
    
    if (mousePressed)  {
      colorMode(HSB);
      stroke(255 - mouseX/10, 255 - mouseX/30, 255 - mouseX/50);
    }
    else 
    {
      colorMode(RGB);
      stroke(0); 
    }
    
    fill(255);
    textSize(40);
    text("Hello there! Have a nice day!", 115, 140); 
    
    line(mouseX, mouseY, pmouseX, pmouseY);
    ctr++;
}