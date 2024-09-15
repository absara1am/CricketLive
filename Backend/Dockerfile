# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven wrapper files and pom.xml first (caching dependency layers)
COPY .mvn/ .mvn
COPY mvnw pom.xml ./ 

# Give execution permission to the Maven wrapper
RUN chmod +x ./mvnw

# Download the dependencies (without running the full build)
RUN ./mvnw dependency:go-offline

# Copy the rest of the project files
COPY src ./src

# Package the application (creates the jar file)
RUN ./mvnw clean package -DskipTests

# Expose the port your Spring Boot app runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/CricketLive-0.0.1-SNAPSHOT.jar"]
