const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the text to encode:\n> ", (input) => {
    try {
        const encoded = Buffer.from(input, "utf8").toString("base64");

        console.log("\nEncoded Base64:");
        console.log(encoded);

    } catch (error) {
        console.error("Failed to encode:", error.message);
    }

    rl.close();
});
