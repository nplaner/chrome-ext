// $(document).on('click', function() {
//     window.close()
// });
// $('#myButton').on('click', function() {
//   window.close();
// });

chrome.runtime.onMessage.addListener(messageGotten);

function messageGotten()

/* Used to create a bookmark 
MDN: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/create
var createBookmark = browser.bookmarks.create({
    title: "bookmarks.create() on MDN",
    url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create"
  });

// How to remove tab?
  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/remove


// How to get tab id?
  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/get
  

// Open new tab with url?
  https://www.w3schools.com/jsref/met_win_open.asp
  */