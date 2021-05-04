class Iron {
    constructor(x,y) {
      var option = {
             'restitution':0.5,
             'friction':1.0,
             'density':2
      }
      this.body = Bodies.rectangle(x,y,100,150,option);
      this.width = 100;
      this.height = 150;
  
      World.add(world, this.body);
  }
  display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("brown");
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
  }
  }