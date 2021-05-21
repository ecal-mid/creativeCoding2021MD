// P5JS Preload
let typedText = "";
let font;
let words = [];
//
let gridX = 3;
let gridY = 5;
let gridW, gridH;
//
function preload() {
  font = loadFont('assets/tabular_heavy_v5.otf');
}
// P5JS Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  calculateGrid();
  //
  textFont(font);
}
//
function calculateGrid() {
  gridW = width/gridX;
  gridH = height/gridY;
}
// P5JS Draw
function draw() {
  background(255);
  words.forEach((w)=>{
    w.draw();
  });
  textAlign(LEFT, TOP);
  textSize(50);
  text(typedText, 10, 10);
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateGrid();
}
function keyPressed(e) {
  if("abcdefghijklmnopqrstuvwxyzäàâéèêëîïôöü ".includes(""+e.key)) {
    typedText += e.key;
  }
  if(keyCode === DELETE || keyCode === BACKSPACE) {
    typedText = typedText.slice(0, -1);
  }
  if(keyCode === ENTER) {
    // console.log(word);
    let newWord = new Word(typedText);
    words.push(newWord);
    typedText = "";
  }
}



// ----------------------------- Class Word
class Word {
  constructor(t) {
    this.text = t;
    this.gx = floor(random(0, gridX));
    this.gy = floor(random(0, gridY));
    this.size = random(0,1) < 0.5 ? 1 : 0.5;
    this.analyse();
  }
  analyse() {
    this.qttLetters = this.text.length;
    this.qttT = this.text.split("t").length-1;
    this.qttP = this.text.split("p").length-1;
  }
  draw() {
    textSize(gridH*this.size);
    push();
    translate(this.gx*gridW, this.gy*gridH);
    for(let i=0; i<=this.qttT; i++) {
      translate(-(1+this.qttP), -(1+this.qttP));
      fill(0+(i/(this.qttT+1))*150);
      text(this.text, 0, 0);
    }
    pop();
  }
}
