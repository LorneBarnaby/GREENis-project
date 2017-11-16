
var penises = [];
var peepee;
function setup(){
  createCanvas(screen.width, screen.height);
  for (let i = 0; i < 10; i++){
    penises.push(new penis());
  }
}


function draw(){
  background(0);
  for(let i = penises.length - 1; i >= 0; i--){
    penises[i].show();
  }

}

class penis{
  constructor(){
    this.x = random(screen.width);
    this.y = random(screen.height);
    this.Height = Math.floor(random(100));
    this.Width = this.Height/random(1, 2);
  }

  show(){
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
