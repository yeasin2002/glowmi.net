# Skin Care API

- **OpenAPI Version:** `3.1.1`
- **API Version:** `v1`

API documentation for my project

## Servers

- **URL:** `https://being-screening-configured-talked.trycloudflare.com/`

## Operations

### POST /accountapi/forget-password/reset/

- **Method:** `POST`
- **Path:** `/accountapi/forget-password/reset/`
- **Tags:** Forget Password

Reset the user's password after OTP verification

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

- **`new_password` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "new_password": ""
}
```

#### Responses

##### Status: 200 Password reset successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "Password reset successfully.",
  "data": {}
}
```

### POST /accountapi/forget-password/send-otp/

- **Method:** `POST`
- **Path:** `/accountapi/forget-password/send-otp/`
- **Tags:** Forget Password

Send OTP to user email for password reset

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

**Example:**

```json
{
  "email": ""
}
```

#### Responses

##### Status: 201 OTP sent successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "OTP sent successfully.",
  "data": {}
}
```

### POST /accountapi/forget-password/verify-otp/

- **Method:** `POST`
- **Path:** `/accountapi/forget-password/verify-otp/`
- **Tags:** Forget Password

Verify the OTP sent to the user's email

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

- **`otp` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "otp": ""
}
```

#### Responses

##### Status: 200 OTP verified successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "OTP verified successfully.",
  "data": {}
}
```

### POST /accountapi/login/

- **Method:** `POST`
- **Path:** `/accountapi/login/`
- **Tags:** Authentication

Authenticate a user with email and password, returning JWT access and refresh tokens along with user details.

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`

- **`password` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "password": ""
}
```

#### Responses

##### Status: 201 User registered successfully

###### Content-Type: application/json

- **`data`**

  `object`

  - **`access_token`**

    `string`

  - **`refresh_token`**

    `string`

  - **`user`**

    `object`

    - **`date_of_birth`**

      `string`, format: `date`

    - **`email`**

      `string`

    - **`full_name`**

      `string`

    - **`gender`**

      `string`

    - **`id`**

      `integer`

    - **`image`**

      `string`

    - **`role`**

      `string`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "",
  "data": {
    "access_token": "",
    "refresh_token": "",
    "user": {
      "id": 1,
      "email": "",
      "role": "",
      "full_name": "",
      "gender": "",
      "date_of_birth": "",
      "image": ""
    }
  }
}
```

### POST /accountapi/password-change/

- **Method:** `POST`
- **Path:** `/accountapi/password-change/`
- **Tags:** Authentication

Change the current user's password using old and new password.

#### Request Body

##### Content-Type: application/json

- **`new_password` (required)**

  `string`

- **`old_password` (required)**

  `string`

**Example:**

```json
{
  "old_password": "",
  "new_password": ""
}
```

#### Responses

##### Status: 200 Password updated successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "Password updated successfully",
  "data": {}
}
```

### GET /accountapi/privacy-policy

- **Method:** `GET`
- **Path:** `/accountapi/privacy-policy`
- **Tags:** accountapi

#### Responses

##### Status: 200

### GET /accountapi/privacy-policy/

- **Method:** `GET`
- **Path:** `/accountapi/privacy-policy/`
- **Tags:** accountapi

#### Responses

##### Status: 200

### GET /accountapi/profile/

- **Method:** `GET`
- **Path:** `/accountapi/profile/`
- **Tags:** Profile

Get logged-in user's profile details.

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`contact_number`**

  `string`

- **`date_of_birth`**

  `string`, format: `date`

- **`email`**

  `string`, format: `email`

- **`full_name`**

  `string`

- **`gender`**

  `string`, possible values: `"male", "female", "other"`

- **`image`**

  `string`, format: `uri`

- **`role`**

  `string`

- **`skin_type`**

  `string`

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "role": "",
  "image": "",
  "gender": "male",
  "date_of_birth": "",
  "contact_number": "",
  "skin_type": ""
}
```

### PATCH /accountapi/profile/

- **Method:** `PATCH`
- **Path:** `/accountapi/profile/`
- **Tags:** Profile

Update logged-in user's profile. Supports partial updates.

#### Request Body

##### Content-Type: multipart/form-data

- **`date_of_birth`**

  `string`, format: `date`

- **`email`**

  `string`, format: `email`

- **`full_name`**

  `string`

- **`gender`**

  `string`

- **`image`**

  `string`

**Example:**

```json
{
  "email": "",
  "full_name": "",
  "gender": "",
  "date_of_birth": "",
  "image": ""
}
```

##### Content-Type: application/x-www-form-urlencoded

- **`date_of_birth`**

  `string`, format: `date`

- **`email`**

  `string`, format: `email`

- **`full_name`**

  `string`

- **`gender`**

  `string`

- **`image`**

  `string`

**Example:**

```json
{
  "email": "",
  "full_name": "",
  "gender": "",
  "date_of_birth": "",
  "image": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`contact_number`**

  `string`

- **`date_of_birth`**

  `string`, format: `date`

- **`email`**

  `string`, format: `email`

- **`full_name`**

  `string`

- **`gender`**

  `string`, possible values: `"male", "female", "other"`

- **`image`**

  `string`, format: `uri`

- **`role`**

  `string`

- **`skin_type`**

  `string`

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "role": "",
  "image": "",
  "gender": "male",
  "date_of_birth": "",
  "contact_number": "",
  "skin_type": ""
}
```

### POST /accountapi/refresh/

- **Method:** `POST`
- **Path:** `/accountapi/refresh/`
- **Tags:** Authentication

Refresh JWT access token using a valid refresh token.

#### Request Body

##### Content-Type: application/json

- **`refresh` (required)**

  `string`

- **`access`**

  `string`

**Example:**

```json
{
  "refresh": "",
  "access": ""
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`refresh` (required)**

  `string`

- **`access`**

  `string`

**Example:**

```json
{
  "refresh": "",
  "access": ""
}
```

### POST /accountapi/register/

- **Method:** `POST`
- **Path:** `/accountapi/register/`
- **Tags:** Authentication

Register a new user and return JWT tokens

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

- **`password` (required)**

  `string`

- **`contact_number`**

  `string`

- **`date_of_birth`**

  `string`, format: `date`

- **`full_name`**

  `string`

- **`gender`**

  `string`

- **`image`**

  `string`, format: `uri`

- **`skin_type`**

  `string`

**Example:**

```json
{
  "email": "",
  "password": "",
  "full_name": "",
  "gender": "",
  "contact_number": "",
  "date_of_birth": "",
  "skin_type": "",
  "image": ""
}
```

#### Responses

##### Status: 201 User registered successfully

###### Content-Type: application/json

- **`data`**

  `object`

  - **`email`**

    `string`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "",
  "data": {
    "email": ""
  }
}
```

