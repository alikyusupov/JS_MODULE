let ground,
	brick,
	bird,
	engine,
	world,
	mConstraint,
	bricks = [];


function setup(){
	const canvas = createCanvas(600, 400);
	engine = Matter.Engine.create();
	world = engine.world;
	ground = new Ground(width/2, height - 10, width, 20);
	for (let i = 0; i < 3; i++) {
		bricks[i] = new Box(450, 300 - i * 75, 50, 80);
	}
	bird = new Bird(50, 150, 25);
	const mouse = Matter.Mouse.create(canvas.elt)
	const options = {
		mouse:mouse
	}
	mConstraint = Matter.MouseConstraint.create(engine, options);
	Matter.World.add(world, mConstraint);
}

function draw(){
	background(0);
	Matter.Engine.update(engine);
	ground.show();
	for(brick of bricks){
		brick.show();
	}
	bird.show();
}