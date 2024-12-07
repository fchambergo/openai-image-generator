const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

// Express app setup
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

// Server setup
const PORT = process.env.PORT || 3000;

// Routes
app.post("/get-images", async (req, res) => {

    try {
        // Get the prompt from the request body
        const { prompt } = req.body;

        // OpenAI API options
        const options = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            // OpenAI API request body
            // Prompt: The prompt is the description of the image you want to generate
            // n: The number of images to generate
            // size: The size of the images to generate
            body: JSON.stringify({
                prompt: prompt,
                n: 4,
                size: "1024x1024"
            })
        }
    
        // OpenAI API request
        const response = await fetch(`https://api.openai.com/v1/images/generations`, options);
        const apiData = await response.json();

        // Send the response back to the client
        res.status(200).send(apiData);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));