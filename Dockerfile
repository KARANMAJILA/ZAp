# Use an official Node runtime as a parent image
FROM node:18

# Set working directory
WORKDIR /app

# Copy frontend files and install dependencies
COPY package*.json ./
RUN npm install
COPY . .

# Build frontend
RUN npm run build

# Set up backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend .

# Expose backend port
EXPOSE 5000

# Start backend
CMD ["npm", "run", "dev"]
