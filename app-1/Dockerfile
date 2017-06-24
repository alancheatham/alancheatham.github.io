# Inherit from the base node image (version 8.1.x)
FROM node:8.1

# Copy over the package.json file
ADD package.json /tmp/package.json

# Install all dependencies
#   Note: Doing it like this will let Docker cache
#       the dependencies so it won't redownload all
#       of them when rebuilding the image unless our
#       package.json has changed.
RUN cd /tmp && npm install

# Make our application directory and put the node modules
#   in it
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Set our working directory
WORKDIR /opt/app

# Copy over our project
ADD . /opt/app

# Expose port 8080
EXPOSE 8080

# Default to running "npm start" when the image is run
CMD ["npm", "start"]
