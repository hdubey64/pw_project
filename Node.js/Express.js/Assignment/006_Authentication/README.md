User Authentication API - README
This repository contains the code for a user authentication API built using Node.js, Express.js, and MongoDB. The API allows users to register, login, and retrieve user information after successful authentication.

## Installation
`Clone the repository to your local machine:`

git clone <repository-url>

`Install the required dependencies using npm:`
npm install

`Set up MongoDB:`
Ensure you have MongoDB installed and running locally or provide a connection string to a MongoDB Atlas cluster.

Create a .env file in the root directory and add the following environment variables:

MONGODB_URI=<your-mongodb-connection-string>

## Start the server:

`npm start`
The server will start on port 5001 or a port specified in the .env file.

## Endpoints

`Endpoint:` POST /api/signup

This endpoint allows users to register by providing their user information in the request body.

`Example request body:`
{
  "userName": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}

`Example response:`
{
  "success": true,
  "message": "Registered successfully"
}

## Log In
`Endpoint:` POST /api/login

This endpoint handles user authentication by verifying the provided username and password.

`Example request body:`
{
  "userName": "john_doe",
  "password": "password123"
}

`Example response:`
{
  "success": true,
  "msg": "Logged in successfully"
}

## Home Page

`Endpoint:` GET /api/home

This is a protected route that retrieves user information after successful login. The user must be authenticated with a valid JWT token in the request cookie.

`Example response:`

{
  "success": true,
  "data": {
    "_id": "user-id",
    "userName": "john_doe",
    "email": "john@example.com",
    "password": "<hashed-password>"
  }
}

`Error Handling`
The API returns appropriate error messages and status codes for various scenarios, such as duplicate email during registration, invalid credentials during login, missing fields, and database errors.

`Security`
User passwords are securely hashed using the bcrypt library before storing them in the database.

JWT tokens are used for authentication and are set as HTTP-only cookies to enhance security.

`Contributing`
Feel free to contribute to this project by opening issues or submitting pull requests.

`License`
This project is licensed under the MIT License.

