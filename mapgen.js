function drawGraph(arr) {
	for (var x=0; x<width; x++) {
		stroke(255, 0, 255);
		line(x*4, height, x*4, (height/2 - ((arr[x] || 0) * 100))); 
	}
}

function updateGraph(arr) {
	arr.push(noise(arr[arr.length] || random()));
	if (arr.length*4 > width) {arr.shift();}
}

var currentGraph = [];
var isLooping = false;

function preload() {
}

function setup() {
	createCanvas(300,300);
	noLoop();
}

function draw() {
	background(32);
	updateGraph(currentGraph);
	drawGraph(currentGraph);
}

function mouseClicked() {
	if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) { 
		if (!isLooping) {
			isLooping = true;
			loop();
		} else {
			isLooping = false;
			noLoop();
		}
	}
}
