import { analyzeURL } from "./utils/urlAnalyzer.js";

const website = document.getElementById("website");
const riskScore = document.getElementById("riskScore");
const reasonsList = document.getElementById("reasons");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    const hostname = new URL(url).hostname;

    website.textContent = hostname;

    const result = analyzeURL(url);

    riskScore.textContent = `${result.risk}%`;

    reasonsList.innerHTML = "";

    result.reasons.forEach((reason) => {
    const li = document.createElement("li");
    li.textContent = `⚠️ ${reason}`;
    reasonsList.appendChild(li);
});       
});