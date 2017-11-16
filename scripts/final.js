var drops = [];
var xPosistions = [];
// "drops" AND "drop" are different
//as "drops" is an array storing multiple "drop"s | "drop" is a class
function setup(){
  createCanvas(screen.width, screen.height);
  for(let i = 0; i < width; i+=Math.floor(random(100))){
    xPosistions.push(i);
  }
for(let i = 0; i < 75; i++){
    let d = new drop(xPosistions[Math.floor(random(xPosistions.length))]);
    drops.push(d);
  }
}

function draw(){
  background("#1a1c1a");
  for(let i = drops.length -1; i >= 0; i--){
    drops[i].update();
    drops[i].show();
  }
}

class drop{
  constructor(x){
    this.x = x;
    this.y = random(10);
    this.vy = random(1, 6);
    this.Height = Math.floor(random(100));
    this.Width = this.Height/random(1, 2);
    this.alpha = 255;
  }
  update(){
    this.y += this.vy;
    if(this.y > height){
      this.y = -100;
      this.alpha = random(200, 255);
      this.vy = random(1, 6);
      this.Height = Math.floor(random(100));
      this.Width = this.Height/random(1, 2);
    }
  }
  show(){
    beginShape();
    beginShape();
    fill(72, 173, 45, this.alpha);
    rect(this.x-this.Width/4, this.y, this.Width/2, this.Height-this.Width/4);
    rect(this.x-this.Height/4, this.y, this.Width/2, this.Width/2);
    rect(this.x+this.Width/4, this.y, this.Width/2, this.Width/2);
    fill(50, 124, 29,this.alpha);
    rect(this.x- this.Width/4, this.y+this.Height-this.Width/4, this.Width/2, this.Height/2);
    endShape(CLOSE);
  }
}
