class Chain{
          constructor(bodyA, bodyB){
                    this.image = loadImage("images/coach.png")
            var options ={
            bodyA: bodyA,
            pointB: bodyB,
          }
            
       
          this.sling = Constraint.create(options);
          World.add(world, this.sling);
          }
          show()
          {
              imageMode(CENTER);
              image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
          }
        
        
        }