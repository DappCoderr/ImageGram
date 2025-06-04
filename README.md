# ImageGram

ImageGram is a full-stack image-sharing platform built using **Node.js**, **Express**, and **MongoDB**, with image storage powered by **Cloudinary**. The project follows a clean **MVC (Model-View-Controller)** architecture, ensuring separation of concerns, scalability, and maintainability.

## Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB (with Mongoose ODM)
* **File Upload:** Cloudinary + Multer
* **Validation:** Zod
* **Architecture:** MVC with layered structure (Repository, Service, Controller)
* **Routing:** Express Router with API versioning (e.g., `/api/v1/`)

## Project Structure

```
imageGram/
├── controllers/       # Handles incoming requests and calls services
├── services/          # Business logic lives here
├── repositories/      # Handles data access using Mongoose
├── schema/            # Mongoose schemas for MongoDB collections
├── routers/           # API routes and versioning
├── validation/        # Zod schemas for request validation
├── uploads/           # Multer setup for file handling
├── config/            # DB config, Cloudinary setup, helper functions etc.
└── server.js          # Entry point of the application
```

## Features

* ✅ Upload and share images using **Cloudinary**
* ✅ Middleware architecture using **Express**
* ✅ Schema definitions with **Mongoose**
* ✅ Request data validation with **Zod**
* ✅ Clean separation of logic using a **Service Layer**
* ✅ Routing layer using `express.Router()` and **API versioning**
* ✅ Organized MVC folder structure

## Flow Overview

1. **Server Setup:** Initialized using Express.
2. **Schema Layer:** Defined Mongoose schemas for image and user data.
3. **Repository Layer:** Abstracts DB queries using Mongoose.
4. **Service Layer (Model in MVC):** Contains all business logic and talks to the repository.
5. **Controller Layer:** Takes client requests and passes data to the service.
6. **Router Layer:** Defines versioned API endpoints and passes them to the appropriate controllers.

## Installation

```bash
git clone https://github.com/your-username/imageGram.git
cd imageGram
npm install
```

## Running the App

```bash
npm start
```

Make sure to set up the following environment variables in a `.env` file:

```env
DB_URL_PASSWORD = your_mongodb_password
DB_URL = your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME = your_cloud_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_API_SECRET = your_api_secret
```

## API Endpoints

All API routes are versioned under `/api/v1`.

Example:

```
POST   /api/v1/posts/      # Add new post
GET    /api/v1/posts/      # Get all post
```

## Contributing

Feel free to fork this repo and contribute. Pull requests are welcome!
