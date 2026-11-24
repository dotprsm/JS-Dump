const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the Base64 string to decode:\n> ", (input) => {
    try {
        const decoded = Buffer.from(input.trim(), "base64").toString("utf8");

        console.log(decoded);

    } catch (error) {
        console.error("Failed to decode Base64:", error.message);
    }

    rl.close();
});
