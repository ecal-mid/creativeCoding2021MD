let textToLoad;
let textSplitted;
let wordList = [];
let iterator = 0;
// P5JS Preload
function preload() {
  // load text, the result is an array ! not a string. The array is created using the "line return".
  // There is no "line return" in "lesHautsParleurs", so the array has only one element
  textToLoad = loadStrings("assets/lesHautsParleurs.txt");
}
// P5JS Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(5);
  //
  textAlign(LEFT, TOP);
  textSize(24);
  // Split text, textToLoad[0] is the first element of the array given by loadStrings (there is only one element in this array, for this text)
  textSplitted = textToLoad[0].split(" ");
  // Iterate throught each word
}

function analyseWord() {
  //for(let i=0; i<textSplitted.length && i<500; i++) {
    // Put current word in a temporary variable
    let currentWord = textSplitted[iterator];
    // Create a OneWord object, store it into a temporary variable, give it the current x, y

    // Add the object to an array
    let found = false;
    for(let j=0; j<wordList.length; j++) {
      let wordToCompareFromArray = wordList[j].word;
      if(currentWord == wordToCompareFromArray) {
        found = true;
        wordList[j].qtt++;
      }
    }
    //
    if(!found) {
      let tempWord = new OneWord(currentWord);
      wordList.push(tempWord);
    }
  //}
  wordList.sort(compareQtt);
}
// P5JS Draw
function draw() {
  if(iterator<textSplitted.length) {
    analyseWord();
    iterator++;
  }
  //
  background(255);
  //
  let normalized = iterator/textSplitted.length;
  fill(0, 255, 0);
  rect(0,0, normalized*width, height);
  //
  // Iterate throught our array of OneWord objects
  // X, Y are there to store the current position where we want the word
  let x = 0;
  let y = 0;
  for(let i=0; i<wordList.length; i++) {
    // Call the function draw in our object
    wordList[i].draw(x, y);
    let valueGot = wordList[i].getWidth();
    x+= valueGot+10;
    //
    if(x>width) {
      x=0;
      y+=30;
    }
    //
  }
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function compareQtt(a, b) {
  if(a.qtt < b.qtt) {
    return 1;
  } else if(a.qtt > b.qtt) {
    return -1;
  }
  return 0;
}
