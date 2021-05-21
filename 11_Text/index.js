// P5JS Preload
let font;
let word;
let typedText = "";
//
function preload() {
  font = loadFont('assets/tabular_heavy_v5.otf');
}
// P5JS Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  word = new Word(typedText);
}
// P5JS Draw
function draw() {
  background(255);
  translate(width/2, height/2);
  textAlign(CENTER, CENTER);
  word.draw();
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function keyPressed(e) {
  if("abcdefghijklmnopqrstuvwxyzäàâéèêëîïôöü ".includes(""+e.key)) {
    typedText += e.key;
    word.update(typedText);
  }
  if(keyCode === DELETE || keyCode === BACKSPACE) {
    typedText = typedText.slice(0, -1);
    word.update(typedText);
  }
}



// ----------------------------- Class Word
class Word {
  constructor(t) {
    this.text = t;
    this.analyse();
  }
  update(t) {
    this.text = t;
    this.analyse();
  }
  analyse() {
    this.qttLetters = this.text.length;
    this.qttT = this.text.split("t").length-1;
    this.qttP = this.text.split("p").length-1;
  }
  draw() {
    textSize(200-this.qttLetters*5);
    push();
    for(let i=0; i<=this.qttT; i++) {
      translate(-(1+this.qttP), -(1+this.qttP));
      fill(0+(i/(this.qttT+1))*150);
      text(this.text, 0, 0);
    }
    pop();
  }
}
