# Spring Boot CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with Spring Boot.

## Features

- RESTful API for Product management
- In-memory H2 database
- CRUD operations for Product entity

## Running the Application

1. Clone the repository
2. Navigate to the project directory
3. Run `./mvnw spring-boot:run` (for Unix/Linux) or `mvnw.cmd spring-boot:run` (for Windows)
4. The application will start on port 8080

## API Endpoints

- GET `/api/products` - Get all products
- GET `/api/products/{id}` - Get a specific product by ID
- POST `/api/products` - Create a new product
- PUT `/api/products/{id}` - Update a product
- DELETE `/api/products/{id}` - Delete a product

## H2 Database Console

The H2 database console is enabled and available at:
- URL: http://localhost:8080/h2-console
- JDBC URL: jdbc:h2:mem:productdb
- Username: sa
- Password: (leave empty)
