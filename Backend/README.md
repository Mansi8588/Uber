# API Documentation

## Endpoint: `/user/register`

### Description
This endpoint is used to register a new user in the system.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

#### Success
- **Status Code:** `201 Created`
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

Example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f1c2e5b5d6c9a1e8f7a123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

#### User Already Exists
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "message": "User already exist"
  }
  ```

### Notes
- Ensure the `Content-Type` header is set to `application/json` when making the request.
- The `token` in the response is a JWT token that can be used for authentication in subsequent requests.

## Endpoint: `/users/login`

### Description
This endpoint is used to log in a user with their email and password.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes
- Ensure the `Content-Type` header is set to `application/json` when making the request.
- The `token` in the response is a JWT token that can be used for authentication in subsequent requests.

## Endpoint: `/users/profile`

### Description
This endpoint is used to retrieve the profile of the currently authenticated user.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Unauthorized
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes
- Ensure the `Authorization` header is set with a valid JWT token.

## Endpoint: `/users/logout`

### Description
This endpoint is used to log out the currently authenticated user.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Unauthorized
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes
- This endpoint invalidates the token by adding it to a blacklist.
- Ensure the `Authorization` header is set with a valid JWT token.

## Endpoint: `/captains/register`

### Description
This endpoint is used to register a new captain in the system.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `fullname.firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle.color` (string, required): The color of the captain's vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, required): The license plate of the captain's vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (integer, required): The capacity of the captain's vehicle. Must be at least 1.
- `vehicle.vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code:** `201 Created`
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

#### Captain Already Exists
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "message": "Captain already exist"
  }
  ```

### Notes
- Ensure the `Content-Type` header is set to `application/json` when making the request.
- The `token` in the response is a JWT token that can be used for authentication in subsequent requests.

---

## Endpoint: `/captains/login`

### Description
This endpoint is used to log in a captain with their email and password.

### Method
`POST`

### Request Body
The following fields are required in the request body:
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.

Example:
```json
{
  "email": "jane.doe@example.com",
  "password": "securepassword"
}
```

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes
- Ensure the `Content-Type` header is set to `application/json` when making the request.
- The `token` in the response is a JWT token that can be used for authentication in subsequent requests.

---

## Endpoint: `/captains/profile`

### Description
This endpoint is used to retrieve the profile of the currently authenticated captain.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Unauthorized
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes
- Ensure the `Authorization` header is set with a valid JWT token.

---

## Endpoint: `/captains/logout`

### Description
This endpoint is used to log out the currently authenticated captain.

### Method
`GET`

### Headers
- `Authorization` (string, required): Bearer token for authentication.

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "message": "Logout successfully"
  }
  ```

#### Unauthorized
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Notes
- This endpoint invalidates the token by adding it to a blacklist.
- Ensure the `Authorization` header is set with a valid JWT token.