### GET /accountapi/terms-and-conditions

- **Method:** `GET`
- **Path:** `/accountapi/terms-and-conditions`
- **Tags:** accountapi

#### Responses

##### Status: 200

### GET /accountapi/terms-and-conditions/

- **Method:** `GET`
- **Path:** `/accountapi/terms-and-conditions/`
- **Tags:** accountapi

#### Responses

##### Status: 200

### POST /accountapi/verify-registration/

- **Method:** `POST`
- **Path:** `/accountapi/verify-registration/`
- **Tags:** Authentication

Verify OTP for user registration and activate user

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

- **`otp` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "otp": ""
}
```

#### Responses

##### Status: 200 User activated successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "",
  "data": {}
}
```

### Retrieve a category

- **Method:** `GET`
- **Path:** `/adminapi/categorie/{id}/`
- **Tags:** Category

Endpoint to get a single category by ID. Only accessible by admin users.

#### Responses

##### Status: 200 Category fetched successfully

###### Content-Type: application/json

- **`name` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`image`**

  `string`, format: `uri`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "name": "",
  "image": "",
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 404 Not Found

### Update a category

- **Method:** `PATCH`
- **Path:** `/adminapi/categorie/{id}/`
- **Tags:** Category

Endpoint to update an existing category by ID. Only accessible by admin users.

#### Request Body

##### Content-Type: multipart/form-data

- **`name` (required)**

  `string`

- **`image`**

  `string`

**Example:**

```json
{
  "name": "",
  "image": ""
}
```

##### Content-Type: application/x-www-form-urlencoded

- **`name` (required)**

  `string`

- **`image`**

  `string`

**Example:**

```json
{
  "name": "",
  "image": ""
}
```

#### Responses

##### Status: 200 Category updated successfully

###### Content-Type: application/json

- **`name` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`image`**

  `string`, format: `uri`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "name": "",
  "image": "",
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 400 Bad Request

##### Status: 404 Not Found

### Delete a category

- **Method:** `DELETE`
- **Path:** `/adminapi/categorie/{id}/`
- **Tags:** Category

Endpoint to delete a category by ID. Only accessible by admin users.

#### Responses

##### Status: 204 Category deleted successfully

##### Status: 404 Not Found

### GET /adminapi/category/

- **Method:** `GET`
- **Path:** `/adminapi/category/`
- **Tags:** adminapi

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`count` (required)**

  `integer`

- **`results` (required)**

  `array`

  **Items:**

  - **`name` (required)**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

  - **`updated_at`**

    `string`, format: `date-time`

- **`next`**

  `string`, format: `uri`

- **`previous`**

  `string`, format: `uri`

**Example:**

```json
{
  "count": 1,
  "next": "",
  "previous": "",
  "results": [
    {
      "id": 1,
      "name": "",
      "image": "",
      "created_at": "",
      "updated_at": ""
    }
  ]
}
```

### POST /adminapi/category/

- **Method:** `POST`
- **Path:** `/adminapi/category/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`name` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`image`**

  `string`, format: `uri`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "name": "",
  "image": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`name` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`image`**

  `string`, format: `uri`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "name": "",
  "image": "",
  "created_at": "",
  "updated_at": ""
}
```

### GET /adminapi/privacy-policy/

- **Method:** `GET`
- **Path:** `/adminapi/privacy-policy/`
- **Tags:** adminapi

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`count` (required)**

  `integer`

- **`results` (required)**

  `array`

  **Items:**

  - **`content` (required)**

    `string`

  - **`title` (required)**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`id`**

    `integer`

  - **`updated_at`**

    `string`, format: `date-time`

- **`next`**

  `string`, format: `uri`

- **`previous`**

  `string`, format: `uri`

**Example:**

```json
{
  "count": 1,
  "next": "",
  "previous": "",
  "results": [
    {
      "id": 1,
      "title": "",
      "content": "",
      "created_at": "",
      "updated_at": ""
    }
  ]
}
```

### POST /adminapi/privacy-policy/

- **Method:** `POST`
- **Path:** `/adminapi/privacy-policy/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### PUT /adminapi/privacy-policy/

- **Method:** `PUT`
- **Path:** `/adminapi/privacy-policy/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### PATCH /adminapi/privacy-policy/

- **Method:** `PATCH`
- **Path:** `/adminapi/privacy-policy/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### DELETE /adminapi/privacy-policy/

- **Method:** `DELETE`
- **Path:** `/adminapi/privacy-policy/`
- **Tags:** adminapi

#### Responses

##### Status: 204

### GET /adminapi/privacy-policy/{id}/

- **Method:** `GET`
- **Path:** `/adminapi/privacy-policy/{id}/`
- **Tags:** adminapi

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`count` (required)**

  `integer`

- **`results` (required)**

  `array`

  **Items:**

  - **`content` (required)**

    `string`

  - **`title` (required)**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`id`**

    `integer`

  - **`updated_at`**

    `string`, format: `date-time`

- **`next`**

  `string`, format: `uri`

- **`previous`**

  `string`, format: `uri`

**Example:**

```json
{
  "count": 1,
  "next": "",
  "previous": "",
  "results": [
    {
      "id": 1,
      "title": "",
      "content": "",
      "created_at": "",
      "updated_at": ""
    }
  ]
}
```

### POST /adminapi/privacy-policy/{id}/

- **Method:** `POST`
- **Path:** `/adminapi/privacy-policy/{id}/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### PUT /adminapi/privacy-policy/{id}/

- **Method:** `PUT`
- **Path:** `/adminapi/privacy-policy/{id}/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### PATCH /adminapi/privacy-policy/{id}/

- **Method:** `PATCH`
- **Path:** `/adminapi/privacy-policy/{id}/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### DELETE /adminapi/privacy-policy/{id}/

- **Method:** `DELETE`
- **Path:** `/adminapi/privacy-policy/{id}/`
- **Tags:** adminapi

#### Responses

##### Status: 204

### get all products

- **Method:** `GET`
- **Path:** `/adminapi/product/`
- **Tags:** Product

Endpoint to get all products. Only accessible by admin users.

#### Responses

##### Status: 200 Product list fetched successfully

###### Content-Type: application/json

