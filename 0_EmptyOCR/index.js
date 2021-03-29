let img = null;
let result = null;
// P5JS Preload
function preload() {
}
// P5JS Setup
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  background(255);
  canvas.drop((file)=> {
    sendImage(file, getResult);
    img = createImg(file.data, '').hide();
  });
}
// P5JS Draw
function draw() {
  background(255);
  if(img != null) {
    image(img, 0, 0);
  }
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function getResult(resultFromOcr) {
  console.log(resultFromOcr);
}
// Saving loading function (to avoid calling ocr.space all the time)
function keyPressed() {
  if (key === 's') {
    console.log("save: "+ JSON.stringify(result));
    let writer = createWriter('savedJson.json');
    writer.write(JSON.stringify(result));
    writer.close();
  }
  if (key === 'l') {
    let savedResult = loadJSON("assets/savedJson.json", getResult);
    console.log("load: "+savedResult);
  }
}
