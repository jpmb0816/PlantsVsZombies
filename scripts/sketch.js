let grid;
let canvas;
let fps = 0;

function setup() {
	createCanvas(600, 600);
	grid = new Grid(10, 9);

	textSize(20);
}

function draw() {
	background(50);

	grid.update();
	grid.render();

	textAlign(LEFT);
	fill('red');
	text('FPS: ' +  Math.floor(fps), 30, 40);

	if (frameCount % 60 === 0) {
		fps = getFrameRate();
	}
}