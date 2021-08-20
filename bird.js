class Bird{
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0.9,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.body.position.x=mouseX
      this.body.position.y=mouseY
      rectMode(CENTER);
      push()
      fill("red");
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      rect(0, 0, this.width, this.height);
      pop()
    }
  };