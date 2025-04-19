const { default: axios } = require("axios");

async function hit() {
    while (true) {
        try {
            const dat = await axios.get("http://localhost:3000");
            console.log(dat.data);
        } catch (error) {
            console.error("Error hitting the server:", error);
        }

        // Add a delay of 1 second (1000ms) between requests
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
}

hit();
