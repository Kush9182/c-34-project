class Bob{
    constructor(x,y,r,c){
      var option={
        density:0.1
      }
      this.body=Bodies.circle(x,y,r,option);
      this.radius=r;  
      this.c=c
      World.add(world,this.body);
    }
    display(r){

      push();
      fill(this.c);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
      pop()
    }
}