**Array of:**

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
[
  {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  }
]
```

### Create a new product

- **Method:** `POST`
- **Path:** `/adminapi/product/`
- **Tags:** Product

Endpoint to create a new product. Only accessible by admin users.

#### Responses

##### Status: 201 Product created successfully

###### Content-Type: application/json

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 400 Bad Request

### get a product

- **Method:** `GET`
- **Path:** `/adminapi/products/{id}/`
- **Tags:** Product

Endpoint to get a product. Only accessible by admin users.

#### Responses

##### Status: 200 Product fetched successfully

###### Content-Type: application/json

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 404 Product not found

### Update a product

- **Method:** `PATCH`
- **Path:** `/adminapi/products/{id}/`
- **Tags:** Product

Endpoint to update a product. Only accessible by admin users.

#### Responses

##### Status: 200 Product updated successfully

###### Content-Type: application/json

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 400 Bad Request

##### Status: 404 Product not found

### Delete a product

- **Method:** `DELETE`
- **Path:** `/adminapi/products/{id}/`
- **Tags:** Product

Endpoint to delete a product. Only accessible by admin users.

#### Responses

##### Status: 204 Product deleted successfully

##### Status: 404 Product not found

### GET /adminapi/terms-and-conditions/

- **Method:** `GET`
- **Path:** `/adminapi/terms-and-conditions/`
- **Tags:** adminapi

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`count` (required)**

  `integer`

- **`results` (required)**

  `array`

  **Items:**

  - **`content` (required)**

    `string`

  - **`title` (required)**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`id`**

    `integer`

  - **`updated_at`**

    `string`, format: `date-time`

- **`next`**

  `string`, format: `uri`

- **`previous`**

  `string`, format: `uri`

**Example:**

```json
{
  "count": 1,
  "next": "",
  "previous": "",
  "results": [
    {
      "id": 1,
      "title": "",
      "content": "",
      "created_at": "",
      "updated_at": ""
    }
  ]
}
```

### POST /adminapi/terms-and-conditions/

- **Method:** `POST`
- **Path:** `/adminapi/terms-and-conditions/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### PUT /adminapi/terms-and-conditions/

- **Method:** `PUT`
- **Path:** `/adminapi/terms-and-conditions/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### PATCH /adminapi/terms-and-conditions/

- **Method:** `PATCH`
- **Path:** `/adminapi/terms-and-conditions/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### DELETE /adminapi/terms-and-conditions/

- **Method:** `DELETE`
- **Path:** `/adminapi/terms-and-conditions/`
- **Tags:** adminapi

#### Responses

##### Status: 204

### GET /adminapi/terms-and-conditions/{id}/

- **Method:** `GET`
- **Path:** `/adminapi/terms-and-conditions/{id}/`
- **Tags:** adminapi

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`count` (required)**

  `integer`

- **`results` (required)**

  `array`

  **Items:**

  - **`content` (required)**

    `string`

  - **`title` (required)**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`id`**

    `integer`

  - **`updated_at`**

    `string`, format: `date-time`

- **`next`**

  `string`, format: `uri`

- **`previous`**

  `string`, format: `uri`

**Example:**

```json
{
  "count": 1,
  "next": "",
  "previous": "",
  "results": [
    {
      "id": 1,
      "title": "",
      "content": "",
      "created_at": "",
      "updated_at": ""
    }
  ]
}
```

### POST /adminapi/terms-and-conditions/{id}/

- **Method:** `POST`
- **Path:** `/adminapi/terms-and-conditions/{id}/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### PUT /adminapi/terms-and-conditions/{id}/

- **Method:** `PUT`
- **Path:** `/adminapi/terms-and-conditions/{id}/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### PATCH /adminapi/terms-and-conditions/{id}/

- **Method:** `PATCH`
- **Path:** `/adminapi/terms-and-conditions/{id}/`
- **Tags:** adminapi

#### Request Body

##### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`content` (required)**

  `string`

- **`title` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### DELETE /adminapi/terms-and-conditions/{id}/

- **Method:** `DELETE`
- **Path:** `/adminapi/terms-and-conditions/{id}/`
- **Tags:** adminapi

#### Responses

##### Status: 204

### GET /adminapi/users/

- **Method:** `GET`
- **Path:** `/adminapi/users/`
- **Tags:** adminapi

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`count` (required)**

  `integer`

- **`results` (required)**

  `array`

  **Items:**

  - **`email` (required)**

    `string`, format: `email`

  - **`birth_date`**

    `string`, format: `date`

  - **`contact_number`**

    `string`

  - **`membership_id`**

    `string`

  - **`name`**

    `string`

  - **`skin_type`**

    `string`

- **`next`**

  `string`, format: `uri`

- **`previous`**

  `string`, format: `uri`

**Example:**

```json
{
  "count": 1,
  "next": "",
  "previous": "",
  "results": [
    {
      "membership_id": "",
      "name": "",
      "email": "",
      "contact_number": "",
      "skin_type": "",
      "birth_date": ""
    }
  ]
}
```

### DELETE /adminapi/users/{id}/delete/

- **Method:** `DELETE`
- **Path:** `/adminapi/users/{id}/delete/`
- **Tags:** adminapi

#### Responses

##### Status: 204

### POST /forget-password/reset/

- **Method:** `POST`
- **Path:** `/forget-password/reset/`
- **Tags:** Forget Password

Reset the user's password after OTP verification

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

- **`new_password` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "new_password": ""
}
```

#### Responses

##### Status: 200 Password reset successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "Password reset successfully.",
  "data": {}
}
```

### POST /forget-password/send-otp/

- **Method:** `POST`
- **Path:** `/forget-password/send-otp/`
- **Tags:** Forget Password

Send OTP to user email for password reset

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

**Example:**

```json
{
  "email": ""
}
```

#### Responses

##### Status: 201 OTP sent successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "OTP sent successfully.",
  "data": {}
}
```

### POST /forget-password/verify-otp/

- **Method:** `POST`
- **Path:** `/forget-password/verify-otp/`
- **Tags:** Forget Password

Verify the OTP sent to the user's email

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

- **`otp` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "otp": ""
}
```

#### Responses

##### Status: 200 OTP verified successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "OTP verified successfully.",
  "data": {}
}
```

### POST /login/

- **Method:** `POST`
- **Path:** `/login/`
- **Tags:** Authentication

Authenticate a user with email and password, returning JWT access and refresh tokens along with user details.

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`

- **`password` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "password": ""
}
```

#### Responses

##### Status: 201 User registered successfully

###### Content-Type: application/json

- **`data`**

  `object`

  - **`access_token`**

    `string`

  - **`refresh_token`**

    `string`

  - **`user`**

    `object`

    - **`date_of_birth`**

      `string`, format: `date`

    - **`email`**

      `string`

    - **`full_name`**

      `string`

    - **`gender`**

      `string`

    - **`id`**

      `integer`

    - **`image`**

      `string`

    - **`role`**

      `string`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "",
  "data": {
    "access_token": "",
    "refresh_token": "",
    "user": {
      "id": 1,
      "email": "",
      "role": "",
      "full_name": "",
      "gender": "",
      "date_of_birth": "",
      "image": ""
    }
  }
}
```

