chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {

  await chrome.sidePanel.setOptions({
    tabId,
    path: "side-panel/side-panel.html",
    enabled: true,
  });
});

