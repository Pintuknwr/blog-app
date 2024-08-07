
# Blog Application

## Overview

Welcome to the Blog Application! This is a simple blog platform built using Node.js with the Express framework for the backend, EJS for templating, 
Bootstrap for styling, JSON Web Tokens (JWT) for user authentication, and MongoDB for data storage.

## Features

- **User Authentication:** Secure login and registration with JWT.
- **Blog Management:** Create, read and comments.
- **Responsive Design:** Modern, responsive UI using Bootstrap.
- **Data Storage:** Persistent storage of blog posts and user information in MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)

## Installation

### Prerequisites

- Node.js (>= 14.x)
- MongoDB (>= 4.x)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Pintuknwr/blog-app.git
   cd blog-application
   ```

2. **Install Dependencies**

   Ensure you have `npm` installed. Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Create a `.env` file in the root directory of the project and add the following variables:

   ```env
   PORT=9000
   MONGODB_URI=mongodb://localhost:27017/blogapp
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start MongoDB**

   Make sure MongoDB is running. You can start MongoDB using:

   ```bash
   mongod
   ```

5. **Run the Application**

   Start the server with:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:9000`.

## Usage

1. **Register a New User**

   Navigate to `/user/signup` to create a new account.

2. **Login**

   Navigate to `/user/signin` to authenticate and receive a JWT.

3. **Create a Blog Post**

   Once logged in, navigate to `/blog/add-new` to create a new blog post.

4. **View Posts**

   Visit `/` to view all published blog posts.


## Configuration

### Environment Variables

- `PORT`: Port number for the server.
- `MONGODB_URI`: Connection string for MongoDB.
- `JWT_SECRET`: Secret key used for signing JWTs.

### MongoDB

Ensure MongoDB is properly set up and running on your local machine or configure the `MONGODB_URI` to point to a remote database.

## API Endpoints

Authentication

-`POST /user/signup - Register a new user.
-`POST /user/signin - Login a user and receive a JWT.

### Blog Posts

- `GET /home` - Retrieve all blog posts.
- `GET /blog/:id` - Retrieve a single blog post by ID.
- `POST /blog/add-new` - Create a new blog post (authentication required).

