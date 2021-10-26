function replaceNekoToMushi() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let text;
  while (text = walker.nextNode()) {
    text.data = text.data.replace(/ねこ/g, "むし");
    text.data = text.data.replace(/ネコ/g, "むし");
    text.data = text.data.replace(/猫/g, "むし");
  }
}

window.addEventListener("click", replaceNekoToMushi);
