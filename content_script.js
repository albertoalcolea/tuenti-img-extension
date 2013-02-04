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
