var movrect, fixrect;

function setup() {
  createCanvas(1200,800);

fixrect = createSprite(600,400,50,80);
fixrect.shapeColor = "green";

movrect = createSprite(400,200,80,30);
movrect.shapeColor = "green"; 

fixrect.debug = true;
movrect.debug = true;

}

function draw() {
  background('blue'); 
  
  movrect.x = World.mouseX;
  movrect.y = World.mouseY;

  if(movrect.x - fixrect.x < fixrect.width/2 + movrect.width/2 &&
    fixrect.x - movrect.x < movrect.width/2 + movrect.width/2 && 
    fixrect.y - movrect.y < movrect.height/2 + movrect.height/2 &&
    movrect.y - fixrect.y < fixrect.height/2 + movrect.height/2 ){
    fixrect.shapeColor = "red";
    movrect.shapeColor = "red";
  }
  else{
    fixrect.shapeColor = "green";
    movrect.shapeColor = "green";
  }

  drawSprites();
}