### POST /password-change/

- **Method:** `POST`
- **Path:** `/password-change/`
- **Tags:** Authentication

Change the current user's password using old and new password.

#### Request Body

##### Content-Type: application/json

- **`new_password` (required)**

  `string`

- **`old_password` (required)**

  `string`

**Example:**

```json
{
  "old_password": "",
  "new_password": ""
}
```

#### Responses

##### Status: 200 Password updated successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "Password updated successfully",
  "data": {}
}
```

### GET /privacy-policy

- **Method:** `GET`
- **Path:** `/privacy-policy`
- **Tags:** privacy-policy

#### Responses

##### Status: 200

### GET /privacy-policy/

- **Method:** `GET`
- **Path:** `/privacy-policy/`
- **Tags:** privacy-policy

#### Responses

##### Status: 200

### get all products

- **Method:** `GET`
- **Path:** `/productapi/products/`
- **Tags:** Product

Endpoint to get all products. Only accessible by admin users.

#### Responses

##### Status: 200 Product list fetched successfully

###### Content-Type: application/json

**Array of:**

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
[
  {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  }
]
```

### Create a new product

- **Method:** `POST`
- **Path:** `/productapi/products/`
- **Tags:** Product

Endpoint to create a new product. Only accessible by admin users.

#### Responses

##### Status: 201 Product created successfully

###### Content-Type: application/json

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 400 Bad Request

### get best products

- **Method:** `GET`
- **Path:** `/productapi/products/best/`
- **Tags:** Product

Endpoint to get best products based on order\_count sorted from max to min.

#### Responses

##### Status: 200 Best products list fetched successfully

###### Content-Type: application/json

**Array of:**

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
[
  {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  }
]
```

### get all products

- **Method:** `GET`
- **Path:** `/productapi/products/user/`
- **Tags:** Product

Endpoint to get all products. Only accessible by regular users.

#### Responses

##### Status: 200 Product list fetched successfully

###### Content-Type: application/json

**Array of:**

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
[
  {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  }
]
```

### get a product

- **Method:** `GET`
- **Path:** `/productapi/products/user/{id}/`
- **Tags:** Product

Endpoint to get a product. Only accessible by regular users.

#### Responses

##### Status: 200 Product fetched successfully

###### Content-Type: application/json

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 404 Product not found

### get a product

- **Method:** `GET`
- **Path:** `/productapi/products/{id}/`
- **Tags:** Product

Endpoint to get a product. Only accessible by admin users.

#### Responses

##### Status: 200 Product fetched successfully

###### Content-Type: application/json

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 404 Product not found

### Update a product

- **Method:** `PATCH`
- **Path:** `/productapi/products/{id}/`
- **Tags:** Product

Endpoint to update a product. Only accessible by admin users.

#### Responses

##### Status: 200 Product updated successfully

###### Content-Type: application/json

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 400 Bad Request

##### Status: 404 Product not found

### Delete a product

- **Method:** `DELETE`
- **Path:** `/productapi/products/{id}/`
- **Tags:** Product

Endpoint to delete a product. Only accessible by admin users.

#### Responses

##### Status: 204 Product deleted successfully

##### Status: 404 Product not found

### get all products

- **Method:** `GET`
- **Path:** `/productapi/user/products/`
- **Tags:** Product

Endpoint to get all products. Only accessible by regular users.

#### Responses

##### Status: 200 Product list fetched successfully

###### Content-Type: application/json

**Array of:**

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
[
  {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  }
]
```

### get a product details

- **Method:** `GET`
- **Path:** `/productapi/user/products/{id}/`
- **Tags:** Product

Endpoint to get a product details with related products. Accessible by all users.

#### Responses

##### Status: 200 Product details fetched successfully

###### Content-Type: application/json

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`related_products`**

  `string`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": "",
  "related_products": ""
}
```

##### Status: 404 Product not found

### GET /profile/

- **Method:** `GET`
- **Path:** `/profile/`
- **Tags:** Profile

Get logged-in user's profile details.

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`contact_number`**

  `string`

- **`date_of_birth`**

  `string`, format: `date`

- **`email`**

  `string`, format: `email`

- **`full_name`**

  `string`

- **`gender`**

  `string`, possible values: `"male", "female", "other"`

- **`image`**

  `string`, format: `uri`

- **`role`**

  `string`

