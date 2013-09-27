/*
 * Tuenti-img extension
 * Google Chrome extension to download photos easily from Tuenti.
 * 
 * Autor: Alberto Alcolea (contact@albertoalcolea.com)
 * 
 */ 


function searchPhoto() {
  var query = document.querySelector("img#photo_image");
  if (query) return query.src;
}


chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if (request.operation == "getImage") {
  	  imgUrl = searchPhoto();
      sendResponse({imageUrl: imgUrl});
	}
});
