class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
      this.image = loadImage("block.png");
      this.Visiblity = 255;
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);

     
      if(this.body.speed<3){
        World.add(world,this.body);
      }

      else{
        push();
        World.remove(world,this,body);
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image,this.position.x,this.position.y,40,40);
        pop();
      }
     
    }
}