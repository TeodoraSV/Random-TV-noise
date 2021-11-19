var inc = 0.01;
function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  background(10);
  stroke(255);
  noFill();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      r=random(255);
      pixels[index] = r;
      pixels[index+1] = r;
      pixels[index+2] = r;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}
