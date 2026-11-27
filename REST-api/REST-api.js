async function sendMessage(endpoint) {
    try {
        const response = await fetch(
            `${endpoint}?message=${encodeURIComponent("hello does this work orr")}`
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.text();
        console.log("Response:", data);

    } catch (error) {
        console.error("Error:", error.message);
    }
}
