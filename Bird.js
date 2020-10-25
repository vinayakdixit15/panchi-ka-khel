//child
//to make child used keyword called extends Basename
class Bird extends BaseClass{
  constructor(x,y){
    //super - used to overwrite what is there in parent class
    super(x,y,50,50);
    //load image
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}

