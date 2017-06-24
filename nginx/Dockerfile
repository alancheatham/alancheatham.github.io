# Extend a very minimal image with NGINX in it.
# "alpine" linux is a very minimal, barebones
#   distribution which is great for Docker images!
FROM nginx:alpine

# Remove the default config in NGINX so nothing gets in the way
RUN rm /etc/nginx/conf.d/default.conf

# Add our configuration files
ADD sites/* /etc/nginx/conf.d/

# Expose port 80 so we can access the server from the outside world
EXPOSE 80
