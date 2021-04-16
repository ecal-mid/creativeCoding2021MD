// NEED A PERSONAL KEY, obtained on ocr.space
// Add this key in a variable "personalKey" in a file called "personalKey.js"
function sendImage(file, callack) {
  let url = "https://api.ocr.space/parse/image";
  let formData = new FormData();
  //
  console.log(file.data);
  formData.append("apikey", personalKey);
  formData.append("language", "fre");
  formData.append("base64image", file.data);
  formData.append("isOverlayRequired", true);
  //
  fetchUrl(url, formData, (json)=>{
    console.log(json);
    if(json.ParsedResults != null) {
      json.ParsedResults.forEach((pr) => {
        callack(pr);
      });
    }
  });
}
function fetchUrl(url, formData, callback) {
  // console.log(url);
  fetch(url, {
    method: 'POST',
    body: formData,
  })
  .then((r) => {
    return r.json();
  })
  .then((t) => {
    callback(t);
  });
}
