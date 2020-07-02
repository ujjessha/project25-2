class Dustbin{
    constructor(x,y,width,height){
        this.dustbinWidth=200;
        this.dustbinHeight=200;
	this.wallThickness=20;
        this.angle=0;	
		
      

    this.bottomBody=Bodies.rectangle(x, y, this.dustbinWidth, this.wallThickness, {isStatic:true})
    this.leftWallBody=Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
   Matter.Body.setAngle(this.leftWallBody, this.angle);
    
    this.image=loadImage("dustbingreen.png")

   this.rightWallBody=Bodies.rectangle(x+this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
   Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
   World.add(world, this.bottomBody)
   World.add(world, this.leftWallBody)
   World.add(world, this.rightWallBody);
   }

 display(){ 
	 
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position;

    


  push()
  translate(posBottom.x, posBottom.y-180);
  rectMode(CENTER)
  angleMode(RADIANS)
  fill(255)
  imageMode(CENTER);
  image(this.image, 0,this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
  pop()
  }
}
