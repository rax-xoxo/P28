class Ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.body = Bodies.rectangle(x, y, width, height, options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push();

			translate(groundPos.x, groundPos.y);
			
			rectMode(CENTER)
			
			fill(0,mouseX,mouseY);
			
			rect(0,0,this.width, this.height);
			
			pop();
			
	}

}