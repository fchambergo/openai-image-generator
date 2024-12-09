# AI Image Generator

A web application that generates images using OpenAI's DALL-E API based on text descriptions. Users can enter a prompt, and the application will generate four different AI-created images matching that description.

## Demo

[![Video Demo](https://img.youtube.com/vi/lWpuo2br9aA/0.jpg)](https://www.youtube.com/watch?v=lWpuo2br9aA)

## Features

- Generate multiple AI images from text descriptions
- Responsive design
- Loading animation during image generation
- Error handling for API rate limits and other potential issues

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v12 or higher)
- npm (Node Package Manager)
- An OpenAI API key

## Installation

1. Clone the repository:
```
git clone git@github.com:fchambergo/openai-image-generator.git
```
2. Install dependencies:
```
npm install
```
3. Set up your OpenAI API key:
- Create an account on OpenAI and obtain your API key.
- Set the API key as an environment variable in the `.env` file:
```
OPENAI_API_KEY=<your-api-key>
```

## Running the Application

1. Start the server:
```
cd server
npm start
```

2. Open the `index.html` file in your browser to use the application.

## Usage

1. Enter a description of the image you want to generate in the input field
2. Click the submit button (>) or press Enter
3. Wait for the images to be generated
4. The application will display four AI-generated images based on your description

## API Rate Limits

Please note that OpenAI's API has rate limits. If you exceed these limits, the application will display an appropriate error message. Wait a few minutes before trying again.

## Technologies Used

- Frontend:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
- Backend:
  - Node.js
  - Express.js
- APIs:
  - OpenAI DALL-E API