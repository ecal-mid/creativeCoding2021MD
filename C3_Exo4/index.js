let shapes = ["cercle", "carré"];
let colors = ["rouge", "bleu"];
let sizes = ["grand", "petit"];
//
let heardShape = "";
let heardColor = "";
let heardSize = "";
//
function preload() {
}
//
function drawFollowingInstructions(heardShape, heardColor, heardSize) {
  let x = random(0, width);
  let y = random(0, height);
  let s;
  //
  if(heardSize == "grand") {
    s = 1000;
  }
  if(heardSize == "petit") {
    s = 100;
  }
  // Color is defined
  if(heardColor == "rouge") {
    fill(255, 0, 0);
  }
  if(heardColor == "bleu") {
    fill(0, 0, 255);
  }
  // Shape is choosen
  if(heardShape == "cercle") {
    ellipse(x, y, s, s);
  }
  if(heardShape == "carré") {
    rect(x, y, s, s);
  }
}
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
function receive(text) {
  text = cleanPonctuation(text);
  let splitted = text.split(" ");
  //
  for(let i=0; i<splitted.length; i++) {
    let word = splitted[i];
    //
    if(shapes.includes(word)) {
      heardShape = word;
    }
    if(colors.includes(word)) {
      heardColor = word;
    }
    if(sizes.includes(word)) {
      heardSize = word;
    }
  }
  // console.log(heardShape);
  // console.log(heardColor);
  // console.log(heardSize);
  //
  if(heardShape != "" && heardColor != "" && heardSize != "") {
    drawFollowingInstructions(heardShape, heardColor, heardSize);
    heardShape = "";
    heardColor = "";
    heardSize = "";
  }
}
//
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
