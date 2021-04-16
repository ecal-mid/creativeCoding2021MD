let img = null;
let result = null;
let tousMots = [];

// P5JS Preload
function preload() {
}
// P5JS Setup
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  //
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
  for (let i = 0; i<tousMots.length; i++){
    tousMots[i].drawWord();
  }
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function getResult(resultFromOcr) {
  tousMots = [];
  // console.log(JSON.stringify(resultFromOcr));
  result = resultFromOcr;
  console.log(resultFromOcr);
  let textOverlay = result.TextOverlay;
  let lines = textOverlay.Lines;
  for(let i = 0; i<lines.length; i++) {
    let line = lines[i];
    let words = line.Words;
    for(let j = 0; j<words.length; j++) {
      let word = words[j];
      let tempResult = new ResultOcr(parseInt(word.Left), parseInt(word.Top), word.WordText);
      tousMots.push(tempResult);
    }
  }
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
    let savedResult = loadJSON("assets/switzerland.json", getResult);
    console.log("load: "+savedResult);
  }
}
//
