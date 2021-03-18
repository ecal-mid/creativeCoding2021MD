let wordsNode = document.querySelector("#words");
let valuesNode = document.querySelector("#values");
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
function setup() {
  createCanvas(windowWidth, windowHeight);
}
//
function receive(text) {
  text = cleanPonctuation(text);
  let words = text.split(" ");
  //
  words.forEach((w)=>{
    let length = w.length;
    wordsNode.append(w+" ");
    valuesNode.append(length);
  });
}
//
function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
