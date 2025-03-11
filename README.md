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


### Milestone 6:

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


### Milestone 8:
In this milestone, we created a reusable Product Card Component to display product details dynamically. We also designed a structured homepage layout to showcase multiple product cards.

By completing this milestone, we:

Learned how to create a reusable card component.
Used props to dynamically pass product details (name, image, price).
Mapped through a product list to render multiple product cards.
Designed a homepage layout with a clean and organized structure.

How It Works:
Product Card Component (ProductCard.js):

Displays a product's image, name, and price.
Uses props to receive product data.
Homepage Layout (HomePage.js):

Uses a grid/flexbox layout to display multiple product cards.
Maps over a product list and passes data dynamically to each card.
Product Data (products.js):

Contains an array of product objects (name, price, image).
Helps simulate dynamic content without a backend.

### Milestone 9:
In this milestone, we created a Product Input Form that allows users to enter product details and upload multiple images. This form is an essential step toward storing product data in a database and displaying it on the product homepage.

Learning Goals 
By completing this milestone, we:

Learned how to create a product input form with multiple fields.
Implemented image upload functionality for multiple product images.
Understood how product data can be stored and later displayed.

How It Works:
Product Input Form (ProductForm.js):

Collects product details (name, price, description, category, etc.).
Allows users to upload multiple images.
Uses state management to handle form inputs.
Add Product Page (AddProductPage.js):

Displays the form and manages the submission process.
Can later be connected to a backend API for storing data in a database.


### Milestone 10:

In this milestone, we defined a Product Schema using Mongoose and created a POST API endpoint to validate and store product details in MongoDB. This ensures that product data is structured correctly and maintains integrity in the database.

Learning Goals :
By completing this milestone, we:

Learned how to write a product schema using Mongoose.
Created an endpoint to handle product submissions.
Implemented data validation to ensure only valid entries are stored.

Why Validation? 
Prevents invalid data from being stored in MongoDB.
Ensures that required fields are provided.
Helps maintain clean and structured product data.

### Milestone 11:
In this milestone, we created an API endpoint to send product data from MongoDB to the frontend. We also implemented a function in the frontend to fetch and dynamically display the data using the Product Card Component created in an earlier milestone.

Learning Goals :
By completing this milestone, we:

Learned how to create an API endpoint to retrieve product data from MongoDB.
Understood how to fetch data on the frontend.
Dynamically displayed product data using the Product Card Component.

Why This Is Important? 
Helps understand how data flows between backend and frontend.
Enables dynamic rendering of product details.
Ensures a real-time update of the product list.

### Milestone 12:

In this milestone, we created an API endpoint to retrieve product data from MongoDB filtered by user email. The frontend fetches this data and dynamically displays it using the Product Card Component.

Learning Goals 
By completing this milestone, we:

Learned how to create an API endpoint that filters data based on user email.
Understood how to fetch filtered data on the frontend.
Dynamically displayed filtered product data using the Product Card Component.

Why Filtering Data by Email? 
Helps retrieve only relevant products for a specific user.
Improves data organization and personalization.
Allows for better user experience by showing only their uploaded products.
Future Enhancements 🚀
Implement user authentication to automatically get the logged-in user's email.
Allow pagination for large product lists.
Add sorting and filtering options (e.g., by price, category).


## Milestone 13: Filtering Products by User Email

### Project Overview

Created an API endpoint to retrieve product data filtered by user email, ensuring users see only their uploaded products.

### Key Achievements

- *Filtered API Endpoint:* Retrieves products associated with a specific user.
- *Frontend Integration:* Dynamically displays filtered products.
- *Improved User Experience:* Personalized product display.

### Future Enhancements

- Implement authentication to auto-fetch the logged-in user's products.
- Add pagination for large product lists.
- Introduce sorting and filtering options (e.g., price, category).

## Milestone 14: Deleting Products by ID

### Project Overview

This milestone focuses on implementing a *delete functionality* for uploaded products. Users can now remove a product from the database by clicking a *Delete* button, which sends the product ID to the backend for deletion.

### Key Achievements

- *Delete API Endpoint:* Allows products to be deleted using their unique ID.
- *Frontend Integration:* Added a Delete button to product cards.
- *Improved User Experience:* Users can remove unwanted products easily.

### Future Enhancements

- Implement a confirmation prompt before deletion.
- Add authentication to ensure only the product owner can delete.
- Introduce a soft delete feature to allow recovery of deleted products.

## Milestone 15: Creating a Navbar Component

### Project Overview

This milestone focuses on creating a *Navbar component* and integrating it into all pages to ensure smooth navigation across the application.

### Key Achievements

- *Reusable Navbar Component:* A single component used across multiple pages.
- *Navigation Links:* Added links to Home, My Products, Add Product, and Cart.
- *Responsive Design:* Ensured the Navbar adapts to different screen sizes.
- *Improved User Experience:* Simplified navigation across the application.

### Future Enhancements

- Implement authentication-based navigation (e.g., hide/show links based on login status).
- Add dropdown menus for better organization.
- Enhance styling for a more user-friendly experience.

## Milestone 16: Creating a Product Info Page

### Project Overview

This milestone focuses on creating a *Product Info Page* that displays all product details and allows users to select a quantity and add the item to their cart.

### Key Achievements

- *Detailed Product Page:* Displays all relevant product information.
- *Quantity Selector:* Users can choose the quantity of the product they want to purchase.
- *Add to Cart Button:* Enables users to add selected products to their cart.
- *Improved Shopping Experience:* Provides a seamless way to view and purchase products.

### Future Enhancements

- Implement a dynamic cart system with real-time updates.
- Add product image carousel for better visualization.
- Introduce customer reviews and ratings on the product page.

## Milestone 17: Adding Cart Functionality

### Project Overview

This milestone focuses on implementing *cart functionality* by creating an endpoint to add products to the cart and store them in the database.

### Key Achievements

- *Updated User Schema:* Modified schema to store cart products.
- *Cart API Endpoint:* Created an endpoint to receive and store product details in the cart.
- *Database Integration:* Successfully saved cart data in MongoDB.
- *Enhanced Shopping Experience:* Allowed users to add items to their cart for later purchase.

### Future Enhancements

- Implement cart quantity updates and item removal.
- Add authentication to associate carts with specific users.
- Introduce a checkout process with payment integration.

## Milestone 18: Fetching Cart Data

### Project Overview

This milestone focuses on implementing a *backend endpoint* to fetch all products stored in a user's cart and display them on the cart page.

### Key Achievements

- *Cart API Endpoint:* Created an endpoint to retrieve all products inside a user's cart.
- *User-Based Filtering:* Implemented logic to fetch cart items based on user email.
- *Database Integration:* Successfully retrieved cart data from MongoDB.
- *Improved User Experience:* Allowed users to view their saved cart items.

### Future Enhancements

- Implement real-time cart updates with WebSockets.
- Add authentication to secure user-specific cart data.
- Enhance cart UI to allow quantity updates and removals directly from the cart page.