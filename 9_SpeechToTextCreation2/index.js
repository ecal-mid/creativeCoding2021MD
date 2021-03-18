function drawShape(foundShape, foundSize, foundColor) {
  let pos = {
    x: random(0, width),
    y: random(0, height),
  }
  let size = foundSize();
  foundColor();
  foundShape(pos, size);
}
let foundColor = "";
let foundShape = "";
let foundSize = "";
//
let shapes = {
  "cercle": (pos, size)=>{
    ellipse(pos.x, pos.y, size, size);
  },
  "carré": ()=>{
    square(pos.x, pos.y, size);
  }
};
let sizes = {
  "grand": ()=> {
    return random(500, 1000);
  },
  "petit": ()=> {
    return random(50, 100);
  }
};
let colors = {
  "rouge": ()=> {
    fill(255, 0, 0);
  },
  "noir": ()=> {
    fill(0);
  }
};
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
//
function receive(text) {
  foundColor = null;
  foundShape = null;
  foundSize = null;
  //
  text = cleanPonctuation(text);
  let words = text.split(" ");
  words.forEach((w)=>{
    if(shapes[w] != null) {
      foundShape = shapes[w];
    }
    if(sizes[w] != null) {
      foundSize = sizes[w];
    }
    if(colors[w] != null) {
      foundColor = colors[w];
    }
  });
    console.log(foundShape);
    console.log(foundSize);
    console.log(foundColor);
  if(foundShape != null && foundSize != null && foundColor != null) {
    // console.log(foundShape);
    // console.log(foundSize);
    // console.log(foundColor);
    drawShape(foundShape, foundSize, foundColor);
  }
}
//
function setup() {
  createCanvas(windowWidth, windowHeight);
  // shapes.cercle();
  // drawCircle();
}
function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
