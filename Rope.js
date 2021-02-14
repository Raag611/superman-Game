class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.7,
            length: 200,
            damping : 0.05
        }
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
    
    
    

    display(){
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            strokeWeight(10);
            stroke(48,22,8);
           
                line(pointA.x , pointA.y, pointB.x , pointB.y);
                
           
           
            
            pop();
        }
    }
    
}