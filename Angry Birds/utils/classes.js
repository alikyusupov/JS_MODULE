class Bird{
	constructor(x, y, r){
		const options = {
	      restitution: 0.5
	    };
		this.body = Matter.Bodies.circle(x, y, r, options);
		Matter.Body.setMass(this.body, this.body.mass * 4)
		Matter.World.add(world, this.body);
		this.r = r;

	}
	show(){
		const pos = this.body.position;
	    const angle = this.body.angle;
	    push();
	    translate(pos.x, pos.y);
	    rotate(angle);
	    imageMode(CENTER);
	    image(js, 0, 0, this.r * 2, this.r * 2);
	    pop();
	}
}

class Box{
	constructor(x, y, w, h, type = null){
		const options = {
	      restitution: 0.5
	    };
		this.body = Matter.Bodies.rectangle(x, y, w, h, type, options);
		Matter.World.add(world, this.body);
		this.w = w;
		this.h = h;
		this.type = type;
	}
	show(){
		const pos = this.body.position;
	    const angle = this.body.angle;
	    push();
	    translate(pos.x, pos.y);
	    imageMode(CENTER);
	    if(this.type === "python")
	    	image(python, 0, 0, this.w, this.h);
	    if (this.type === "php")
	    	image(php, 0, 0, this.w, this.h);
	    pop();
	}
}

class Ground extends Box{
	constructor(x, y, w, h){
		super(x, y, w, h);
		this.body.isStatic = true;
	}
	show(){
		noFill()
	}
}

class Slingshot{
	constructor(x, y, body){
		const options = {
			pointA:{
				x:x,
				y:y
			},
			bodyB:body,
			stiffness:.02,
			length:35
		}
		this.sling = Matter.Constraint.create(options);
		Matter.World.add(world, this.sling);
	}
	show(){
		if(this.sling.bodyB){
			stroke(255);
			strokeWeight(4);
			const posA = this.sling.pointA;
			const posB = this.sling.bodyB.position;
			line(posA.x, posA.y, posB.x, posB.y);
		}
	}
	launch(){
		this.sling.bodyB = null;
	}
	attach(body){
		this.sling.bodyB = body;
	}
}

