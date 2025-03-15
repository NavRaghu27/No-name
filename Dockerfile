# Use a Node.js image to serve the Angular app in development mode
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install -g @angular/cli
# Copy the Angular application code
COPY . .

# Expose port 4200 (Angular's default port)
EXPOSE 4200

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check", "--poll", "2000"]
