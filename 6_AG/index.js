// P5JS Preload
var text = "";
var textArray = [];
var current = 0;
var t = 0;
function preload() {
}
// P5JS Setup
function setup() {
  frameRate(30);
  textArray = Array(60).fill(65);
  for(var i=0; i<textArray.length; i++) {
    textArray[i] = Array(60).fill(65);
  }
  console.table(textArray);
}
// P5JS Draw
function draw() {
  //
  t+=0.01;
  for(var i=0; i<textArray.length; i++) {
    var lineArray = textArray[i];
    for(var j=0; j<lineArray.length; j++) {
      lineArray[j] = floor(sin(t+j/13.0+i/7.3)*10)+95;
    }
  }
  //
  var final = "";
  for(var i=0; i<textArray.length; i++) {
    var lineArray = textArray[i];
    var line = "";
    for(var j=0; j<lineArray.length; j++) {
      var c = lineArray[j];
      line += String.fromCharCode(c)+" ";
    }
    final+= line+"<br/>";
  }
  // text.replaceAt(current, "ss");
  // current++;
  document.body.innerHTML = final;
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
