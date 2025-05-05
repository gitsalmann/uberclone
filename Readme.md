echo "# API Documentation

## Endpoint: \`/users/register\`

### Method: \`POST\`

### Description:
This endpoint is used to register a new user in the system. It validates the input data, hashes the user's password, and stores the user in the database.

---

### Request Body:
The following fields are required in the request body:

\`\`\`json
{
  \"fullname\": {
    \"firstname\": \"string (min: 3 characters, required)\",
    \"lastname\": \"string (min: 3 characters, optional)\"
  },
  \"email\": \"string (valid email format, required)\",
  \"password\": \"string (min: 6 characters, required)\"
}
\`\`\`

---

### Response:

#### Success Response:
- **Status Code:** \`201 Created\`
- **Response Body:**

\`\`\`json
{
  \"token\": \"string (JWT token)\",
  \"user\": {
    \"_id\": \"string (user ID)\",
    \"fullname\": {
      \"firstname\": \"string\",
      \"lastname\": \"string\"
    },
    \"email\": \"string\",
    \"SocketId\": \"string (optional)\"
  }
}
\`\`\`

#### Error Response:
- **Status Code:** \`400 Bad Request\`
- **Response Body:**

\`\`\`json
{
  \"errors\": [
    {
      \"msg\": \"string (error message)\",
      \"param\": \"string (field name)\",
      \"location\": \"string (location of the error, e.g., 'body')\"
    }
  ]
}
\`\`\`

---

### Example Usage:

#### Request:
\`\`\`bash
POST /users/register HTTP/1.1
Content-Type: application/json

{
  \"fullname\": {
    \"firstname\": \"John\",
    \"lastname\": \"Doe\"
  },
  \"email\": \"john.doe@example.com\",
  \"password\": \"password123\"
}
\`\`\`

#### Success Response:
\`\`\`json
{
  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\",
  \"user\": {
    \"_id\": \"64f1a2b3c4d5e6f7g8h9i0j1\",
    \"fullname\": {
      \"firstname\": \"John\",
      \"lastname\": \"Doe\"
    },
    \"email\": \"john.doe@example.com\",
    \"SocketId\": null
  }
}
\`\`\`

#### Error Response:
\`\`\`json
{
  \"errors\": [
    {
      \"msg\": \"Invalid Email\",
      \"param\": \"email\",
      \"location\": \"body\"
    }
  ]
}
\`\`\`

---

### Notes:
- Ensure that the \`Content-Type\` header is set to \`application/json\`.
- The \`password\` field is hashed before being stored in the database.
- A JWT token is generated upon successful registration and returned in the response." > c:\Users\Salman\Desktop\WD\Project\uberclone\Backend\README.md