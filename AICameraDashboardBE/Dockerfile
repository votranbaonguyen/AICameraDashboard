# Use the official Maven image as the builder
FROM maven:3.8.4-openjdk-11 AS builder

# Set the working directory
WORKDIR /app

# Copy the pom.xml file
COPY pom.xml .

# Download the project dependencies
RUN mvn dependency:go-offline -B

# Copy the project source code
COPY src ./src

# Build the application
RUN mvn package -DskipTests

# Use the official OpenJDK image as the runtime
FROM openjdk:11-jre-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file from the builder stage
COPY --from=builder /app/target/*.jar ./app.jar

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
