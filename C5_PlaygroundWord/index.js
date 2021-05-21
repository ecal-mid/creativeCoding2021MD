let textInput = "";
let font;
let allWords = [];
//
let qttCol = 9;
let qttRow = 10;
let margin = 50;
let colW, rowH;
let widthWithoutMargins, heigthWithoutMargins;
// P5JS Preload
function preload() {
  font = loadFont("assets/tabular_heavy_v5.otf");
}
// P5JS Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateGrid();
}
// P5JS Draw
function draw() {
  background(255);
  //
  textAlign(LEFT, TOP);
  text(textInput, 50, 50);
  //
  translate(margin, margin);
  drawGrid();
  //
  for(let i=0; i<allWords.length; i++) {
    allWords[i].draw();
  }
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateGrid();
}
//
function keyPressed(e) {
  if("abcdefghijklmnopqrstuvwxyz1234567890 éàèê".includes(e.key)) {
    textInput += e.key;
    //visualWord.update(textInput);
  }
  if(keyCode === DELETE || keyCode === BACKSPACE) {
    textInput = textInput.slice(0, -1);
    //visualWord.update(textInput);
  }
  if(keyCode === ENTER) {
    let newWord = new Word(textInput);
    allWords.push(newWord);
    textInput = "";
  }
}
//
function drawGrid() {
  for(let x=0; x<qttCol; x++) {
    line(x*colW, 0, x*colW, heigthWithoutMargins);
  }
  for(let y=0; y<qttRow; y++) {
    line(0, y*rowH, widthWithoutMargins, y*rowH);
  }
}
//
function calculateGrid() {
  // let qttCol = 3;
  // let qttRow = 6;
  // let margin = 10;
  widthWithoutMargins = width-margin*2;
  colW = widthWithoutMargins/qttCol;
  heigthWithoutMargins = height-margin*2;
  rowH = heigthWithoutMargins/qttRow;
  // console.log(colW);
}


class Word {
  constructor(t) {
    this.c = floor(random(0, qttCol));
    this.r = floor(random(0, qttRow));
    this.size = floor(random(1, 1));
    this.update(t);
  }
  update(t) {
    this.textContent = t;
    //
    this.points = font.textToPoints(this.textContent, 0, 0, rowH*this.size, {
      sampleFactor: 0.15,
      simplifyThreshold: 0
    });
    this.bounds = font.textBounds(this.textContent, 0, 0, rowH*this.size);
    //
    console.log(this.bounds);
    //
    this.pCounter = 2;
    this.tCounter = 2;
    for(let i=0; i<this.textContent.length; i++) {
      if(this.textContent[i] == "p") {
        this.pCounter++;
      }
      if(this.textContent[i] == "t") {
        this.tCounter++;
      }
    }
  }
  draw() {
    textSize(rowH*this.size);
    push();

    translate(this.c*colW, this.r*rowH);
    for(let i=0; i<this.pCounter+1; i++) {
      fill(i*20);
      text(this.textContent, i*this.tCounter, i*this.tCounter);
    }

    pop();
  }
  draw2() {
    push();

    translate(this.c*colW, this.r*rowH);
    ellipse(0, 0, 10, 10);

    translate(0, this.bounds.h/2);
    if(this.points != null) {
      for(let i=0; i<this.points.length; i++) {
        let pt = this.points[i];
        line(pt.x, pt.y, pt.x+this.pCounter*10, pt.y+this.tCounter*10);
      }
    }

    pop();
  }
}
