async function fetch(url) {
    try {
        const response = await window.fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.text();

    } catch (error) {
        console.error("request failed:", error);
        return null;
    }
}

fetch("https://api.github.com/zen")
    .then(result => console.log(result));
