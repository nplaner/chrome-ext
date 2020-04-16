console.log("background running");

chrome.browserAction.onClicked.addListener(function(tab) {

    const allTabs = [];
    chrome.tabs.query({}, function(tab) {
        for (let i = 1; i < tab.length; i++ ) {
            allTabs.push(tab[i]);
            chrome.tabs.remove(tab[i].id);
        }
        console.log(allTabs);
    })
});

// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab) {
//     console.log(tab);
//     let msg = {
//         txt: "hello"
//     }
//     console.log(tab.id)
//     chrome.tabs.sendMessage(tab.id, msg);

// }

  
  // This block is new!
//   chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "open_new_tab" ) {
//         chrome.tabs.create({"url": request.url});
//       }
//     }
//   );