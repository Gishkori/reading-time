const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}

const currentURL = window.location.toString();

if (currentURL.includes("youtube")) {
  window.alert("Stop Watching Youtube");
  setTimeout(() => {
    console.log("Waited for 5 seconds");
  }, 6000);
}

var currentTab = getCurrentTab();
console.log(currentTab);

async function getCurrentTab() {
  let queryOptions = { active: true, currentTab: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}