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
  resizeCanvas(210*3, 297*3);
  windowResized();
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
  background(240);
  words.forEach((w)=>{
    w.draw();
  });
  textAlign(LEFT, TOP);
  textSize(50);
  text(typedText, 10, 10);
}
// P5JS WindowResized
function windowResized() {
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
    this.gy = floor(random(1, gridY+1));
    this.size = random(0,1) < 0.5 ? 1 : 0.5;
    this.analyse();
  }
  analyse() {
    this.points = font.textToPoints(this.text, 0, 0, gridH*this.size, {
      sampleFactor: 0.15,
      simplifyThreshold: 0
    });
    this.qttLetters = this.text.length;
    this.qttT = this.text.split("t").length-1;
    this.qttP = this.text.split("p").length-1;
  }
  draw() {
    // noFill(5);
    // stroke(0);
    push();
    translate(this.gx*gridW, this.gy*gridH);
    // beginShape();
    this.points.forEach((p)=>{
      line(p.x-5, p.y-5, p.x+5, p.y+5);
    });
    // endShape();
    pop();
  }
}
