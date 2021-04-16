let resultNode = document.querySelector("#result");
let resultNumberNode = document.querySelector("#resultNumber");
//
function preload() {
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
  phrase = text.split(" ");
  console.log(text);
  for(let i=0; i<phrase.length; i++) {
    let word = phrase[i];
    let wordLength = word.length;
    //
    resultNode.innerHTML += word+" ";
    resultNumberNode.innerHTML += wordLength;
    //
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
