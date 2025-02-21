# Follow-Along-Ecom

This project is a follow-along guide to building an ecommerce application.In this project we can understand various aspects of web development and the technologies involved in creating an ecommerce platform.

## Milestone 1: Project Overview

In the first milestone, we covered the basic setup of the project. This included setting up the repository, understanding the project goals, and identifying the key features that will be implemented. The first steps included:
- Initializing the GitHub repository.
- Structuring the project with appropriate file directories.
- Outlining the necessary steps for building the ecommerce platform.

## Milestone 2: Project Setup and Login Page

In this milestone, we set up the initial structure of the project and created the Login Page. The following tasks were completed:
- Implemented the basic structure for the login page, which includes fields for email and password.
- Styled the login page using CSS to ensure a clean, user-friendly interface.

This milestone helps lay the foundation for future user authentication functionality.

## Milestone 3: Project Setup for Backend

In this milestone, I have set up the backend server for the Ecommerce application. This involves:

1. **Backend Framework**: Set up **Node.js** and **Express** to create a simple server.
2. **Basic Routes**: Created a basic route to fetch sample product data.
3. **Server Running**: The server is successfully running on port , ready for further API integration and additional functionality.

The backend server is now fully set up to be expanded with more features.

## Milestone 4: Creating User Model and Controller

In this milestone, the following features were added:

1. *User Model*: A schema for the user with fields for `name`, `email`, `password`, `isAdmin`, and an optional `profilePicture` for storing user profile pictures.
2. *User Controller*: Includes functions for:
   - User Registration: Allows new users to register.
   - User Login: Validates the user's credentials and returns a JWT token.
   - User Profile: Fetches the user profile based on the JWT token.
3. *Multer for File Uploads*: Configured Multer to allow users to upload profile pictures, with validation for file types and size.
4. *Protected Routes*: Added authentication middleware to protect certain routes, such as fetching the user profile and uploading the profile picture.

## Milestone 5:

In this milestone, we will create a Sign-Up Page that allows users to register for an account. The page will include necessary fields for input, such as name, email, and password. We'll also implement form validation to ensure the data entered is correct and follows appropriate formats.

# Objectives:
1. Build a Sign-Up page using HTML and CSS.
2. Implement form validation using JavaScript to ensure user input is correct:
3. Validate that the email follows a proper email format.
4. Ensure the password meets security requirements (e.g., minimum length, special characters).

# Features:
1. User-friendly form layout.
2. Client-side validation for fields like email and password.
3. Responsive design that works on various devices (mobile, tablet, desktop).

# JavaScript for Form Validation:
Use JavaScript to validate the input fields. 
Email format: Ensure the email follows a valid format.
Password criteria: Ensure the password is strong (e.g., minimum length, contains at least one number, special character, etc.).


## Milestone 6:

In this milestone, I’ve implemented password encryption using bcrypt. The user's password is hashed during the signup process before being stored in the database. This ensures that the password is never saved in plain text, enhancing the security of the user's data.

1. Encrypt the Password:
I used bcrypt to hash the password with a salt factor, which makes it more secure.
The hashing process ensures that even if the database is compromised, the passwords remain protected.

2. Store Complete User Data:
In addition to the hashed password, all other user data such as name and email is securely saved in the database. This ensures that sensitive information is protected and only the hashed password is stored.

I created a User schema for storing the user's name, email, and hashed password in the database.
The database will store the complete user information while ensuring that the password is never exposed.

3. Testing Password Encryption and Secure Storage
I tested the password encryption and storage process to ensure that:

The password is hashed and not stored in plain text.
The user’s name and email are saved correctly.
During login, the password verification process compares the entered password with the stored hashed password.

### Milestone 7: User Login Backend

Overview:
 In this milestone, we will create a backend endpoint for user login. The focus is on validating user credentials and verifying the encrypted password stored in the database using bcrypt.

Why Encrypt Passwords?
Protect User Data: Keeps passwords safe even if the database is compromised.

Privacy: Ensures passwords aren't stored in plain text.

Compliance: Meets security standards like GDPR and PCI-DSS.

Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

How Login Authentication Works:

User Enters Credentials
The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.

