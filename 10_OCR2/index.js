let img = null;
let wordsToDraw = [];
let result = null;
// P5JS Preload
function preload() {
}
// P5JS Setup
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(24);
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
  fill(0);
  stroke(0);
  wordsToDraw.forEach((w) => {
    w.draw();
  });
  // Draw lines between words
  for(let a = 0; a<wordsToDraw.length; a++) {
    for(let b = a; b<wordsToDraw.length; b++) {
      let wa = wordsToDraw[a];
      let wb = wordsToDraw[b];
      line(wa.x, wa.y, wb.x, wb.y);
    }
  }
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function getResult(resultFromOcr) {
  console.log(resultFromOcr);
  //
  wordsToDraw = [];
  result = resultFromOcr;
  result.TextOverlay.Lines.forEach((line) => {
    line.Words.forEach((word) => {
      wordsToDraw.push(new OneWord(word.WordText, parseInt(word.Left), parseInt(word.Top)));
    });
  });
}
// Saving loading function (to avoid calling ocr.space all the time)
function keyPressed() {
  // console.log(key);
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


class OneWord {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    // console.log(this);
  }
  draw() {
    text(this.text, this.x, this.y);
  }
}
