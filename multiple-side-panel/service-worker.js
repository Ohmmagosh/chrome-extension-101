const welcomePage = "html/first-side.html";
const mainPage = "html/sec-side.html";


chrome.runtime.onInstalled.addListener( () => {
  chrome.sidePanel.setOptions({ path: welcomePage });
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const { path } = await chrome.sidePanel.getOptions({ tabId });

  if (path === welcomePage) {
    chrome.sidePanel.setOptions({ path: mainPage });
  }
});


