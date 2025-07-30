# 🏆 GitHub Copilot Challenges

<div align="center">

![Challenges](https://img.shields.io/badge/Challenges-15%20Levels-success?style=for-the-badge&logo=target)
![Difficulty](https://img.shields.io/badge/Difficulty-Beginner%20to%20Expert-red?style=for-the-badge)
![GitHub Copilot](https://img.shields.io/badge/Powered%20by-GitHub%20Copilot-blue?style=for-the-badge&logo=github)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0%20→%203.3.2-brightgreen?style=for-the-badge&logo=springboot)

</div>

## 🎯 Table of Contents
- [🟢 Beginner Challenges (1-3)](#-beginner-challenges)
- [🟡 Intermediate Challenges (4-6)](#-intermediate-challenges)
- [🔴 Advanced Challenges (7-9)](#-advanced-challenges)
- [🚀 Expert Challenges (10-12)](#-expert-challenges)
- [🎯 Master Level Challenges (13-15)](#-master-level-challenges)
- [📋 Challenge Rules & Guidelines](#-challenge-rules--guidelines)
- [🏅 Completion Templates](#-completion-templates)
- [📚 Resources & Support](#-resources--support)

---

> 🎮 **Ready for the Ultimate Coding Challenge?**
> 
> Welcome to the GitHub Copilot Challenges! This comprehensive challenge series will take you from basic entity creation to advanced framework migrations and CI/CD pipeline setup. Each challenge is designed to help you master GitHub Copilot while building real-world development skills.

<div align="center">

### 🏁 Challenge Difficulty Levels

| Level | Emoji | Description | Estimated Time |
|-------|-------|-------------|----------------|
| **Beginner** | 🟢 | Basic CRUD operations | 15-30 min |
| **Intermediate** | 🟡 | REST APIs & DTOs | 30-60 min |
| **Advanced** | 🔴 | Complex relationships | 1-2 hours |
| **Expert** | 🚀 | Security & Testing | 2-3 hours |
| **Master** | 🎯 | Migrations & CI/CD | 3+ hours |

</div>

## 🟢 Beginner Challenges

<div align="center">

![Beginner](https://img.shields.io/badge/Level-Beginner-brightgreen?style=flat-square)
![Time](https://img.shields.io/badge/Time-15--30%20min-blue?style=flat-square)

</div>

---

### 🎯 Challenge 1: Basic Entity Creation

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Create a `Category` entity for organizing products  

**📋 Requirements**:
- ✅ Create a JPA entity with id, name, description, and createdDate
- ✅ Add proper JPA annotations
- ✅ Include constructors, getters, and setters
- ✅ Add toString() method

**💡 Hints**: Use comments like `// Create Category entity with JPA annotations`

**🏆 Success Criteria**: Entity compiles and follows JPA best practices

</details>

---

### 🎯 Challenge 2: Simple Repository

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Create a repository for the Category entity

**📋 Requirements**:
- ✅ Extend JpaRepository
- ✅ Add a method to find categories by name
- ✅ Add a method to find categories containing a keyword in description

**💡 Hints**: Use interface naming conventions and Spring Data JPA query methods

**🏆 Success Criteria**: Repository interface with working custom query methods

</details>

---

### 🎯 Challenge 3: Basic Service

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Create a CategoryService with basic CRUD operations

**📋 Requirements**:
- ✅ Implement create, read, update, delete operations
- ✅ Add validation for required fields
- ✅ Handle duplicate category names

**💡 Hints**: Use `@Service` annotation and dependency injection

**🏆 Success Criteria**: Service class with proper error handling and validation

</details>

## 🟡 Intermediate Challenges

<div align="center">

![Intermediate](https://img.shields.io/badge/Level-Intermediate-yellow?style=flat-square)
![Time](https://img.shields.io/badge/Time-30--60%20min-blue?style=flat-square)

</div>

---

### 🎯 Challenge 4: Advanced Controller

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Create a REST controller with comprehensive endpoints

**📋 Requirements**:
- ✅ Create CategoryController with full REST API
- ✅ Implement proper HTTP status codes
- ✅ Add request/response validation
- ✅ Include pagination support
- ✅ Add search functionality

**💡 Hints**: Use `@RestController`, `@RequestMapping`, and proper HTTP methods

**🏆 Success Criteria**: RESTful API with proper status codes and validation

</details>

---

### 🎯 Challenge 5: Data Transfer Objects (DTOs)

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Create DTOs for better API design

**📋 Requirements**:
- ✅ Create CategoryDTO for API responses
- ✅ Create CreateCategoryRequest for POST requests
- ✅ Create UpdateCategoryRequest for PUT requests
- ✅ Implement proper mapping between entities and DTOs

**💡 Hints**: Consider using MapStruct or manual mapping methods

**🏆 Success Criteria**: Clean API design with proper separation of concerns

</details>

---

### 🎯 Challenge 6: Custom Exceptions

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Implement custom exception handling

**📋 Requirements**:
- ✅ Create CategoryNotFoundException
- ✅ Create DuplicateCategoryException
- ✅ Implement global exception handler
- ✅ Return proper error responses with details

**💡 Hints**: Use `@ControllerAdvice` and custom exception classes

**🏆 Success Criteria**: Comprehensive error handling with meaningful responses

</details>

## 🔴 Advanced Challenges

<div align="center">

![Advanced](https://img.shields.io/badge/Level-Advanced-orange?style=flat-square)
![Time](https://img.shields.io/badge/Time-1--2%20hours-blue?style=flat-square)

</div>

---

### 🎯 Challenge 7: Complex Relationships

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Implement Many-to-Many relationship between Category and Product

**📋 Requirements**:
- ✅ Modify Product entity to include categories
- ✅ Modify Category entity to include products
- ✅ Handle bidirectional relationships properly
- ✅ Implement cascade operations correctly

**💡 Hints**: Use `@ManyToMany`, `@JoinTable`, and consider fetch strategies

**🏆 Success Criteria**: Working bidirectional relationship without circular references

</details>

---

### 🎯 Challenge 8: Advanced Queries

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Implement complex database queries

**📋 Requirements**:
- ✅ Find products by category name
- ✅ Get category statistics (product count, average price)
- ✅ Implement full-text search across categories and products
- ✅ Add sorting and filtering capabilities

**💡 Hints**: Use `@Query` annotations, JPQL, or Criteria API

**🏆 Success Criteria**: Efficient queries with proper indexing and performance

</details>

---

### 🎯 Challenge 9: Caching Implementation

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Add caching to improve performance

**📋 Requirements**:
- ✅ Enable Spring Cache
- ✅ Cache frequently accessed categories
- ✅ Implement cache eviction strategies
- ✅ Add cache statistics and monitoring

**💡 Hints**: Use `@Cacheable`, `@CacheEvict`, and configure cache provider

**🏆 Success Criteria**: Improved performance with proper cache management

</details>

## 🚀 Expert Challenges

<div align="center">

![Expert](https://img.shields.io/badge/Level-Expert-red?style=flat-square)
![Time](https://img.shields.io/badge/Time-2--3%20hours-blue?style=flat-square)

</div>

---

### 🎯 Challenge 10: API Versioning

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Implement API versioning strategy

**📋 Requirements**:
- ✅ Create v1 and v2 versions of Category API
- ✅ Maintain backward compatibility
- ✅ Implement different response formats for each version
- ✅ Add deprecation notices

**💡 Hints**: Use URI versioning or header-based versioning

**🏆 Success Criteria**: Seamless version management with backward compatibility

</details>

---

### 🎯 Challenge 11: Security Implementation

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Add security to the Category API

**📋 Requirements**:
- ✅ Implement JWT-based authentication
- ✅ Add role-based authorization (USER, ADMIN)
- ✅ Secure endpoints appropriately
- ✅ Implement rate limiting

**💡 Hints**: Use Spring Security, JWT tokens, and method-level security

**🏆 Success Criteria**: Secure API with proper authentication and authorization

</details>

---

### 🎯 Challenge 12: Testing Suite

<details>
<summary>📋 <strong>Challenge Details</strong></summary>

**🎯 Objective**: Create comprehensive tests

**📋 Requirements**:
- ✅ Unit tests for all service methods
- ✅ Integration tests for repository layer
- ✅ API tests for controller endpoints
- ✅ Performance tests for database queries

**💡 Hints**: Use JUnit 5, Mockito, TestContainers, and Spring Boot Test

**🏆 Success Criteria**: High test coverage with meaningful test scenarios

</details>

## 🎯 Master Level Challenges

<div align="center">

![Master](https://img.shields.io/badge/Level-Master-purple?style=flat-square)
![Time](https://img.shields.io/badge/Time-3%2B%20hours-blue?style=flat-square)
![Expert Only](https://img.shields.io/badge/Expert-Only-red?style=flat-square)

</div>

---

### 🔥 Challenge 13: Spring Boot Version Upgrade (3.2.0 → 3.3.2)

<div align="center">

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0%20→%203.3.2-brightgreen?style=flat-square&logo=springboot)
![Difficulty](https://img.shields.io/badge/Difficulty-🔥🔥🔥🔥-red?style=flat-square)

</div>

<details>
<summary>🎯 <strong>Master Challenge Details</strong></summary>

**🎯 Objective**: Upgrade the existing Spring Boot application from version 3.2.0 to 3.3.2

**🔧 Copilot Prompt Template**:
```java
// Upgrade this Spring Boot project from version 3.2.0 to 3.3.2
// Handle all breaking changes and deprecated APIs
// Update all dependencies to compatible versions
// Ensure all features continue to work after upgrade
```
// Ensure all features continue to work after upgrade
```

**Requirements**:
1. **Update Project Configuration**:
   - Update `spring-boot-starter-parent` version in pom.xml
   - Update all Spring Boot dependencies to 3.3.2 compatible versions
   - Handle any Maven plugin compatibility issues

2. **Handle Breaking Changes**:
   - Review and update deprecated API usage
   - Update configuration properties that changed between versions
   - Modify any custom auto-configuration if needed
   - Update security configurations for new defaults

3. **Dependency Compatibility**:
   - Update H2 database version for Spring Boot 3.3.2 compatibility
   - Ensure JPA/Hibernate compatibility
   - Update test dependencies (JUnit, Mockito, etc.)
   - Verify all third-party library compatibility

4. **Testing & Validation**:
   - Run all existing tests and fix any failures
   - Test all API endpoints after upgrade
   - Verify application startup and configuration loading
   - Performance testing to ensure no regressions

**Expected Copilot Interactions**:
- "What are the breaking changes between Spring Boot 3.2.0 and 3.3.2?"
- "Update this configuration for Spring Boot 3.3.2 compatibility"
- "Fix this deprecated Spring Security configuration"
- "Update these JPA annotations for Hibernate 6.x compatibility"

### Challenge 2: Programming Language Migration (Java → Kotlin)
**Objective**: Convert the entire Java Spring Boot application to Kotlin
**Difficulty**: 🔥🔥🔥🔥🔥

**Copilot Prompt**:
```
// Convert this entire Java Spring Boot project to Kotlin
// Maintain all existing functionality and improve with Kotlin features
// Set up proper build configuration for Kotlin Spring Boot
// Use Kotlin best practices and idioms throughout
```

**Requirements**:
1. **Project Setup & Build Configuration**:
   - Convert Maven pom.xml to support Kotlin compilation
   - Add Kotlin Spring plugin and Kotlin JPA plugin
   - Configure Kotlin compiler options for Spring compatibility
   - Set up proper source directories for Kotlin

2. **Entity Conversion**:
   - Convert Product entity from Java to Kotlin data class
   - Use Kotlin nullable types appropriately
   - Implement Kotlin-style equals, hashCode, toString
   - Apply Kotlin JPA best practices

3. **Repository Layer Migration**:
   - Convert repository interfaces to Kotlin
   - Use Kotlin coroutines for async operations (optional)
   - Implement Kotlin extension functions for custom queries
   - Maintain Spring Data JPA functionality

4. **Service Layer Transformation**:
   - Convert service classes to Kotlin
   - Use Kotlin null-safety features
   - Implement Kotlin sealed classes for result types
   - Apply functional programming concepts where appropriate

5. **Controller Layer Migration**:
   - Convert REST controllers to Kotlin
   - Use Kotlin data classes for DTOs
   - Implement Kotlin validation annotations
   - Apply Kotlin coroutines for reactive endpoints

6. **Configuration & Application Class**:
   - Convert main application class to Kotlin
   - Update configuration classes to Kotlin
   - Use Kotlin DSL for bean definitions where applicable
   - Implement Kotlin-style dependency injection

**Expected Copilot Interactions**:
- "Convert this Java entity to Kotlin data class with JPA annotations"
- "Implement Kotlin null-safety in this service method"
- "Create Kotlin extension functions for this repository"
- "Convert this Java controller to Kotlin with coroutines"

### Challenge 3: GitHub Actions CI/CD Integration
**Objective**: Set up comprehensive CI/CD pipeline using GitHub Actions
**Difficulty**: 🔥🔥🔥🔥

**Copilot Prompt**:
```
// Create comprehensive GitHub Actions workflows for this Spring Boot project
// Include CI pipeline with testing, security scanning, and quality checks
// Set up CD pipeline with automated deployment
// Include dependency vulnerability scanning and code quality analysis
```

**Requirements**:
1. **Continuous Integration Workflow**:
   - Create `.github/workflows/ci.yml`
   - Set up multi-version Java testing (17, 21)
   - Run unit tests, integration tests, and generate coverage reports
   - Implement parallel job execution for faster builds

2. **Code Quality & Security**:
   - Integrate SonarQube or CodeQL for code analysis
   - Add dependency vulnerability scanning with Snyk or OWASP
   - Implement code formatting checks with Spotless
   - Set up license compliance checking

3. **Build & Artifact Management**:
   - Build Docker images for the application
   - Push artifacts to GitHub Packages or Docker Hub
   - Generate and publish API documentation
   - Create release artifacts with proper versioning

4. **Deployment Pipeline**:
   - Create staging and production deployment workflows
   - Implement environment-specific configurations
   - Set up health checks and rollback mechanisms
   - Configure automated database migrations

5. **Monitoring & Notifications**:
   - Set up build status notifications (Slack, email)
   - Implement deployment status monitoring
   - Configure alerts for failed builds or deployments
   - Create performance regression detection

**Workflow Structure**:
```yaml
# .github/workflows/ci.yml - Continuous Integration
name: CI Pipeline
on: [push, pull_request]
jobs:
  test:
    # Multi-version testing
  security:
    # Security scanning
  quality:
    # Code quality checks
  build:
    # Build and package
```

```yaml
# .github/workflows/cd.yml - Continuous Deployment  
name: CD Pipeline
on:
  push:
    branches: [main]
  release:
    types: [published]
jobs:
  deploy-staging:
    # Deploy to staging environment
  deploy-production:
    # Deploy to production environment
```

**Expected Copilot Interactions**:
- "Create GitHub Actions workflow for Spring Boot testing"
- "Set up Docker build and push in GitHub Actions"
- "Implement security scanning in CI pipeline"
- "Create deployment workflow with environment promotion"

## Advanced Challenge Rules

### Prerequisites for Master Level Challenges
- Completed at least 8 previous challenges
- Good understanding of Spring Boot ecosystem
- Familiarity with build tools (Maven/Gradle)
- Basic knowledge of CI/CD concepts
- Understanding of containerization (for GitHub Actions challenge)

### Success Criteria
- **Functionality**: All existing features work after changes
- **Best Practices**: Follow industry standards and conventions
- **Documentation**: Update README and technical documentation
- **Testing**: Comprehensive test coverage maintained or improved
- **Performance**: No significant performance degradation

### Copilot Usage Strategy
1. **Break Down Complex Tasks**: Use multiple focused prompts
2. **Iterative Development**: Build and test incrementally
3. **Error Resolution**: Ask Copilot to help debug issues
4. **Best Practices**: Request code reviews and improvements
5. **Documentation**: Generate updated documentation

## Resources for Master Challenges
- [Spring Boot Upgrade Guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.3-Release-Notes)
- [Kotlin Spring Boot Documentation](https://spring.io/guides/tutorials/spring-boot-kotlin/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Spring Boot Guide](https://spring.io/guides/gs/spring-boot-docker/)

## Challenge Support & Community
- Use GitHub Copilot Chat for complex problem-solving
- Create issues in the repository for tracking progress
- Share solutions and learnings with the team
- Document any innovative Copilot usage patterns discovered