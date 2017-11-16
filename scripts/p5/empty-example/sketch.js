
var winner;
function setup() {
  createCanvas(screen.width, screen.height);
  background(200);
  //noLoop();
  // Set colors
  fill(217, 179, 140);
  stroke(0);
  winner = false;

z = new Balls(/*random(screen.width)*/ 0, screen.height/3-screen.height/6, random(screen.width/3), random(screen.height/3));
  y = new Balls(/*random(screen.width)*/ 0, 2*screen.height/3-screen.height/6, random(screen.width/3), random(screen.height/3));
    x = new Balls(/*random(screen.width)*/ 0, 3*screen.height/3-screen.height/6, random(screen.width/3), random(screen.height/3));

    lane1 = new Lane(screen.height/3, 10);
    lane2 = new Lane(2*screen.height/3, 10);
    lane3 = new Lane(3*screen.height/3, 10);
    console.log("tried");
}

function draw() {
  if(winner === false){
  //z = new Balls(random(screen.width), random(screen.height), random(screen.width/3), random(screen.height/3));
  //  y = new Balls(random(screen.width), random(screen.height), random(screen.width/3), random(screen.height/3));
  //    x = new Balls(random(screen.width), random(screen.height), random(screen.width/3), random(screen.height/3));
  //x = new Balls(random(screen.width), random(screen.height), random(screen.width/3), random(screen.height/3));
  background(50, 89, 100);
lane1.show();
lane2.show();
lane3.show();
  //x = new Balls(random(screen.width), random(screen.height), random(screen.width/3), random(screen.height/3));
  //var disp = x.display(random(screen.width), random(screen.height), random(screen.width/3), random(screen.height/3));

  //for(var i = 1; i < 100; i++){
    //x.display(random(screen.width/3), random(screen.height/3), random(screen.width/3), random(screen.height/3));
    /*x = new Balls(random(screen.width), random(screen.height), random(screen.width/3), random(screen.height/3));
    console.log("tried");
    //for(var v = 0; v<10; v++){
    */
    //for(var i = 0; i < 1000; i++){
      //background(50, 89, 100); screen.width){
    x.move(random(16));
    x.display();
    if(x.x == screen.width){
      winnerFound(x);
    }
    y.move(random(16));
    y.display();
    if(y.x == screen.width){
      winnerFound(y);
    }
    z.move(random(16));
    z.display();
    if(z.x == screen.width){
      winnerFound(z);
    }
  /*}
  else{
    x.move(-1);
    x.display();
  y.move(-1);
  y.display();
  z.move(-1);
  z.display();
}*/

  //}
    //wait(1000);
  //}



  //}
}
else {

}



}

function Balls(xPos, Ypos, w, h){
  this.x = xPos;
  this.y = Ypos;
  this.Height = h;
  this.Width = w;
  this.speed = random(3);

  this.move = function(speed){
    this.x += speed;

  }

  this.display = function(){
    fill(217, 179, 140);

    //console.log(this.Height);
    //console.log("called");
    strokeWeight(10);
    stroke(1);
    rect(this.x-w/4, this.y, this.Width/2, this.Height-this.Width/4);
    ellipse(this.x-w/4, this.y, this.Width/2, this.Width/2);
    ellipse(this.x+w/4, this.y, this.Width/2, this.Width/2);
    fill(255, 51, 153);
    ellipse(this.x, this.y+this.Height-this.Width/4, this.Width/2, this.Height/2);


  }
};

function Lane(dist, yval){
  this.xStart = 0;
  this.xFinish = screen.width;
  this.y = yval;

  this.distance = dist;

  this.show = function(){
    //ellipse(50, 50, 50,50);
    stroke(255);
    strokeWeight(10)
    fill(255);
    line(this.xStart, this.y, this.xFinish, this.y);
    line(this.xStart, this.y+this.distance, this.xFinish, this.y+this.distance);

  };
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function winnerFound(win){
  alert(win);
  winner = true;
}
