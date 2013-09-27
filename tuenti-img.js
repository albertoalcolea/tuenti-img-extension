/*
 * Tuenti-img extension
 * Google chrome extension to download photos easily from Tuenti.
 * 
 * Autor: Alberto Alcolea (contact@albertoalcolea.com)
 * 
 */ 


function getImageAndShow(info, tab) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {operation: "getImage"}, function(response) {
      imgUrl = response.imageUrl;
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
