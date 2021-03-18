function drawShape(foundShape, foundSize, foundColor) {
  let pos = {
    x: random(0, width),
    y: random(0, height),
  }
  let size;
  if(foundSize == "grand") {
    size = random(500, 1000);
  }
  if(foundSize == "petit") {
    size = random(100, 200);
  }
  if(foundColor == "rouge") {
    fill(255, 0, 0);
  }
  if(foundColor == "noir") {
    fill(0);
  }
  if(foundShape == "cercle") {
    ellipse(pos.x, pos.y, size, size);
  }
  if(foundShape == "carré") {
    square(pos.x, pos.y, size);
  }
}
let foundColor = "";
let foundShape = "";
let foundSize = "";
//
let shapes = ["cercle", "carré"];
let sizes = ["grand", "petit"];
let colors = ["rouge", "noir"];
//
function cleanPonctuation(text) {
  var charsToRemove = "'.,\/#!$%\^&\*;:{}=\-_ `~()«»—?’";
  var charsToRemoveArray = charsToRemove.split("");
  charsToRemoveArray.forEach((c) => {
    text = text.replaceAll(c, " ");
  });
  text.trim();
  return text;
}
//
function preload() {
}
//
function receive(text) {
  foundColor = "";
  foundShape = "";
  foundSize = "";
  //
  text = cleanPonctuation(text);
  let words = text.split(" ");
  words.forEach((w)=>{
    if(shapes.includes(w)) {
      foundShape = w;
    }
    if(sizes.includes(w)) {
      foundSize = w;
    }
    if(colors.includes(w)) {
      foundColor = w;
    }
  });
  if(foundShape != "" && foundSize != "" && foundColor != "") {
    console.log(foundShape);
    console.log(foundSize);
    console.log(foundColor);
    drawShape(foundShape, foundSize, foundColor);
  }
}
//
function setup() {
  createCanvas(windowWidth, windowHeight);
  // shapes.cercle();
  // drawCircle();
}
function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
