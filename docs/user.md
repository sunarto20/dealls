# This document to describe API Spec For User Authentication

## Register User

- Endpoint : /api/v1/users
- Method : POST

Request Body :

```json
{
  "username": "sunarto123",
  "password": "sunartopassword",
  "name": "Sunarto"
}
```

Response Body (Success) :

- Status Code = 201

```json
{
  "data": {
    "username": "sunarto123",
    "name": "Sunarto"
  }
}
```

Reponse Body (Failed)

- Status Code = 400

```json
{
  "errors": "Username must not blank, ......"
}
```

## Login User

- Endpoint : /api/v1/login
- Method : POST

Request Body :

```json
{
  "username": "sunarto123",
  "password": "sunartopassword"
}
```

Response Body (Success) :

- Status Code = 200

```json
{
  "data": {
    "id": 1,
    "username": "sunarto123",
    "name": "Sunarto"
  }
}
```

Reponse Body (Failed)

- Status Code = 400

```json
{
  "errors": "Username or Password wrong"
}
```

## Logout User

- Endpoint : /api/v1/logout
- Method : DELETE

Request Body :

```json
{
  "id": 1
}
```

Response Body (Success) :

- Status Code = 200

```json
{
  "data": "OK"
}
```

Reponse Body (Failed)

- Status Code = 200

```json
{
  "errors": "Unauthorized"
}
```
