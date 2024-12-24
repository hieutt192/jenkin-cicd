# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy application files
COPY . .

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 80

# Start the app
CMD ["node", "server.js"]
