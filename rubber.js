class Rubber {
    constructor(x,y,r) {
      var option = {
             'restitution':0.5,
             'friction':1.0,
             'density':2
      }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,option);
  
      World.add(world, this.body);
  }
  display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("dark blue");
      ellipse(0,0,this.r,this.r);
      pop();
  }
  }