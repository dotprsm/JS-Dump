const message = "hello does this work orr";

async function sendMessage(endpoint) {
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: message
        });

        const data = await response.text();
        console.log("Response:", data);

    } catch (error) {
        console.error("Error:", error.message);
    }
}
