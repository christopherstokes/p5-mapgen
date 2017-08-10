var isLooping = false;

function drawMap() {
  var mapArr = [];
  var colorMap;
  for (var x = 0; x < width; x++) {
    mapArr[x] = [];
    for (var y = 0; y < height; y++) {
      noiseDetail(12, 0.01);
      mapArr[x][y] = noise(x + random(), y + random());
      stroke(mapArr[x][y] * 255);
      point(x, y);
    }
  }
}

function preload() {}

function setup() {
  createCanvas(300, 300);
	noLoop();
}

function draw() {
  background(0);
  drawMap();
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
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
}
