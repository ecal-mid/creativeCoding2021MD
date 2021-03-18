var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
//
recognition.continuous = true; // true, continue ad eternam / false, end after first sentence
recognition.interimResults = false; // send word during speech (not accurate words)
recognition.maxAlternatives = 1;
recognition.lang = "fr-FR"; // en-EN
//

recognition.onresult = function(event) {
  //
  // console.log(event);
  var last = event.results.length - 1;
  var sentence = event.results[last][0].transcript;
  // console.log(sentence);
  receive(sentence);
}
//
recognition.onspeechend = function() {

}


window.addEventListener("click", ()=> {
  console.log('Ready to hear you.');
  recognition.start();
});
