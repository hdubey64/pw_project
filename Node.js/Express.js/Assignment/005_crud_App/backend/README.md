# User Registration and Login API



### User Registration

`Endpoint`:  POST /register 
<br>

`Description`: Register a new user account.
<br>

# Request Body:
<br>

`name`: String (required) - The name of the user.
<br>

`email`: String (required) - The email address of the user.
<br>

`password`: String (required) - The password for the user account.

# `Response`:

<br>

`Success`: HTTP 200 OK with a success message.
<br>
 {"message": "Hello! Shashank, now you can login"}

`Error`: HTTP error status with an error message.


### User Login

`Endpoint`: POST /login
<br>
`Description`: Authenticate a user and generate an access token.
<br>

`Request Body`:
<br>

`email`: String (required) - The email address of the user.
<br>

`password`: String (required) - The password for the user account.
<br>


# `Response`:
<br>

`Success`: HTTP 200 OK with success message.
<br>
{"message": "User login in succesfully"}

`Error`: HTTP error status with an error message.







