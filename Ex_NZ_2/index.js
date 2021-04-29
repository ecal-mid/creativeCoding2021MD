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
  // getDates("387 ACF du 11 août 1999 ");
  // Il existe 2 fonctions "selector"
  // querySelector, ne renvoie qu'un unique résultat (pour les ids, qui sont uniques par exemple)
  // querySelectorAll, renvoie un tableau (pour les classes)
  // Ici un lien pour les selectors CSS -> https://www.w3schools.com/cssref/css_selectors.asp

  // Selector de div par ID
  let maintext = contentDiv.querySelector("#maintext");
  // console.log(maintext);
  // Selector de div par tag (section)
  let allChapters = maintext.querySelectorAll("section");
  // console.log(allChapters);
  // Selector de div par id + tag (section)
  let mainChaptersOnly = contentDiv.querySelectorAll("#maintext>section");
  // console.log(mainChaptersOnly);
  // Selector par tag (arti cle)
  let allArticles = contentDiv.querySelectorAll("article");
  // console.log(allArticles);
  allArticles.forEach((a)=>{
    let footNotes = a.querySelector(".footnotes");
    if(footNotes != null) {
      let txt = footNotes.innerText;
      let datesFromFootNotes = getDates(txt);
      // console.log(txt); // activer pour tester
      // console.log(datesFromFootNotes); // activer pour tester
      // console.log(footNotes.textContent); // activer pour tester
      // console.log(footNotes.innerHTML); // activer pour tester
    }
  });
  // Démo pour le get Dates
  let txt = "5 Introduit par le ch. I de la LF du 28 sept. 2012 (Mod. urgentes de la LF sur l’asile) (RO 2012 5359; FF 2010 4035, 2011 6735). Nouvelle teneur selon le ch. I de la LF du 25 sept. 2015, en vigueur depuis le 1er mars 2019 (RO 2016 3101, 2018 2855; FF 2014 7771).";
  let datesFromFootNotes = getDates(txt);
  console.log("Trouvé dans: "+txt); // activer pour tester
  console.log("Les dates suivantes: "); // activer pour tester
  console.log(datesFromFootNotes);
  //
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



// *****
// Cette fonction renvoie un tableau de date trouvées dans les notes de bas de page
// Si cela ne fonctionne pas pour certaines dates, fais-m'en part
// Les regexp, c'est compliqué, faut pas s'attarder dessus !
// M
function getDates(footNote) {
  let dates = [];
  let regexp = /(\d{1,2})(?:(?:\s)|(?:er\s))((?:janv\.)|(?:fév\.)|(?:mars)|(?:avr\.)|(?:mai)|(?:juin)|(?:juil\.)|(?:août)|(?:sept\.)|(?:oct\.)|(?:nov\.)|(?:déc\.))\s(\d{4})/gmi;
  let matches = footNote.matchAll(regexp);
  let groups = [...matches];
  groups.forEach((g)=>{
    // 0 = full date, 1 = day, 2 = month (to convert), 3 = year
    let date = {};
    date.fr = g[0];
    date.day = parseInt(g[1]);
    date.month = getMonthValue(g[2]);
    date.year = parseInt(g[3]);
    //
    dates.push(date);
  });
  return dates;
}
function getMonthValue(month) {
  let months = ["janv.", "fév.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
  let v = months.indexOf(month)+1;
  return v;
}
// *****
