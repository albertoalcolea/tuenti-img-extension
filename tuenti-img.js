/*var id = chrome.contextMenus.create({
  "title": "Ver imagen en nueva pestaña",
  "contexts": ["page", "link"],
  "onclick": test
});*/


/*chrome.extension.onRequest.addListener(function(request) {
    //alert(request.cmd);

    if (request.cmd == "crearMenu") {
        imgSrc = request.imgSrc;

        chrome.contextMenus.removeAll(function() {
            chrome.contextMenus.create({
                "title": "Ver imagen en nueva pestaña",
                "contexts": ["link"],
                "onclick": newTab
            });
        });
    }
});*/


function getImageAndShow(info, tab) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {operation: "getImage"}, function(response) {
      imgUrl = response.imageUrl;
      alert(imgUrl);
      if (imgUrl) {
        // Open new tab with the image
        chrome.tabs.create({
          "url": imgUrl,
          "active": true
        });
      }
    });
  });
}


var idM = chrome.contextMenus.create({
  "title": "Ver imagen en nueva pestaña",
  "contexts": ["link"],
  "onclick": getImageAndShow
});
