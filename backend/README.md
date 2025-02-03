# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the user's password, creates a new user in the database, and returns a JSON response with the user details and an authentication token.

### Request Body:
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:
### Success (201 Created):
### Description: User registered successfully.

``` json
{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password",
    "socketId": null
  },
  "token": "auth_token"
}
```
# User Login Endpoint
## Endpoint: /users/login
## Method: POST
### Description:
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON response with the user details and an authentication token.

### Request Body:
The request body should be a JSON object with the following fields:

### email: A valid email address.
### password: A string with a minimum length of 6 characters.

``` json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```
### Responses:
Success (200 OK):
Description: User logged in successfully.
``` json 
{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password",
    "socketId": null
  },
  "token": "auth_token"
}
```

### Error (400 Bad Request):
Description: Validation errors or missing required fields.
``` json 
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```
### Error (401 Unauthorized):
Description: Invalid email or password.
``` json 
{
  "message": "Invalid email or password"
}
```