console.log("background running");
// const tabUrlArr = [];
chrome.browserAction.onClicked.addListener(function(tab) {

    const allTabs = [];
    chrome.tabs.query({}, function(tab) {
        for (let i = 1; i < tab.length; i++ ) {
            allTabs.push(tab[i]);
            //get current tab url
            // tabUrlArr.push(tab[i].url)
            chrome.bookmarks.create({title:`bookmark${i}`, url: tab[i].url})
            chrome.tabs.remove(tab[i].id);
        } if (tab.length === 1) {
            window.location.href("http://www.w3schools.com");
        }
        console.log(allTabs);
    })
});


chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log(tab);
    let msg = {
        txt: "hello"
    }
    console.log(tab.id)

    chrome.tabs.sendMessage(tab.id, msg);

}

  
  // This block is new!
//   chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "open_new_tab" ) {
//         chrome.tabs.create({"url": request.url});
//       }
//     }
//   );