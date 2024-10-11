KoinX Backend - Cryptocurrency Data Fetcher
This is a Node.js backend application that fetches cryptocurrency data (such as price, market cap, and 24-hour price change) using the CoinGecko API and calculates statistics like the standard deviation of prices. The application also stores the fetched data in a MongoDB database for further processing.

Deployed Link :- https://koinx-backend-internship-assignment-1.onrender.com/

Table of Contents
Features
Tech Stack
Installation
Environment Variables
Usage
API Endpoints
Deployment
License
Features
Fetches cryptocurrency data (price, market cap, 24-hour change) using the CoinGecko API.
Calculates the standard deviation of the last 100 price records.
Schedules periodic tasks to fetch and store crypto data using cron jobs.
Error handling and API response formatting for a production-grade project.
Database schema design optimized for efficient data storage and retrieval.
Tech Stack
Backend: Node.js, Express
Database: MongoDB
Scheduling: cron
Data Fetching: CoinGecko API
Error Handling: Custom APIError and Async Handler
Version Control: Git
Installation
Clone the repository:

git clone https://github.com/Jeanish/KoinX-Backend-Internship-Assignment.git
cd KoinX-Backend-Internship-Assignment
Install dependencies:

npm install
Set up MongoDB:

Ensure MongoDB is running either locally or remotely (MongoDB Atlas).
Get the MongoDB connection URI.
Environment Variables
To run this project, you will need to set the following environment variables:

Variable Name	Description
MONGODB_URI	MongoDB connection string
PORT	Port where the application will run
DB_NAME	Database name where the data will store
COINGECKO_API_KEY	Base URL for the CoinGecko API (optional, defaults to their public API)
Usage
Start the server:

npm start
Access the API:

By default, the server runs at http://localhost:5050.
API Endpoints
1. Get Latest Crypto Stats
Fetches the latest data for a specified cryptocurrency.

Endpoint: /api/v1/crypto/stats?coin={coin}

Method: GET

Parameters:

coin (query parameter): The name of the cryptocurrency (e.g., bitcoin, ethereum).
Response:

{
  "statusCode": 200,
  "data": {
    "price": 50000,
    "marketCap": 900000000000,
    "24hChange": -1.5
  },
  "message": "success",
  "success": true
}
2. Get Crypto Price Deviation
Calculates the standard deviation of the last 100 price records for the specified cryptocurrency.

Endpoint: /api/v1/crypto/deviation?coin={coin}

Method: GET

Parameters:

coin (query parameter): The name of the cryptocurrency (e.g., bitcoin,ethereum).
Response:

    {
    "statusCode": 200,
    "data": {
        "deviation": "35.44"
    },
    "message": "success",
    "success": true
    }
Deployment
Deployed on Render: This application is deployed on Render for free hosting.

License
Key Sections to Customize: Features: Highlight the functionality of the backend, especially anything unique about your implementation. Tech Stack: List all the technologies and libraries used in your project. API Endpoints: Clearly document the API, including routes, request types, and example responses. Environment Variables: Ensure your .env setup is well-documented to help others run your code.
