
function setup(){
createCanvas(1000,1000);

}

function draw(){
background(random(220,255));
noStroke();
fill(random(255),random(255),random(255),random(255));
rect(0,0,300,300);
fill(random(255),random(255),random(255),random(255));
rect(0,700,300,300);
fill(random(255),random(255),random(255),random(255));
rect(300,800,700,300);
fill(random(255),random(255),random(255),random(255));
rect(720,600,300,400);

stroke(0);
strokeWeight(30);
line(100,300,100,1000);
strokeWeight(20);
line(0,700,290,700);
strokeWeight(15);
line(300,0,300,1000);
strokeWeight(20);
line(310,220,1000,220);
strokeWeight(10);
line(300,600,1000,600);
strokeWeight(20);
line(720,0,720,1000);
strokeWeight(30);
line(0,310,290,310);
strokeWeight(30);
line(310,800,1000,800);


noStroke();
fill(255);
triangle(0,0,0,500,500,0);
triangle(1000,500,1000,1000,500,1000);
triangle(500,0,1000,500,1000,0);
triangle(0,500,0,1000,500,1000);

}
