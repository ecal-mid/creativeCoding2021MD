var loadedText = "On va changer l'exemple! Et doubler le mot exemple...";
var words = [];
var textArray;
var size = 24;
var current = 0;
var maxQtt = 1;
// P5JS Preload
function preload() {
  loadedText = loadStrings("assets/lesHautsParleurs.txt");
}
// P5JS Setup
function setup() {
  loadedText = loadedText[0];
  // console.log(loadedText[0]);
  background(255);
  createCanvas(windowWidth, windowHeight);
  // textAlign(LEFT, TOP);
  textAlign(CENTER, CENTER);
  textSize(size);
  noStroke();
  // Remove ponctuation
  var charsToRemove = "'.,\/#!$%\^&\*;:{}=\-_`~ ()«»—?’";
  var charsToRemoveArray = charsToRemove.split("");
  charsToRemoveArray.forEach((c) => {
    loadedText = loadedText.replaceAll(c, " ");
  });
  //
  textArray = loadedText.split(" ");
  // for(let i=0; i<textArray.length; i++) {
  //
  // }
  //
  //
}
function oneWordAtATime(word) {
  word = word.toLowerCase();
  if(word != "") {
    var exist = false;
    words.forEach((w) => {
      if(w.text == word) {
        exist = true;
        w.add();
      }
    });
    if(!exist) {
      words.push(new Word(word));
    }
  }
  words.sort(compare);
}
function compare(a, b) {
  if (a.qtt < b.qtt) {
    return true;
  } else {
    return false;
  }
}
// P5JS Draw
function draw() {
  background(255);
  //
  for(var i=0; i<10; i++) {
    if(current < textArray.length) {
      var word = textArray[current];
      oneWordAtATime(word);
      current++;
      var normalized = current/textArray.length;
      // console.log(normalized);
      fill(255, 0, 0);
      rect(0, height-5, normalized*width, 5);
    }
  }
  //
  var x = 0;
  var y = 0;
  var cnt = 0;
  words.forEach((w) => {
    if(cnt<100) {
      w.draw(x, y);
      y+=size+10;
    }
    cnt++;
  });
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Word {
  constructor(t) {
    this.text = t;
    this.x = random(0, width);
    this.y = random(0, height);
    this.qtt = 0;
    this.textWidth = textWidth(this.text);
  }
  getWidth() {
    return this.qtt+this.textWidth;
  }
  getWidthScreenRelative() {
    return (this.qtt/maxQtt)*width;
  }
  draw(x, y) {
    fill(0);
    var wsr = this.getWidthScreenRelative()
    rect((width-wsr)/2, y, wsr, size);
    fill(255);
    textSize(size/2);
    text(this.text, width/2, y+size/2);
  }
  replace() {
    this.x = random(0, width);
    this.y = random(0, height);
  }
  add() {
    this.qtt++;
    maxQtt = max(this.qtt, maxQtt);
  }
}
