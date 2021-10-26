function replaceNekoToMushi() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let text;
  while (text = walker.nextNode()) {
    text.data = text.data.replace(/ねこ/g, "むし");
    text.data = text.data.replace(/ネコ/g, "むし");
    text.data = text.data.replace(/猫/g, "むし");
  }
}

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

let button = document.getElementById("changebutton");

button.addEventListener("click", async () => {
  let tab = await getCurrentTab();
  console.log(tab);

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: replaceNekoToMushi,
  });
})