- **`skin_type`**

  `string`

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "role": "",
  "image": "",
  "gender": "male",
  "date_of_birth": "",
  "contact_number": "",
  "skin_type": ""
}
```

### PATCH /profile/

- **Method:** `PATCH`
- **Path:** `/profile/`
- **Tags:** Profile

Update logged-in user's profile. Supports partial updates.

#### Request Body

##### Content-Type: multipart/form-data

- **`date_of_birth`**

  `string`, format: `date`

- **`email`**

  `string`, format: `email`

- **`full_name`**

  `string`

- **`gender`**

  `string`

- **`image`**

  `string`

**Example:**

```json
{
  "email": "",
  "full_name": "",
  "gender": "",
  "date_of_birth": "",
  "image": ""
}
```

##### Content-Type: application/x-www-form-urlencoded

- **`date_of_birth`**

  `string`, format: `date`

- **`email`**

  `string`, format: `email`

- **`full_name`**

  `string`

- **`gender`**

  `string`

- **`image`**

  `string`

**Example:**

```json
{
  "email": "",
  "full_name": "",
  "gender": "",
  "date_of_birth": "",
  "image": ""
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`contact_number`**

  `string`

- **`date_of_birth`**

  `string`, format: `date`

- **`email`**

  `string`, format: `email`

- **`full_name`**

  `string`

- **`gender`**

  `string`, possible values: `"male", "female", "other"`

- **`image`**

  `string`, format: `uri`

- **`role`**

  `string`

- **`skin_type`**

  `string`

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "role": "",
  "image": "",
  "gender": "male",
  "date_of_birth": "",
  "contact_number": "",
  "skin_type": ""
}
```

### POST /refresh/

- **Method:** `POST`
- **Path:** `/refresh/`
- **Tags:** Authentication

Refresh JWT access token using a valid refresh token.

#### Request Body

##### Content-Type: application/json

- **`refresh` (required)**

  `string`

- **`access`**

  `string`

**Example:**

```json
{
  "refresh": "",
  "access": ""
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`refresh` (required)**

  `string`

- **`access`**

  `string`

**Example:**

```json
{
  "refresh": "",
  "access": ""
}
```

### POST /register/

- **Method:** `POST`
- **Path:** `/register/`
- **Tags:** Authentication

Register a new user and return JWT tokens

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

- **`password` (required)**

  `string`

- **`contact_number`**

  `string`

- **`date_of_birth`**

  `string`, format: `date`

- **`full_name`**

  `string`

- **`gender`**

  `string`

- **`image`**

  `string`, format: `uri`

- **`skin_type`**

  `string`

**Example:**

```json
{
  "email": "",
  "password": "",
  "full_name": "",
  "gender": "",
  "contact_number": "",
  "date_of_birth": "",
  "skin_type": "",
  "image": ""
}
```

#### Responses

##### Status: 201 User registered successfully

###### Content-Type: application/json

- **`data`**

  `object`

  - **`email`**

    `string`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "",
  "data": {
    "email": ""
  }
}
```

### Show user's cart

- **Method:** `GET`
- **Path:** `/shop/cart/`
- **Tags:** Shop

Get the current authenticated user's cart items and total price.

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`id`**

  `integer`

- **`items`**

  `array`

  **Items:**

  - **`product_id` (required)**

    `integer`

  - **`id`**

    `integer`

  - **`product`**

    `object`

    - **`category` (required)**

      `integer`

    - **`price` (required)**

      `string`, format: `decimal`

    - **`title` (required)**

      `string`

    - **`category_name`**

      `string`

    - **`created_at`**

      `string`, format: `date-time`

    - **`description`**

      `string`

    - **`discount`**

      `string`, format: `decimal` — Discount percentage or amount

    - **`how_to_use`**

      `string`

    - **`id`**

      `integer`

    - **`images`**

      `array`

      **Items:**

      - **`id`**

        `integer`

      - **`image`**

        `string`, format: `uri`

    - **`key_benefits`**

      `string`

    - **`key_ingredients`**

      `string`

    - **`order_count`**

      `integer`

    - **`size`**

      `string`

    - **`skin_type`**

      `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

    - **`stock`**

      `integer`

    - **`sub_title`**

      `string`

    - **`updated_at`**

      `string`, format: `date-time`

  - **`quantity`**

    `integer`

  - **`subtotal`**

    `string`, format: `decimal`

