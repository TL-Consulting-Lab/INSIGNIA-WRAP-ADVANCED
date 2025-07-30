# Maven Configuration Setup Guide

## ✅ Current Status
- **Java**: ✅ Installed (Java 21.0.8)
- **JAVA_HOME**: ✅ Set (`C:\Program Files\Java\jdk-21`)
- **Maven Wrapper**: ✅ Available (mvnw.cmd)
- **Spring Boot**: ✅ Working

## 🛠️ Solution Implemented

### Issue Identified
PowerShell execution policy was preventing the direct execution of `.\mvnw.cmd spring-boot:run`.

### Solutions Provided

#### 1. **PowerShell Function (Recommended)**
```powershell
# Run this once in your PowerShell session:
function mvnw { cmd /c "mvnw.cmd $args" }

# Then use:
mvnw spring-boot:run
mvnw --version
mvnw clean install
```

#### 2. **PowerShell Script**
```powershell
# Use the provided script:
.\run-app.ps1
```

#### 3. **Direct CMD Approach**
```powershell
cmd /c "mvnw.cmd spring-boot:run"
```

#### 4. **Batch File**
```cmd
# Use the provided batch file:
.\run-spring-boot.cmd
```

## 🚀 How to Run Your Spring Boot Application

### Option 1: Using PowerShell Function (Best)
```powershell
# First, create the function:
function mvnw { cmd /c "mvnw.cmd $args" }

# Then run:
mvnw spring-boot:run
```

### Option 2: Using PowerShell Script
```powershell
.\run-app.ps1
```

### Option 3: Direct CMD
```powershell
cmd /c "mvnw.cmd spring-boot:run"
```

## 🔧 Environment Variables Verified
- ✅ **JAVA_HOME**: `C:\Program Files\Java\jdk-21`
- ✅ **Java Version**: 21.0.8
- ✅ **Maven Wrapper**: Working via cmd

## 📋 Next Steps

1. **Add to PowerShell Profile** (Optional - for permanent setup):
   ```powershell
   # Check if profile exists:
   Test-Path $PROFILE
   
   # If false, create it:
   New-Item -ItemType File -Path $PROFILE -Force
   
   # Add the function:
   Add-Content $PROFILE "function mvnw { cmd /c `"mvnw.cmd `$args`" }"
   ```

2. **Test the Application**:
   - Start: Use any of the methods above
   - Access: http://localhost:8080
   - API: http://localhost:8080/api/products
   - Database Console: http://localhost:8080/h2-console

## ✅ Verification Commands
```powershell
# Check Java
java -version

# Check JAVA_HOME
echo $env:JAVA_HOME

# Check Maven wrapper
mvnw --version  # (after setting up the function)

# Run application
mvnw spring-boot:run
```

## 🎯 Success Indicators
- ✅ Java 21 installed and configured
- ✅ Maven wrapper functional
- ✅ Spring Boot application starts successfully
- ✅ Application accessible on port 8080
- ✅ Sample data loaded automatically
