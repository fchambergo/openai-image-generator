const BASE_URL = "http://localhost:3000";

const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");
const imagesSection = document.querySelector(".images-section");
const loader = document.querySelector(".loader");

// Function to get images from the server
const getImages = async() => {
    try {
        // Clear the images section
        imagesSection.innerHTML = "";
        // Display the loader
        loader.style.display = "block";

        // Server request options
        const options = {
            method: "POST",
            body: JSON.stringify({
                prompt: inputElement.value,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }

        // Server request
        const response = await fetch(`${BASE_URL}/get-images`, options);
        const apiData = await response.json();

        // Hide the loader
        loader.style.display = "none";

        // Display the images
        if (apiData.data) {
            apiData.data.forEach((imageData) => addImageToDOM(imageData));
        }
        // Check for errors
        else if (apiData.error) {
            // Check if the error is a rate limit error from OpenAI
            if (apiData.error.code === "rate_limit_exceeded") {
                throw new Error("You have reached your rate limit for fetching images. Please wait a minute and try again.");
            }
        } 
        else {
            throw new Error("No images found");
        }

    } catch (error) {
        // Display the error message
        imagesSection.innerHTML = `<h2>${error.message}</h2>`;
        // Hide the loader
        loader.style.display = "none";
    }
}

// Function to add an image to the DOM
function addImageToDOM(imageData) {
    // Create the image container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create the image element
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", imageData.url);
    imageContainer.appendChild(imageElement);

    // Add the image container to the images section
    imagesSection.appendChild(imageContainer);
}

submitIcon.addEventListener("click", getImages);