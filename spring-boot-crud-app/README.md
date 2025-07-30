# Spring Boot CRUD Application

This is a complete **Product Management System** built with Spring Boot, demonstrating modern full-stack development practices. The application provides both a RESTful API and an interactive web interface for managing product inventory with full CRUD (Create, Read, Update, Delete) operations.

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Accessing the Application](#accessing-the-application)
- [Sample Data](#sample-data)
- [Project Structure](#project-structure)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## About the Project

This Spring Boot application serves as a comprehensive example of modern Java web development, showcasing:

- **Enterprise-grade architecture** with layered design (Controller → Service → Repository → Entity)
- **RESTful API design** following industry best practices
- **Modern web UI** with responsive design and interactive JavaScript
- **Database integration** using JPA/Hibernate with H2 in-memory database
- **Maven build system** with wrapper for easy setup
- **Spring Boot auto-configuration** for rapid development

The project is ideal for learning Spring Boot concepts, understanding full-stack development, or as a foundation for building larger enterprise applications. It demonstrates clean code principles, separation of concerns, and modern web development patterns.

## Features

- 🌐 **Modern Web UI** - Interactive product management interface
- 🔗 **RESTful API** - Complete API for Product management
- 💾 **In-memory H2 database** - Pre-loaded with sample data
- ⚡ **Full CRUD operations** - Create, Read, Update, Delete products
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Quick Start

### Prerequisites
- Java 17 or higher
- Maven (or use the included Maven wrapper)

### Running the Application

#### Option 1: PowerShell (Windows - Recommended)
```powershell
# Set up Maven wrapper function (run once per session)
function mvnw { cmd /c "mvnw.cmd $args" }

# Start the application
mvnw spring-boot:run
```

#### Option 2: PowerShell Script
```powershell
.\run-app.ps1
```

#### Option 3: Command Prompt
```cmd
mvnw.cmd spring-boot:run
```

#### Option 4: Direct CMD through PowerShell
```powershell
cmd /c "mvnw.cmd spring-boot:run"
```

The application will start on port 8080 and automatically load sample data.

### Access to the UI
Start the application and access the web interface:
```powershell
function mvnw { cmd /c "mvnw.cmd $args" }; mvnw spring-boot:run
```

## Troubleshooting

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| **Maven wrapper not recognized** | Use `cmd /c "mvnw.cmd spring-boot:run"` |
| **Port 8080 already in use** | Kill the process or change port in `application.properties` |
| **Database connection issues** | Restart application - H2 is in-memory and recreates automatically |
| **CORS errors in browser** | Check `WebConfig.java` for allowed origins |

For detailed Maven setup instructions, refer to [MAVEN-SETUP-GUIDE.md](MAVEN-SETUP-GUIDE.md).

## Accessing the Application

### 🌐 Web UI (Product Management Interface)
- **URL**: http://localhost:8080
- **Features**:
  - View all products in a table
  - Add new products
  - Edit existing products (modal popup)
  - Delete products
  - Search products by ID
  - Responsive design for all devices

### 🔗 REST API Endpoints

- GET `/api/products` - Get all products
- GET `/api/products/{id}` - Get a specific product by ID
- POST `/api/products` - Create a new product
- PUT `/api/products/{id}` - Update a product
- DELETE `/api/products/{id}` - Delete a product

### 🗄️ H2 Database Console

The H2 database console is enabled and available at:
- **URL**: http://localhost:8080/h2-console
- **JDBC URL**: jdbc:h2:mem:productdb
- **Username**: sa
- **Password**: (leave empty)

## Sample Data

The application automatically loads 4 sample products on startup:
1. **Laptop** - High-performance laptop ($999.99)
2. **Smartphone** - Latest model smartphone ($699.99)
3. **Tablet** - 10-inch tablet ($399.99)
4. **Headphones** - Wireless noise-cancelling headphones ($199.99)

## Technology Stack

### Backend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **Java** | 17+ | Core programming language |
| **Spring Boot** | 3.2.0 | Application framework and auto-configuration |
| **Spring Web** | 3.2.0 | RESTful web services and MVC |
| **Spring Data JPA** | 3.2.0 | Data persistence and ORM |
| **Hibernate** | 6.3.1 | JPA implementation and database ORM |
| **H2 Database** | 2.2.224 | In-memory database for development |
| **Maven** | 3.9.10 | Build automation and dependency management |

### Frontend Technologies
| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, animations, and responsive design |
| **Vanilla JavaScript** | DOM manipulation and API interactions |
| **Google Fonts** | Typography (Roboto font family) |

### Development Tools
- **Maven Wrapper** - Ensures consistent Maven version across environments
- **Spring Boot DevTools** - Hot reloading during development
- **H2 Console** - Database administration interface

## Project Structure

### Backend Architecture
```
src/main/java/com/example/demo/
├── DemoApplication.java           # 🚀 Main Spring Boot application entry point
├── config/
│   └── WebConfig.java            # 🔧 CORS and web configuration
├── controller/
│   └── ProductController.java    # 🌐 REST API endpoints (@RestController)
├── model/
│   └── Product.java             # 📊 JPA entity with database mapping
├── repository/
│   └── ProductRepository.java   # 💾 Data access layer (extends JpaRepository)
├── service/
│   └── ProductService.java      # 🏢 Business logic layer
└── DataInitializer.java         # 📋 Sample data loader (@PostConstruct)
```

### Frontend Structure
```
src/main/resources/static/
├── index.html                   # 🏠 Main UI page with tabbed interface
├── css/
│   └── styles.css              # 🎨 Modern responsive styling
└── js/
    └── script.js               # ⚡ JavaScript for UI interactions and API calls
```

### Configuration Files
```
src/main/resources/
├── application.properties       # 🔧 Spring Boot configuration
└── static/                     # 📁 Static web assets
```

### Architecture Layers

| Layer | Responsibility | Key Components |
|-------|----------------|----------------|
| **Presentation** | HTTP requests, JSON responses | `ProductController`, REST endpoints |
| **Business** | Business logic, validation | `ProductService`, business rules |
| **Data Access** | Database operations | `ProductRepository`, JPA queries |
| **Domain** | Data model, entities | `Product` entity, JPA annotations |
| **Configuration** | App setup, beans | `WebConfig`, `application.properties` |

### Design Patterns Used
- **MVC Pattern** - Model-View-Controller architecture
- **Repository Pattern** - Data access abstraction
- **Dependency Injection** - Spring's IoC container
- **Builder Pattern** - Entity construction
- **RESTful Architecture** - HTTP-based API design

## Development

### Development Features
- **Hot Reload** - Spring Boot DevTools for automatic restart during development
- **Database Console** - H2 web console for real-time database inspection
- **RESTful Testing** - Easy API testing through the web UI or tools like Postman
- **Responsive Design** - Mobile-first CSS approach with flexible layouts
- **Clean Architecture** - Well-separated concerns following Spring Boot best practices

### Building and Testing
```powershell
# Clean and compile
function mvnw { cmd /c "mvnw.cmd $args" }
mvnw clean compile

# Run tests
mvnw test

# Package application
mvnw package

# Run with different profiles
mvnw spring-boot:run -Dspring-boot.run.profiles=dev
```

### Code Quality Features
- **JPA Validation** - Entity-level validation annotations
- **Exception Handling** - Global exception handling with proper HTTP status codes
- **CORS Configuration** - Cross-origin resource sharing for frontend-backend communication
- **Transaction Management** - Declarative transaction handling with Spring
- **Auto-configuration** - Minimal configuration with Spring Boot conventions

## Contributing

We welcome contributions to improve this Spring Boot application! Here's how you can help:

### Getting Started
1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
4. **Make** your changes following the existing code style
5. **Test** your changes thoroughly
6. **Commit** your changes (`git commit -m 'Add amazing feature'`)
7. **Push** to your branch (`git push origin feature/amazing-feature`)
8. **Open** a Pull Request

### Development Guidelines
- Follow Spring Boot conventions and best practices
- Write unit tests for new functionality
- Update documentation for any API changes
- Ensure responsive design for UI changes
- Test with both H2 and external databases if applicable

### Areas for Contribution
- 🔧 **Backend improvements** - Additional endpoints, validation, error handling
- 🎨 **Frontend enhancements** - UI/UX improvements, new features
- 📚 **Documentation** - Code comments, API documentation, tutorials
- 🧪 **Testing** - Unit tests, integration tests, end-to-end tests
- 🚀 **DevOps** - Docker containerization, CI/CD pipelines

---

**Built with ❤️ using Spring Boot** | *Perfect for learning modern Java web development*
