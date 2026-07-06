export const rules = [
    {
        name: "Long URL",
        risk: 20,
        check: (url) => {
            return url.length > 80;
        }
    },

    {
        name: "Uses an IP address instead of a domain",
        risk: 40,
        check: (url) => {
            const hostname = new URL(url).hostname;

            const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;

            return ipRegex.test(hostname);
        }
    },

    {
    name: "Uses HTTP",
    risk: 20,
    check: (url) => {
        return new URL(url).protocol === "http:";
    }
    },

    {
    name: "contains @ symbol",
    risk: 30,
    check: (url) => {
        return url.includes("@");
    }
    },

    {
        name: "contains too many hiphens",
        risk: 15,
        check: (url) => {
            const hostname = new URL(url).hostname;
            const hyphenCount = hyphenCount = (hostname.match(/-/g) || []).length;
            return hyphenCount > 3;
        }
    }
];