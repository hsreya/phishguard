import { rules } from "./rules.js";

export function analyzeURL(url) {

    let risk = 0;
    const reasons = [];

    rules.forEach(rule => {
        if (rule.check(url)) {
            risk += rule.risk;
            reasons.push(rule.name);
        }
    });

    return {
        risk,
        reasons
    };
}