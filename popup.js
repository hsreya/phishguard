const website = document.getElementById("website");

console.log("Popup JS is running");
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;

    const hostname = new URL(url).hostname;

    website.textContent = hostname;
});