class slingShot
{
	constructor(body,anchor)
	{
		var options={
			pointB:anchor,
			stiffness:0.004,
			length:1
		}	
		
		this.bodyA=body;
		this.pointB=pointB;
		this.sling=Constraint.create(options)
		World.add(world, this.sling);



	}
	
	fly()
	{
		this.sling.bodyA=null;
	}
	
	attach(body){
		this.sling.bodyA=body;
	}

	
	display()
	{
		if (this.sling.bodyA) {
			var pointA=this.bodyA.position;
			var pointB=this.pointB;
			strokeWeight(4);
            stroke("red");
			line(pointA.x,pointA.y,pointB.x,pointB.y)
		}		
			
	}

}