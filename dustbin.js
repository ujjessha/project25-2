class Dustbin{
    constructor(x,y,width,height){
        this.dustbinWidth=200;
		this.dustbinHeight=100;
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
    translate(posLeft.x, posLeft.y);
    rectMode(CENTER)
    imageMode(CENTER);
    //strokeWeight(4);
    angleMode(RADIANS)
    fill(255)
    stroke(255)
    image(this.image, 0, 0, this, height, this.weight);
    rotate(this.angle)
    rect(0,0,this.wallThickness, this.dustbinHeight);
    pop()

    push()
    translate(posRight.x, posRight.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    rotate(-1*this.angle)
    rect(0,0,this.wallThickness, this.dustbinHeight);
    pop()

    push()
    translate(posBottom.x, posBottom.y);
    rectMode(CENTER)
    //strokeWeight(4);
    stroke(255)
    angleMode(RADIANS)
    fill(255)
    rect(0,0,this.dustbinWidth, this.wallThickness);
    pop()
  }
}
