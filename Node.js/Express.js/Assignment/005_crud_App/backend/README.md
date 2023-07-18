# User Registration and Login API



### User Registration

`Endpoint`: 
POST /register
`Description`: Register a new user account.
`Request` Body:
`name`: String (required) - The name of the user.
`email`: String (required) - The email address of the user.
`password`: String (required) - The password for the user account.

# `Response`:
`Success`: HTTP 200 OK with a success message.
 {"message": "Hello! Shashank, now you can login"}

`Error`: HTTP error status with an error message.


### User Login

`Endpoint`: POST /login
`Description`: Authenticate a user and generate an access token.
`Request Body`:
`email`: String (required) - The email address of the user.
`password`: String (required) - The password for the user account.

# `Response`:
`Success`: HTTP 200 OK with success message.
{"message": "User login in succesfully"}

`Error`: HTTP error status with an error message.







