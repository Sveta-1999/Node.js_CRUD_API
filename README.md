# API CRUD Documentation

This documentation provides information on how to install, run, and use the API CRUD application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Create User](#create-user)
  - [Update User](#update-user)
  - [Get All Users](#get-all-users)
  - [Get User by ID](#get-user-by-id)
  - [Delete All Users](#delete-all-users)
  - [Delete User by ID](#delete-user-by-id)
  - [Delete Users with Same Name](#delete-users-with-same-name)

## Prerequisites

To run the API CRUD application, ensure you have the following dependencies installed:

- Node.js
- MongoDB
- MongoDB Compass
- Postman

## Installation

To install the API CRUD application, follow these steps:

1. Clone the repository to your local machine.

```
$ git clone https://github.com/Sveta-1999/Node.js_CRUD_API.git
```

2. Navigate to the project directory.

```
$ cd Node.js_CRUD_API
```

3. Install the required dependencies using npm.

```
$ npm install
```

## Running the Application

To run the API CRUD application, use the following command:

```
$ npm start
```

This command will start the application using [nodemon](https://www.npmjs.com/package/nodemon), which automatically restarts the server when code changes are detected.

Once the application is running, you can use Postman or any API testing tool to interact with the API endpoints.

## API Endpoints

### Create User

- URL: `POST /api/user/add`
- Description: Create a new user.
- Request Body:
  - `name` (string, required): User's name.
  - `surname` (string, required): User's surname.
  - `age` (number, required): User's age (must be a positive integer).
  - `email` (string, required): User's email (must be a valid email address).
  - `phoneNumber` (string, required): User's phone number (must be in the format "+374xxxxxxxx").
  - `gender` (string, required): User's gender ("male", "female", or "other").
  - `nationality` (string, optional): User's nationality.
  - `livingCountry` (string, optional): User's living country.
- Response:
  - Success: 200 OK
  - Error: 400 Bad Request, 500 Internal Server Error

### Update User

- URL: `PUT /api/user/:id`
- Description: Update an existing user by ID.
- Request Parameters:
  - `id` (string, required): ID of the user to update.
- Request Body: Same as the "Create User" endpoint.
- Response:
  - Success: 200 OK
  - Error: 400 Bad Request, 404 Not Found, 500 Internal Server Error

### Get All Users

- URL: `GET /api/user`
- Description: Get a list of all users.
- Response:
  - Success: 200 OK with an array of user objects
  - Error: 500 Internal Server Error

### Get User by ID

-URL: `GET /api/user/:id`
- Description: Get a user by their ID.
- Request Parameters:
  - `id` (string, required): ID of the user to retrieve.
- Response:
  - Success: 200 OK with the user object
  - Error: 400 Bad Request (invalid ID format), 404 Not Found (user not found), 500 Internal Server Error

### Delete All Users

- URL: `DELETE /api/user`
- Description: Delete all users.
- Response:
  - Success: 200 OK
  - Error: 500 Internal Server Error

### Delete User by ID

- URL: `DELETE /api/user/:id`
- Description: Delete a user by their ID.
- Request Parameters:
  - `id` (string, required): ID of the user to delete.
- Response:
  - Success: 200 OK
  - Error: 400 Bad Request (invalid ID format), 404 Not Found (user not found), 500 Internal Server Error

### Delete Users with Same Name

- URL: `DELETE /api/user/name/:name`
- Description: Delete users with the same name.
- Request Parameters:
  - `name` (string, required): Name of the users to delete.
- Response:
  - Success: 200 OK
  - Error: 500 Internal Server Error
