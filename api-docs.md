# Skin Care API

- **OpenAPI Version:** `3.1.1`
- **API Version:** `v1`

API documentation for my project

## Servers

- **URL:** `https://api.glowmi.net/`

## Operations

### Retrieve a category

- **Method:** `GET`
- **Path:** `/adminapi/categories/{id}/`
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
- **Path:** `/adminapi/categories/{id}/`
- **Tags:** Category

Endpoint to update an existing category by ID. Only accessible by admin users.

#### Request Body

##### Content-Type: multipart/form-data

- **`image`**

  `string`

- **`name`**

  `string`

**Example:**

```json
{
  "name": "",
  "image": ""
}
```

##### Content-Type: application/x-www-form-urlencoded

- **`image`**

  `string`

- **`name`**

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
- **Path:** `/adminapi/categories/{id}/`
- **Tags:** Category

Endpoint to delete a category by ID. Only accessible by admin users.

#### Responses

##### Status: 204 Category deleted successfully

##### Status: 404 Not Found

### get all categories

- **Method:** `GET`
- **Path:** `/adminapi/category/`
- **Tags:** Category

Endpoint to get all categories. Only accessible by admin users.

#### Responses

##### Status: 200 Category list fetched successfully

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

### Create a new category

- **Method:** `POST`
- **Path:** `/adminapi/category/`
- **Tags:** Category

Endpoint to create a new category. Only accessible by admin users.

#### Request Body

##### Content-Type: multipart/form-data

- **`image`**

  `string`

- **`name`**

  `string`

**Example:**

```json
{
  "name": "",
  "image": ""
}
```

##### Content-Type: application/x-www-form-urlencoded

- **`image`**

  `string`

- **`name`**

  `string`

**Example:**

```json
{
  "name": "",
  "image": ""
}
```

#### Responses

##### Status: 201 Category created successfully

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

- **`description` (required)**

  `string`

- **`how_to_use` (required)**

  `string`

- **`key_benefits` (required)**

  `string`

- **`key_ingredients` (required)**

  `string`

- **`price` (required)**

  `string`, format: `decimal`

- **`skin_type` (required)**

  `string`

- **`sku` (required)**

  `string`

- **`sub_title` (required)**

  `string`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`is_available`**

  `boolean`

- **`reserved_stock`**

  `integer`

- **`size`**

  `string`

- **`stock`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

- **`video`**

  `string`, format: `uri`

**Example:**

```json
[
  {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "sku": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "reserved_stock": 0,
    "is_available": true,
    "video": "",
    "images": [],
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

- **`description` (required)**

  `string`

- **`how_to_use` (required)**

  `string`

- **`key_benefits` (required)**

  `string`

- **`key_ingredients` (required)**

  `string`

- **`price` (required)**

  `string`, format: `decimal`

- **`skin_type` (required)**

  `string`

- **`sku` (required)**

  `string`

- **`sub_title` (required)**

  `string`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`is_available`**

  `boolean`

- **`reserved_stock`**

  `integer`

- **`size`**

  `string`

- **`stock`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

- **`video`**

  `string`, format: `uri`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "sku": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "reserved_stock": 0,
  "is_available": true,
  "video": "",
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
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

- **`description` (required)**

  `string`

- **`how_to_use` (required)**

  `string`

- **`key_benefits` (required)**

  `string`

- **`key_ingredients` (required)**

  `string`

- **`price` (required)**

  `string`, format: `decimal`

- **`skin_type` (required)**

  `string`

- **`sku` (required)**

  `string`

- **`sub_title` (required)**

  `string`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`is_available`**

  `boolean`

- **`reserved_stock`**

  `integer`

- **`size`**

  `string`

- **`stock`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

- **`video`**

  `string`, format: `uri`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "sku": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "reserved_stock": 0,
  "is_available": true,
  "video": "",
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
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

- **`description` (required)**

  `string`

- **`how_to_use` (required)**

  `string`

- **`key_benefits` (required)**

  `string`

- **`key_ingredients` (required)**

  `string`

- **`price` (required)**

  `string`, format: `decimal`

- **`skin_type` (required)**

  `string`

- **`sku` (required)**

  `string`

- **`sub_title` (required)**

  `string`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`is_available`**

  `boolean`

- **`reserved_stock`**

  `integer`

- **`size`**

  `string`

- **`stock`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

- **`video`**

  `string`, format: `uri`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "sku": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "reserved_stock": 0,
  "is_available": true,
  "video": "",
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
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

### POST /forget-password/reset/

- **Method:** `POST`
- **Path:** `/forget-password/reset/`
- **Tags:** Forget Password

Reset the user's password after OTP verification

#### Request Body

##### Content-Type: multipart/form-data

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

##### Content-Type: application/x-www-form-urlencoded

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

##### Content-Type: multipart/form-data

- **`email` (required)**

  `string`, format: `email`

**Example:**

```json
{
  "email": ""
}
```

##### Content-Type: application/x-www-form-urlencoded

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

##### Content-Type: multipart/form-data

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

##### Content-Type: application/x-www-form-urlencoded

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

##### Content-Type: multipart/form-data

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

##### Content-Type: application/x-www-form-urlencoded

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

##### Content-Type: multipart/form-data

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

##### Content-Type: application/x-www-form-urlencoded

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

### GET /profile/

- **Method:** `GET`
- **Path:** `/profile/`
- **Tags:** Profile

Get logged-in user's profile details.

#### Responses

##### Status: 200

###### Content-Type: application/json

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

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "role": "",
  "image": "",
  "gender": "male",
  "date_of_birth": ""
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

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "role": "",
  "image": "",
  "gender": "male",
  "date_of_birth": ""
}
```

