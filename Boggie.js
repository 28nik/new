class Boggie{
          constructor(x,y,width,height){
                    this.image = loadImage("images/coach.png")
            var options ={ isStatic: false}
            
            this.body =  Bodies.rectangle(x,y,width,height,options);
            World.add(myWorld,this.body);
            this.width = width;
            this.height = height;
          }
          show()
          {
              imageMode(CENTER);
              image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
          }
        
        
        }