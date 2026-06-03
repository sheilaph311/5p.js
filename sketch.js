var sunHeight;
var moonHeight;
var starHeight;
var horizon = 200;
var r=50, g=0, b=0;
let posx=-100;
let posxvaca=0;
let img;

function preload() {
  img = loadImage("vaca.png");
}

function setup() {
   createCanvas(400, 400);
   mouseY=400;
   mouseX=400;}

function draw() {
  background(r, g, b);
  sunHeight = mouseY;
  moonHeight = mouseX;
  starHeight = mouseX;
  
  if (sunHeight < horizon+50) {
      b=255-mouseY*255/400;
      r=150-mouseY*150/400+50;
      g=200-mouseY*200/400;}
  
  
  else{r=g=b=0; }
  fill("yellow"); // sol
  circle(200,sunHeight,100);
  
        fill("rgb(177,177,163)"); //brillo luna
  circle(200,starHeight,220,);
  
    fill("rgb(252,252,248)"); //luna
  circle(200,moonHeight,100);
  
  fill("green"); //suelo
  rect(0, horizon, 400, 200);
  
  
fill('rgb(48,46,46)'); 
   circle(posx, 120, 100, 20); 
   posx+=-1;
  
  fill('rgb(172,164,164)'); 
   circle(posx, 121, 70, 20); 
   posx+=1;


fill('rgb(80,177,79)'); 
   ellipse(posx, 140, 150, 50); 
   posx+=1;
  
   image(img, posxvaca, 200, 250, 200,);
  
}
