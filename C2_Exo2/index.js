let textDiv = document.querySelector("#text");
// P5JS Preload
function preload() {
}
//
//
// P5JS Setup
function setup() {
  // createCanvas(windowWidth, windowHeight);
  for(let i=0; i<10; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "texte test";
    newDiv.addEventListener("click", (e)=> {
      console.log(e);
      alert(newDiv.innerHTML);
    });
    textDiv.append(newDiv);
  }
}
// P5JS Draw
function draw() {
  // console.log("s");
  background(255);
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
