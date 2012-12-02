function searchPhoto() {
  var query = document.querySelector("img#photo_image");
  if (query) return query.src;
}


/*document.addEventListener("mousedown", function(event) {
    //right click
    if(event.button == 2) {
    	var imgSrc = searchPhoto();
    	chrome.extension.sendRequest({cmd: "crearMenu", imgSrc: imgSrc});
    }
}, true);*/



chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if (request.operation == "getImage") {
  	  imgUrl = searchPhoto();
      sendResponse({imageUrl: imgUrl});
	}
});