- **`total_price`**

  `string`, format: `decimal`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "items": [
    {
      "id": 1,
      "product": null,
      "product_id": 1,
      "quantity": 0,
      "subtotal": ""
    }
  ],
  "total_price": "",
  "updated_at": ""
}
```

### Add item to cart

- **Method:** `POST`
- **Path:** `/shop/cart/`
- **Tags:** Shop

Add a product to the cart or increment quantity if already exists.

#### Request Body

##### Content-Type: application/json

- **`product_id` (required)**

  `integer`

- **`quantity`**

  `integer`, default: `1`

**Example:**

```json
{
  "product_id": 1,
  "quantity": 1
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`product_id` (required)**

  `integer`

- **`id`**

  `integer`

- **`product`**

  `object`

  - **`category` (required)**

    `integer`

  - **`price` (required)**

    `string`, format: `decimal`

  - **`title` (required)**

    `string`

  - **`category_name`**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`description`**

    `string`

  - **`discount`**

    `string`, format: `decimal` — Discount percentage or amount

  - **`how_to_use`**

    `string`

  - **`id`**

    `integer`

  - **`images`**

    `array`

    **Items:**

    - **`id`**

      `integer`

    - **`image`**

      `string`, format: `uri`

  - **`key_benefits`**

    `string`

  - **`key_ingredients`**

    `string`

  - **`order_count`**

    `integer`

  - **`size`**

    `string`

  - **`skin_type`**

    `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

  - **`stock`**

    `integer`

  - **`sub_title`**

    `string`

  - **`updated_at`**

    `string`, format: `date-time`

- **`quantity`**

  `integer`

- **`subtotal`**

  `string`, format: `decimal`

**Example:**

```json
{
  "id": 1,
  "product": {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  },
  "product_id": 1,
  "quantity": 0,
  "subtotal": ""
}
```

### Update cart item quantity

- **Method:** `PATCH`
- **Path:** `/shop/cart/`
- **Tags:** Shop

Update the quantity of a specific item in the cart.

#### Request Body

##### Content-Type: application/json

- **`quantity` (required)**

  `integer`

**Example:**

```json
{
  "quantity": 1
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`product_id` (required)**

  `integer`

- **`id`**

  `integer`

- **`product`**

  `object`

  - **`category` (required)**

    `integer`

  - **`price` (required)**

    `string`, format: `decimal`

  - **`title` (required)**

    `string`

  - **`category_name`**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`description`**

    `string`

  - **`discount`**

    `string`, format: `decimal` — Discount percentage or amount

  - **`how_to_use`**

    `string`

  - **`id`**

    `integer`

  - **`images`**

    `array`

    **Items:**

    - **`id`**

      `integer`

    - **`image`**

      `string`, format: `uri`

  - **`key_benefits`**

    `string`

  - **`key_ingredients`**

    `string`

  - **`order_count`**

    `integer`

  - **`size`**

    `string`

  - **`skin_type`**

    `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

  - **`stock`**

    `integer`

  - **`sub_title`**

    `string`

  - **`updated_at`**

    `string`, format: `date-time`

- **`quantity`**

  `integer`

- **`subtotal`**

  `string`, format: `decimal`

**Example:**

```json
{
  "id": 1,
  "product": {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  },
  "product_id": 1,
  "quantity": 0,
  "subtotal": ""
}
```

### Remove item from cart

- **Method:** `DELETE`
- **Path:** `/shop/cart/`
- **Tags:** Shop

Remove a specific item from the user's cart.

#### Responses

##### Status: 200 Item removed successfully

### Show user's cart

- **Method:** `GET`
- **Path:** `/shop/cart/items/{item_id}/`
- **Tags:** Shop

Get the current authenticated user's cart items and total price.

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`id`**

  `integer`

- **`items`**

  `array`

  **Items:**

  - **`product_id` (required)**

    `integer`

  - **`id`**

    `integer`

  - **`product`**

    `object`

    - **`category` (required)**

      `integer`

    - **`price` (required)**

      `string`, format: `decimal`

    - **`title` (required)**

      `string`

    - **`category_name`**

      `string`

    - **`created_at`**

      `string`, format: `date-time`

    - **`description`**

      `string`

    - **`discount`**

      `string`, format: `decimal` — Discount percentage or amount

    - **`how_to_use`**

      `string`

    - **`id`**

      `integer`

    - **`images`**

      `array`

      **Items:**

      - **`id`**

        `integer`

      - **`image`**

        `string`, format: `uri`

    - **`key_benefits`**

      `string`

    - **`key_ingredients`**

      `string`

    - **`order_count`**

      `integer`

    - **`size`**

      `string`

    - **`skin_type`**

      `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

    - **`stock`**

      `integer`

    - **`sub_title`**

      `string`

    - **`updated_at`**

      `string`, format: `date-time`

  - **`quantity`**

    `integer`

  - **`subtotal`**

    `string`, format: `decimal`

- **`total_price`**

  `string`, format: `decimal`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "items": [
    {
      "id": 1,
      "product": null,
      "product_id": 1,
      "quantity": 0,
      "subtotal": ""
    }
  ],
  "total_price": "",
  "updated_at": ""
}
```

### Add item to cart

- **Method:** `POST`
- **Path:** `/shop/cart/items/{item_id}/`
- **Tags:** Shop

Add a product to the cart or increment quantity if already exists.

#### Request Body

##### Content-Type: application/json

- **`product_id` (required)**

  `integer`

- **`quantity`**

  `integer`, default: `1`

**Example:**

```json
{
  "product_id": 1,
  "quantity": 1
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`product_id` (required)**

  `integer`

- **`id`**

  `integer`

- **`product`**

  `object`

  - **`category` (required)**

    `integer`

  - **`price` (required)**

    `string`, format: `decimal`

  - **`title` (required)**

    `string`

  - **`category_name`**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`description`**

    `string`

  - **`discount`**

    `string`, format: `decimal` — Discount percentage or amount

  - **`how_to_use`**

    `string`

  - **`id`**

    `integer`

  - **`images`**

    `array`

    **Items:**

    - **`id`**

      `integer`

    - **`image`**

      `string`, format: `uri`

  - **`key_benefits`**

    `string`

  - **`key_ingredients`**

    `string`

  - **`order_count`**

    `integer`

  - **`size`**

    `string`

  - **`skin_type`**

    `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

  - **`stock`**

    `integer`

  - **`sub_title`**

    `string`

  - **`updated_at`**

    `string`, format: `date-time`

- **`quantity`**

  `integer`

- **`subtotal`**

  `string`, format: `decimal`

**Example:**

```json
{
  "id": 1,
  "product": {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  },
  "product_id": 1,
  "quantity": 0,
  "subtotal": ""
}
```

### Update cart item quantity

- **Method:** `PATCH`
- **Path:** `/shop/cart/items/{item_id}/`
- **Tags:** Shop

Update the quantity of a specific item in the cart.

#### Request Body

##### Content-Type: application/json

- **`quantity` (required)**

  `integer`

**Example:**

```json
{
  "quantity": 1
}
```

#### Responses

##### Status: 200

###### Content-Type: application/json

- **`product_id` (required)**

  `integer`

- **`id`**

  `integer`

- **`product`**

  `object`

  - **`category` (required)**

    `integer`

  - **`price` (required)**

    `string`, format: `decimal`

  - **`title` (required)**

    `string`

  - **`category_name`**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`description`**

    `string`

  - **`discount`**

    `string`, format: `decimal` — Discount percentage or amount

  - **`how_to_use`**

    `string`

  - **`id`**

    `integer`

  - **`images`**

    `array`

    **Items:**

    - **`id`**

      `integer`

    - **`image`**

      `string`, format: `uri`

  - **`key_benefits`**

    `string`

  - **`key_ingredients`**

    `string`

  - **`order_count`**

    `integer`

  - **`size`**

    `string`

  - **`skin_type`**

    `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

  - **`stock`**

    `integer`

  - **`sub_title`**

    `string`

  - **`updated_at`**

    `string`, format: `date-time`

- **`quantity`**

  `integer`

- **`subtotal`**

  `string`, format: `decimal`

**Example:**

```json
{
  "id": 1,
  "product": {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  },
  "product_id": 1,
  "quantity": 0,
  "subtotal": ""
}
```

### Remove item from cart

- **Method:** `DELETE`
- **Path:** `/shop/cart/items/{item_id}/`
- **Tags:** Shop

Remove a specific item from the user's cart.

#### Responses

##### Status: 200 Item removed successfully

### Initiate Checkout

- **Method:** `POST`
- **Path:** `/shop/checkout/initiate/`
- **Tags:** Checkout

Create a pending order and get HyperPay checkoutId.

#### Request Body

##### Content-Type: application/json

- **`address_line1` (required)**

  `string`

- **`city` (required)**

  `string`

- **`email` (required)**

  `string`, format: `email`

- **`first_name` (required)**

  `string`

- **`last_name` (required)**

  `string`

- **`payment_brand` (required)**

  `string`, possible values: `"VISA", "MASTER", "MADA", "APPLEPAY", "TABBY", "TAMARA"`

- **`phone` (required)**

  `string`

- **`postal_code` (required)**

  `string`

- **`address_line2`**

  `string`

- **`country`**

  `string`, default: `"SA"`

- **`state`**

  `string`

**Example:**

```json
{
  "payment_brand": "VISA",
  "first_name": "",
  "last_name": "",
  "email": "",
  "phone": "",
  "address_line1": "",
  "address_line2": "",
  "city": "",
  "state": "",
  "postal_code": "",
  "country": "SA"
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`address_line1` (required)**

  `string`

- **`city` (required)**

  `string`

- **`email` (required)**

  `string`, format: `email`

- **`first_name` (required)**

  `string`

- **`last_name` (required)**

  `string`

- **`payment_brand` (required)**

  `string`, possible values: `"VISA", "MASTER", "MADA", "APPLEPAY", "TABBY", "TAMARA"`

- **`phone` (required)**

  `string`

- **`postal_code` (required)**

  `string`

- **`address_line2`**

  `string`

- **`country`**

  `string`, default: `"SA"`

- **`state`**

  `string`

**Example:**

```json
{
  "payment_brand": "VISA",
  "first_name": "",
  "last_name": "",
  "email": "",
  "phone": "",
  "address_line1": "",
  "address_line2": "",
  "city": "",
  "state": "",
  "postal_code": "",
  "country": "SA"
}
```

### Verify Payment Status

- **Method:** `POST`
- **Path:** `/shop/checkout/verify/`
- **Tags:** Checkout

Handle callback/redirect from HyperPay to verify the transaction.

#### Request Body

##### Content-Type: application/json

- **`resourcePath` (required)**

  `string` — The path returned by HyperPay redirect

**Example:**

```json
{
  "resourcePath": ""
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`resourcePath` (required)**

  `string` — The path returned by HyperPay redirect

**Example:**

```json
{
  "resourcePath": ""
}
```

### Generate AI Skin Routine

- **Method:** `POST`
- **Path:** `/shop/generate-routine/`
- **Tags:** Shop

Submit user skin profile to get an AI generated routine.

#### Request Body

##### Content-Type: application/json

- **`age` (required)**

  `integer`

- **`skin_type` (required)**

  `string`

- **`additional_details`**

  `string`

- **`concerns`**

  `array`

  **Items:**

  `string`

- **`photo`**

  `string`, format: `uri`

**Example:**

```json
{
  "skin_type": "",
  "age": 1,
  "concerns": [
    ""
  ],
  "additional_details": "",
  "photo": ""
}
```

#### Responses

##### Status: 201

###### Content-Type: application/json

- **`age` (required)**

  `integer`

- **`skin_type` (required)**

  `string`

- **`additional_details`**

  `string`

- **`concerns`**

  `array`

  **Items:**

  `string`

- **`photo`**

  `string`, format: `uri`

**Example:**

```json
{
  "skin_type": "",
  "age": 1,
  "concerns": [
    ""
  ],
  "additional_details": "",
  "photo": ""
}
```

### GET /terms-and-conditions

- **Method:** `GET`
- **Path:** `/terms-and-conditions`
- **Tags:** terms-and-conditions

#### Responses

##### Status: 200

### GET /terms-and-conditions/

- **Method:** `GET`
- **Path:** `/terms-and-conditions/`
- **Tags:** terms-and-conditions

#### Responses

##### Status: 200

### Get all categories

- **Method:** `GET`
- **Path:** `/userapi/categories/`
- **Tags:** Category

Endpoint to get a list of all categories. Accessible by regular users.

#### Responses

##### Status: 200 List of categories fetched successfully

###### Content-Type: application/json

**Array of:**

- **`name` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`image`**

  `string`, format: `uri`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
[
  {
    "id": 1,
    "name": "",
    "image": "",
    "created_at": "",
    "updated_at": ""
  }
]
```

### Get category details

- **Method:** `GET`
- **Path:** `/userapi/categories/{id}/`
- **Tags:** Category

Endpoint to get details of a single category by ID. Accessible by regular users.

#### Responses

##### Status: 200 Category details fetched successfully

###### Content-Type: application/json

- **`name` (required)**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`id`**

  `integer`

- **`image`**

  `string`, format: `uri`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "name": "",
  "image": "",
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 404 Not Found

### get all products

- **Method:** `GET`
- **Path:** `/userapi/products/`
- **Tags:** Product

Endpoint to get all products. Only accessible by regular users.

#### Responses

##### Status: 200 Product list fetched successfully

###### Content-Type: application/json

**Array of:**

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
[
  {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  }
]
```

### get a product

- **Method:** `GET`
- **Path:** `/userapi/products/{id}/`
- **Tags:** Product

Endpoint to get a product. Only accessible by regular users.

#### Responses

##### Status: 200 Product fetched successfully

###### Content-Type: application/json

- **`category` (required)**

  `integer`

- **`price` (required)**

  `string`, format: `decimal`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`description`**

  `string`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`how_to_use`**

  `string`

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`key_benefits`**

  `string`

- **`key_ingredients`**

  `string`

- **`order_count`**

  `integer`

- **`size`**

  `string`

- **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

- **`stock`**

  `integer`

- **`sub_title`**

  `string`

- **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 404 Product not found

### POST /verify-registration/

- **Method:** `POST`
- **Path:** `/verify-registration/`
- **Tags:** Authentication

Verify OTP for user registration and activate user

#### Request Body

##### Content-Type: application/json

- **`email` (required)**

  `string`, format: `email`

- **`otp` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "otp": ""
}
```

#### Responses

##### Status: 200 User activated successfully

###### Content-Type: application/json

- **`data`**

  `object`

- **`message`**

  `string`

- **`success`**

  `boolean`

**Example:**

```json
{
  "success": true,
  "message": "",
  "data": {}
}
```

## Schemas

### ResetPassword

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email`

* **`new_password` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "new_password": ""
}
```

### SendOTP

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email`

**Example:**

```json
{
  "email": ""
}
```

### VerifyOTP

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email`

* **`otp` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "otp": ""
}
```

### CustomTokenObtainPair

- **Type:**`object`

* **`email` (required)**

  `string`

* **`password` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "password": ""
}
```

### ChangePassword

- **Type:**`object`

* **`new_password` (required)**

  `string`

* **`old_password` (required)**

  `string`

**Example:**

```json
{
  "old_password": "",
  "new_password": ""
}
```

### Profile

- **Type:**`object`

* **`contact_number`**

  `string`

* **`date_of_birth`**

  `string`, format: `date`

* **`email`**

  `string`, format: `email`

* **`full_name`**

  `string`

* **`gender`**

  `string`, possible values: `"male", "female", "other"`

* **`image`**

  `string`, format: `uri`

* **`role`**

  `string`

* **`skin_type`**

  `string`

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "role": "",
  "image": "",
  "gender": "male",
  "date_of_birth": "",
  "contact_number": "",
  "skin_type": ""
}
```