### POST /refresh/

- **Method:** `POST`
- **Path:** `/refresh/`
- **Tags:** Authentication

Refresh JWT access token using a valid refresh token.

#### Request Body

##### Content-Type: multipart/form-data

- **`refresh` (required)**

  `string`

**Example:**

```json
{
  "refresh": ""
}
```

##### Content-Type: application/x-www-form-urlencoded

- **`refresh` (required)**

  `string`

**Example:**

```json
{
  "refresh": ""
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

##### Content-Type: multipart/form-data

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

  `string`

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

##### Content-Type: application/x-www-form-urlencoded

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

  `string`

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

  - **`access_token`**

    `string`

  - **`refresh_token`**

    `string`

  - **`user`**

    `object`

    - **`contact_number`**

      `string`

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

    - **`membership_Id`**

      `string`

    - **`role`**

      `string`

    - **`skin_type`**

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
      "membership_Id": "",
      "role": "",
      "full_name": "",
      "gender": "",
      "date_of_birth": "",
      "contact_number": "",
      "skin_type": "",
      "image": ""
    }
  }
}
```

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

- **`description` (required)**

  `string`

- **`how_to_use` (required)**

  `string`

- **`key_benefits` (required)**

  `string`

- **`key_ingredients` (required)**

  `string`

- **`price` (required)**

  `string`, format: `decimal`

- **`skin_type` (required)**

  `string`

- **`sku` (required)**

  `string`

- **`sub_title` (required)**

  `string`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`is_available`**

  `boolean`

- **`reserved_stock`**

  `integer`

- **`size`**

  `string`

- **`stock`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

- **`video`**

  `string`, format: `uri`

**Example:**

```json
[
  {
    "id": 1,
    "category": 1,
    "category_name": "",
    "title": "",
    "sub_title": "",
    "skin_type": "",
    "description": "",
    "key_ingredients": "",
    "how_to_use": "",
    "key_benefits": "",
    "size": "",
    "sku": "",
    "price": "",
    "discount": "",
    "stock": 0,
    "reserved_stock": 0,
    "is_available": true,
    "video": "",
    "images": [],
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

- **`description` (required)**

  `string`

- **`how_to_use` (required)**

  `string`

- **`key_benefits` (required)**

  `string`

- **`key_ingredients` (required)**

  `string`

- **`price` (required)**

  `string`, format: `decimal`

- **`skin_type` (required)**

  `string`

- **`sku` (required)**

  `string`

- **`sub_title` (required)**

  `string`

- **`title` (required)**

  `string`

- **`category_name`**

  `string`

- **`created_at`**

  `string`, format: `date-time`

- **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

- **`id`**

  `integer`

- **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

- **`is_available`**

  `boolean`

- **`reserved_stock`**

  `integer`

- **`size`**

  `string`

- **`stock`**

  `integer`

- **`updated_at`**

  `string`, format: `date-time`

- **`video`**

  `string`, format: `uri`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "sku": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "reserved_stock": 0,
  "is_available": true,
  "video": "",
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "created_at": "",
  "updated_at": ""
}
```

##### Status: 404 Product not found

## Schemas

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

* **`description` (required)**

  `string`

* **`how_to_use` (required)**

  `string`

* **`key_benefits` (required)**

  `string`

* **`key_ingredients` (required)**

  `string`

* **`price` (required)**

  `string`, format: `decimal`

* **`skin_type` (required)**

  `string`

* **`sku` (required)**

  `string`

* **`sub_title` (required)**

  `string`

* **`title` (required)**

  `string`

* **`category_name`**

  `string`

* **`created_at`**

  `string`, format: `date-time`

* **`discount`**

  `string`, format: `decimal` — Discount percentage or amount

* **`id`**

  `integer`

* **`images`**

  `array`

  **Items:**

  - **`id`**

    `integer`

  - **`image`**

    `string`, format: `uri`

* **`is_available`**

  `boolean`

* **`reserved_stock`**

  `integer`

* **`size`**

  `string`

* **`stock`**

  `integer`

* **`updated_at`**

  `string`, format: `date-time`

* **`video`**

  `string`, format: `uri`

**Example:**

```json
{
  "id": 1,
  "category": 1,
  "category_name": "",
  "title": "",
  "sub_title": "",
  "skin_type": "",
  "description": "",
  "key_ingredients": "",
  "how_to_use": "",
  "key_benefits": "",
  "size": "",
  "sku": "",
  "price": "",
  "discount": "",
  "stock": 0,
  "reserved_stock": 0,
  "is_available": true,
  "video": "",
  "images": [
    {
      "id": 1,
      "image": ""
    }
  ],
  "created_at": "",
  "updated_at": ""
}
```

### Profile

- **Type:**`object`

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

**Example:**

```json
{
  "full_name": "",
  "email": "",
  "role": "",
  "image": "",
  "gender": "male",
  "date_of_birth": ""
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
