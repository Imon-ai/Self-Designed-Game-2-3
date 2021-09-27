class Character{
    constructor(x, y, width, height,options) {
        var options = {
            'restitution':0.8,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);  
        
      }

      runningLeft(){
        Matter.Body.applyForce(this.body,this.body.position,{x:-1,y:0});
      }

      runningRight(){
        Matter.Body.applyForce(this.body,this.body.position,{x:1,y:0});
      }

      jumping(){
        Matter.Body.applyForce(this.body,this.body.position,{y:2});
      }
}