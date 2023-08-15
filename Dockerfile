
# Use an official Node.js runtime as the base image
FROM node:18-alpine AS BUILD_IMAGE

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the project
RUN npm run build

# Here, we are implementing the multi-stage build. It greatly reduces our size.
# It also won't expose our code in our container as we will only copy
# the build output from the first stage.

# Beginning of second stage.
FROM node:18-alpine as PRODUCTION_IMAGE

# Set the working directory in the production image
WORKDIR /app

# Copy the /app/dist folder from the BUILD_IMAGE.
# dist folder - when we run npm run build, 
# vite will generate dist directory that contains our build file

COPY --from=BUILD_IMAGE /app/dist/ /app/dist/

# Expose the desired port
EXPOSE 3000

# to run npm commands as: npm run preview,
# we need package.json

COPY package.json .
COPY vite.config.ts .

# we need typescript as this project is based on typescript.
RUN npm install typescript
EXPOSE 3000
CMD ["npm", "run", "preview"]
