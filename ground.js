class ground{
constructor(){
this.body=Matter.Bodies.rectangle(500,580,1000,20,{isStatic:true})
Matter.World.add(world,this.body)
}
display(){
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,1000,20)
}

}