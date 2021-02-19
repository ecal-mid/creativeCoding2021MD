var loadedText = "";
var words = {};
var textArray;
var size = 24;
// P5JS Preload
function preload() {
  loadedText = loadStrings("assets/lesHautsParleurs.txt");
  // console.log(text);
}
// P5JS Setup
function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, TOP);
  textSize(size);
  noStroke();
  //
  textArray = loadedText[0].split(" ");
  var x = 0;
  var y = 0;
  for(let i=0; i<textArray.length; i++) {
    var word = textArray[i];
    var tempX = x+textWidth(word);
    if(tempX>width) {
      x=0;
      y+=size*1.2;
    }
    fill(0);
    rect(x, y, textWidth(word), size);
    fill(255);
    text(word, x, y);
    x+=textWidth(word)+5;
  }
  console.log(textArray);
}
// P5JS Draw
function draw() {
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("s");
}
