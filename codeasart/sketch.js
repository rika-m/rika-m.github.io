function setup() {
  createCanvas(600, 600);
}

function draw() {  
//background 
  background (147,169,178)
  
//colors
  skin = color(234, 199, 173);
  roots = color(73, 62, 55);
  hair = color(144,144,144);
  brow = color (102,88,82);
  shadow = color (198,168,149);
  lip = color(178,103,100);
  
//hair (back)
  fill (hair)
  noStroke ()
  beginShape ();
  vertex (160,250)
  vertex (160,320)
  vertex (165,360)
  vertex (170,395)
  vertex (180,460)
  vertex (180,500)
  vertex (182.5,550)
  vertex (185,530)
  vertex (196.5,521)
  vertex (195,545)
  vertex (205.5,581)
  vertex (205,550)
  vertex (215,520)
  vertex (222,506.5)
  vertex (225,520)  
  vertex (217.5,550)
  vertex (230,540)  
  vertex (240,480)
  vertex (360,480)  
  vertex (375,500)
  vertex (380,520)  
  vertex (382,554.5)
  vertex (390,540)  
  vertex (395,525)
  vertex (390,500)  
  vertex (400,510)
  vertex (425,541)  
  vertex (420,500)
  vertex (420,450)  
  vertex (430,310)
endShape (close);
  
  //neck
  fill(skin)
  noStroke()
  beginShape ();
  vertex (60,600)
  vertex (60,570)
  vertex (70,540)
  vertex (90,530)
  vertex (150,510)
  vertex (180,500)
  vertex (182.5,550)
  vertex (185,530)
  vertex (196.5,521)
  vertex (195,545)
  vertex (205.5,581)
  vertex (205,550)
  vertex (215,520)
  vertex (222,506.5)
  vertex (225,520)  
  vertex (217.5,550)
  vertex (230,540)  
  vertex (240,480)
  vertex (245,460)
  vertex (246,445)
  vertex (245,430)
  vertex (235,400)
  vertex (225,375)
  vertex (385,375)
  vertex (375,400)
  vertex (365,430)
  vertex (360,450)
  vertex (360,480)
  vertex (360,480)  
  vertex (375,500)
  vertex (380,520)  
  vertex (382,554.5)
  vertex (390,540)  
  vertex (395,525)
  vertex (390,500)  
  vertex (400,510)
  vertex (425,541)
  vertex (420,500)
  vertex (450,510)
  vertex (510,530)
  vertex (530,540)
  vertex (540,570)
  vertex (540,600)

  endShape(close);
  
//face shading
  fill (shadow)
  noStroke()
  beginShape();
  vertex (245,420)
  vertex (235,400)
  vertex (225,375)
  vertex (385,375)
  vertex (375,400)
  vertex (365,430)
  vertex (360,450)
  vertex (360,480)
  endShape(close);
  
  
//face
  fill (skin)
  beginShape ();
  vertex (300,430);
  vertex (240,400);
  vertex (190,330)
  vertex (185,290)
  vertex (190,250)
  vertex (220,190)
  vertex (275,150)
  vertex (300,140)
  vertex (310,140)
  vertex (335,150)
  vertex (390,190)
  vertex (420,250)
  vertex (425,290)
  vertex (420,330)
  vertex (370,400)
  vertex (310,430)  
  endShape (close);
  
//bangs 
  fill(roots)
  noStroke()
   beginShape ();
  vertex (390,160)
  vertex (392.5,150)
  vertex (390,140)
  vertex (370,120)
  vertex (310,105)
  vertex (280,106)
  vertex (210,130)
  vertex (200,140)
  vertex (170,190)
  vertex (160,250)
  vertex (160,320)
  vertex (165,340)
  vertex (170,360)
  vertex (170,330)
  vertex (180,280)
  vertex (190,330)
  vertex (185,420)
  vertex (195,400)
  vertex (205,360)
  vertex (207.5,345)
  vertex (210,270)
  vertex (220,230)
  vertex (240,200)
  vertex (270,175)
  vertex (310,165)
  vertex (330,165)
  vertex (350,170)
  vertex (370,180)
  vertex (377.5,188.5)
  vertex (386,173)
  vertex (380,192.5)
  vertex (385,210)
  vertex (400,260)
  vertex (405,290)
  vertex (410,350)
  vertex (405,430)
  vertex (415,400)
  vertex (430,310)
  vertex (431.5,270)
  vertex (430,220)
  vertex (420,180)
  vertex (410,165)
  vertex (400,159)
  vertex (390,160)  
  endShape (close);

//eyebrows
  fill(brow)
  noStroke()
  beginShape ();
  vertex (324,260.5)
  vertex (328,248)
  vertex (380,235)
  vertex (390,235)
  vertex (424,248.5)
  vertex (390,242.5)
  vertex (380,245)
  endShape (close);
  
  beginShape ();
  vertex (286,260.5)
  vertex (282,248)
  vertex (230,235)
  vertex (220,235)
  vertex (186,248.5)
  vertex (220,242.5)
  vertex (230,245)
  endShape (close);
  
//mouth
  fill (lip)
  noStroke()
  beginShape();
  vertex (270.5,372)
  vertex (280,370)
  vertex (290,365)
  vertex (300,362.5)
  vertex (305,367.5)
  vertex (310,362.5)
  vertex (320,365)
  vertex (330,370)
  vertex (339.5,372)
  vertex (330,380)
  vertex (320,385)
  vertex (310,389)
  vertex (300,389)
  vertex (290,385)
  vertex (280,380)
  
  endShape(close);
}