### TokenRefresh

- **Type:**`object`

* **`refresh` (required)**

  `string`

* **`access`**

  `string`

**Example:**

```json
{
  "refresh": "",
  "access": ""
}
```

### Register

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email`

* **`password` (required)**

  `string`

* **`contact_number`**

  `string`

* **`date_of_birth`**

  `string`, format: `date`

* **`full_name`**

  `string`

* **`gender`**

  `string`

* **`image`**

  `string`, format: `uri`

* **`skin_type`**

  `string`

**Example:**

```json
{
  "email": "",
  "password": "",
  "full_name": "",
  "gender": "",
  "contact_number": "",
  "date_of_birth": "",
  "skin_type": "",
  "image": ""
}
```

### RegisterVerifyOTP

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email`

* **`otp` (required)**

  `string`

**Example:**

```json
{
  "email": "",
  "otp": ""
}
```

### Categorylistserializer

- **Type:**`object`

* **`name` (required)**

  `string`

* **`created_at`**

  `string`, format: `date-time`

* **`id`**

  `integer`

* **`image`**

  `string`, format: `uri`

* **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "name": "",
  "image": "",
  "created_at": "",
  "updated_at": ""
}
```

### PrivacyPolicyList

- **Type:**`object`

* **`content` (required)**

  `string`

* **`title` (required)**

  `string`

* **`created_at`**

  `string`, format: `date-time`

* **`id`**

  `integer`

* **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### ProductImage

- **Type:**`object`

* **`id`**

  `integer`

* **`image`**

  `string`, format: `uri`

**Example:**

```json
{
  "id": 1,
  "image": ""
}
```

### ProductListserializer

- **Type:**`object`

* **`category` (required)**

  `integer`

* **`price` (required)**

  `string`, format: `decimal`

* **`title` (required)**

  `string`

* **`category_name`**

  `string`

* **`created_at`**

  `string`, format: `date-time`

* **`description`**

  `string`

* **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

* **`how_to_use`**

  `string`

* **`id`**

  `integer`

* **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

* **`key_benefits`**

  `string`

* **`key_ingredients`**

  `string`

* **`order_count`**

  `integer`

* **`size`**

  `string`

* **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

* **`stock`**

  `integer`

* **`sub_title`**

  `string`

* **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": ""
}
```

