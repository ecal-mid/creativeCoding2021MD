var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

function createSpeechToText(callback) {
  var recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.lang = "fr-FR"; // fr-FR
  //
  recognition.start();
  console.log('Ready to hear you.');
  //
  recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var sentence = event.results[last][0].transcript;
    console.log(sentence);
    var splitted = sentence.split(" ");
    callback(splitted);
  }
  recognition.onspeechend = function() {
    createSpeechToText(callback);
  }
}
