function setup() {
createCanvas(600, 600);
}

function draw() {  
  
//colors
  skin = color(230, 185, 165);
  brownblack = color(87, 70, 60);
  hair = color(125);
  clothes = color(180,140,180);
  
//hair
  noStroke();
  fill (hair);
  beginShape();
  vertex(230,200);               
  bezierVertex (230,200,220,230,230,260);
  bezierVertex (230,260,240,290,230,320);
  bezierVertex (230,320,220,350,230,380);
  bezierVertex (240,380,350,400,460,380);
  bezierVertex (470,380,480,350,470,320);
  bezierVertex (470,320,460,290,470,260);
  bezierVertex (470,260,480,230,470,200);
  endShape (close);
  
//body
  fill(clothes);
  ellipse (350,500,150,700);
  
//hair top
  noStroke();
  fill(brownblack);
    beginShape();
  arc (350,210,241,210,-PI,0);
  endShape (close);
  
//face
  fill(skin);
  ellipse(350,250,225,225);
 
//hair bangs
  fill(brownblack);
  noStroke();
   beginShape();
  vertex(); 
  bezierVertex (230,200,220,230,240,280);
  vertex(240,250);
  bezierVertex (240,210,260,200,240,300);
  bezierVertex (300,200,320,280,400,150);
  bezierVertex (320,200,400,200);
  bezierVertex (480,220,450,350,470,200);
  bezierVertex (470,110,300,70,250,160);

  endShape (close);
  
//eyes
  fill(brownblack);
  circle (400,250,20);
  circle (315,250,20);
  
//mouth
  stroke (2);
  strokeWeight(2);
  noFill();
  
  arc(350,290, 60, 30, 0, HALF_PI, OPEN);
    
}