### TermsAndConditionsList

- **Type:**`object`

* **`content` (required)**

  `string`

* **`title` (required)**

  `string`

* **`created_at`**

  `string`, format: `date-time`

* **`id`**

  `integer`

* **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "title": "",
  "content": "",
  "created_at": "",
  "updated_at": ""
}
```

### UserList

- **Type:**`object`

* **`email` (required)**

  `string`, format: `email`

* **`birth_date`**

  `string`, format: `date`

* **`contact_number`**

  `string`

* **`membership_id`**

  `string`

* **`name`**

  `string`

* **`skin_type`**

  `string`

**Example:**

```json
{
  "membership_id": "",
  "name": "",
  "email": "",
  "contact_number": "",
  "skin_type": "",
  "birth_date": ""
}
```

### ProductDetails

- **Type:**`object`

* **`category` (required)**

  `integer`

* **`price` (required)**

  `string`, format: `decimal`

* **`title` (required)**

  `string`

* **`category_name`**

  `string`

* **`created_at`**

  `string`, format: `date-time`

* **`description`**

  `string`

* **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

* **`how_to_use`**

  `string`

* **`id`**

  `integer`

* **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

* **`key_benefits`**

  `string`

* **`key_ingredients`**

  `string`

* **`order_count`**

  `integer`

* **`related_products`**

  `string`

* **`size`**

  `string`

* **`skin_type`**

  `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

* **`stock`**

  `integer`

* **`sub_title`**

  `string`

* **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "oily",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "order_count": 0,
  "created_at": "",
  "updated_at": "",
  "related_products": ""
}
```

### CartItem

- **Type:**`object`

* **`product_id` (required)**

  `integer`

* **`id`**

  `integer`

* **`product`**

  `object`

  - **`category` (required)**

    `integer`

  - **`price` (required)**

    `string`, format: `decimal`

  - **`title` (required)**

    `string`

  - **`category_name`**

    `string`

  - **`created_at`**

    `string`, format: `date-time`

  - **`description`**

    `string`

  - **`discount`**

    `string`, format: `decimal` — Discount percentage or amount

  - **`how_to_use`**

    `string`

  - **`id`**

    `integer`

  - **`images`**

    `array`

    **Items:**

    - **`id`**

      `integer`

    - **`image`**

      `string`, format: `uri`

  - **`key_benefits`**

    `string`

  - **`key_ingredients`**

    `string`

  - **`order_count`**

    `integer`

  - **`size`**

    `string`

  - **`skin_type`**

    `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

  - **`stock`**

    `integer`

  - **`sub_title`**

    `string`

  - **`updated_at`**

    `string`, format: `date-time`

* **`quantity`**

  `integer`

* **`subtotal`**

  `string`, format: `decimal`

**Example:**

```json
{
  "id": 1,
  "product": {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "oily",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "images": [],
    "order_count": 0,
    "created_at": "",
    "updated_at": ""
  },
  "product_id": 1,
  "quantity": 0,
  "subtotal": ""
}
```

### Cart

- **Type:**`object`

* **`id`**

  `integer`

* **`items`**

  `array`

  **Items:**

  - **`product_id` (required)**

    `integer`

  - **`id`**

    `integer`

  - **`product`**

    `object`

    - **`category` (required)**

      `integer`

    - **`price` (required)**

      `string`, format: `decimal`

    - **`title` (required)**

      `string`

    - **`category_name`**

      `string`

    - **`created_at`**

      `string`, format: `date-time`

    - **`description`**

      `string`

    - **`discount`**

      `string`, format: `decimal` — Discount percentage or amount

    - **`how_to_use`**

      `string`

    - **`id`**

      `integer`

    - **`images`**

      `array`

      **Items:**

      - **`id`**

        `integer`

      - **`image`**

        `string`, format: `uri`

    - **`key_benefits`**

      `string`

    - **`key_ingredients`**

      `string`

    - **`order_count`**

      `integer`

    - **`size`**

      `string`

    - **`skin_type`**

      `string`, possible values: `"oily", "dry", "normal", "combination", "sensitive"`

    - **`stock`**

      `integer`

    - **`sub_title`**

      `string`

    - **`updated_at`**

      `string`, format: `date-time`

  - **`quantity`**

    `integer`

  - **`subtotal`**

    `string`, format: `decimal`

* **`total_price`**

  `string`, format: `decimal`

* **`updated_at`**

  `string`, format: `date-time`

**Example:**

```json
{
  "id": 1,
  "items": [
    {
      "id": 1,
      "product": null,
      "product_id": 1,
      "quantity": 0,
      "subtotal": ""
    }
  ],
  "total_price": "",
  "updated_at": ""
}
```

### CheckoutRequest

- **Type:**`object`

* **`address_line1` (required)**

  `string`

* **`city` (required)**

  `string`

* **`email` (required)**

  `string`, format: `email`

* **`first_name` (required)**

  `string`

* **`last_name` (required)**

  `string`

* **`payment_brand` (required)**

  `string`, possible values: `"VISA", "MASTER", "MADA", "APPLEPAY", "TABBY", "TAMARA"`

* **`phone` (required)**

  `string`

* **`postal_code` (required)**

  `string`

* **`address_line2`**

  `string`

* **`country`**

  `string`, default: `"SA"`

* **`state`**

  `string`

**Example:**

```json
{
  "payment_brand": "VISA",
  "first_name": "",
  "last_name": "",
  "email": "",
  "phone": "",
  "address_line1": "",
  "address_line2": "",
  "city": "",
  "state": "",
  "postal_code": "",
  "country": "SA"
}
```

### AIRoutineRequest

- **Type:**`object`

* **`age` (required)**

  `integer`

* **`skin_type` (required)**

  `string`

* **`additional_details`**

  `string`

* **`concerns`**

  `array`

  **Items:**

  `string`

* **`photo`**

  `string`, format: `uri`

**Example:**

```json
{
  "skin_type": "",
  "age": 1,
  "concerns": [
    ""
  ],
  "additional_details": "",
  "photo": ""
}
```
