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

# User Profile Endpoint
## Endpoint: /users/profile
## Method: GET
### Description:
This endpoint is used to get the profile of the logged-in user. It requires authentication and returns the user's details.

###  Responses:
Success (200 OK):
Description: User profile retrieved successfully.
``` json     
{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
 ```
# User Logout Endpoint
## Endpoint: /users/logout
## Method: GET
### Description:
This endpoint is used to log out the user. It clears the authentication token and blacklists it.

### Responses:
Success (200 OK):
Description: User logged out successfully.
Body:
```json     
{
  "message": "Logged out successfully"
}
```
# Captain Registration Endpoint
## Endpoint: /captains/register
## Method: POST
### Description:
This endpoint is used to register a new captain. It validates the input data, hashes the captain's password, creates a new captain in the database, and returns a JSON response with the captain details and an authentication token.

### Request Body:
The request body should be a JSON object with the following fields:

fullname: An object containing:
firstname: A string with a minimum length of 3 characters.
lastname: A string with a minimum length of 3 characters.
email: A valid email address.
password: A string with a minimum length of 6 characters.
vehicle: An object containing:
color: A string with a minimum length of 3 characters.
plate: A string with a minimum length of 3 characters.
capacity: An integer with a minimum value of 1.
vehicleType: A string that must be either 'car', 'bike', or 'auto'.
Example:

``` json   
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
 ```

### Responses:
Success (201 Created):
Description: Captain registered successfully.
Body
``` json  
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "hashed_password",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "offline",
    "socketId": null
  },
  "token": "auth_token"
}
  ```

# Captain Profile Endpoint
## Endpoint: /captains/profile
### Method: GET
### Description:
This endpoint is used to get the profile of the logged-in captain. It requires authentication and returns the captain's details.

### Responses:
Success (200 OK):
Description: Captain profile retrieved successfully.
Body:

``` json    

{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "offline",
    "socketId": null
  }
}
```
# Captain Logout Endpoint
## Endpoint: /captains/logout
### Method: GET
### Description:
This endpoint is used to log out the captain. It clears the authentication token and blacklists it.

### Responses:
Success (200 OK):
Description: Captain logged out successfully.
Body
``` json
{
  "message": "Captain logged out successfully"
}
 ```
### Error (401 Unauthorized):
Description: Unauthorized access.
Body:
``` json 
{
  "message": "unauthorized access"
}
```