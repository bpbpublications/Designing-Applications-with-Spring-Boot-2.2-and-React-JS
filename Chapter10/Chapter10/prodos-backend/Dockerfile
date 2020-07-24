#This is a Dockerfile for a microservice application
# Use an official Java 8 runtime as a parent image
FROM openjdk:8-jdk-alpine
VOLUME /tmp
#Set maintainer email id
MAINTAINER admin@dineshonjava.com
# Set the working directory to /app

WORKDIR /app
# Copy the current directory contents into the container at /app
ADD . /app
# Copy the current directory contents into the container at /app
ADD target/prodos-0.0.1-SNAPSHOT.jar prodos-backend.jar
# Make port 80 available to the world outside this container
EXPOSE 80
# Define environment variable
ENV JAVA_OPTS=""
# Run prodos-backend.jar when the container launches
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar prodos-backend.jar" ]