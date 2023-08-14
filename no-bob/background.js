chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: openCanvasAndInjectScript
  });
});

function openCanvasAndInjectScript() {
  chrome.tabs.create({ url: "https://mycourses.unh.edu" }, (tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  });
}
