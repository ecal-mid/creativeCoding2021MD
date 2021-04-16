let loadedFile;
let contentDiv;
// P5JS Preload
function preload() {
  loadedFile = loadStrings("assets/loisurlasile.txt");
}
// P5JS Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  contentDiv = document.createElement("div");
  // hiddenDiv.style.display = "none";
  contentDiv.innerHTML = loadedFile[0];
  document.body.append(contentDiv);
  // Il existe 2 fonctions "selector"
  // querySelector, ne renvoie qu'un unique résultat (pour les ids, qui sont uniques par exemple)
  // querySelectorAll, renvoie un tableau (pour les classes)
  // Ici un lien pour les selectors CSS -> https://www.w3schools.com/cssref/css_selectors.asp

  // Selector de div par ID
  let maintext = contentDiv.querySelector("#maintext");
  console.log(maintext);
  // Selector de div par tag (section)
  let allChapters = maintext.querySelectorAll("section");
  console.log(allChapters);
  // Selector de div par id + tag (section)
  let mainChaptersOnly = contentDiv.querySelectorAll("#maintext>section");
  console.log(mainChaptersOnly);
  // Selector par tag (article)
  let allArticles = contentDiv.querySelectorAll("article");
  console.log(allArticles);
  allArticles.forEach((a)=>{
    let footNotes = a.querySelector(".footnotes");
    if(footNotes != null) {
      console.log(footNotes.textContent); // activer pour tester
      // console.log(footNotes.innerHTML); // activer pour tester
    }
  });
  // Il faut maintenant décider quoi récupérer et comment l'utiliser pour ta visualisation !
}
// P5JS Draw
function draw() {
  background(255);
}
// P5JS WindowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function result(t) {
  console.log(t);
}
