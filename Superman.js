class Superman{
    constructor(x,y,r)
    {
        var options = {
        density :1,
        friction:1    
        };
        this.x=x;
        this.y=y
        this.r=r
        this.image = loadImage("superman.png")
        this.body =Bodies.circle(this.x,this.y,(this.r),options)
        World.add(world,this.body)
    }
    display(){
        
	    var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       
        strokeWeight(4);
        stroke("black");
        fill("red");
        image(this.image,0,0,this.r,this.r);
        
        pop();
        
	
			
}}