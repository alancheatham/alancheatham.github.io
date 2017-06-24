NGINX
=====

This directory and its children house the main NGINX server
for the site. All requests are routed through this server.
Some are proxied to other applications, but may also just
serve static files via `try_files`.

Directory Structure
-------------------

```
nginx/
├── sites/                    (all nginx configuration files)
│   ├── alancheatham.com.conf (configuration for alancheatham.com)
├── Dockerfile                (dockerfile for building the nginx image)
├── README.md                 (this file)
```

Building the image
------------------

You can build the image just like normal:

```bash
docker build -t alancheatham/nginx .
```

Running the image
-----------------

You can run the image like so:

```bash
docker run -it --rm -p $HOST_PORT:80 alancheatham/nginx
```

Notes:

+ `-it` will show output in the terminal and allow interaction
+ `--rm` will remove the container when it stops
+ `$HOST_PORT` is the port on your local machine you would like to access the server via

Updating a configuration
------------------------

To update a site configuration, simply make the changes to the
appropriate file in `sites/`. Then, rebuild the image:

```bash
docker build -t alancheatham/nginx .
```

Adding a new configuration
--------------------------

To add a new configuration, just add a new `*.conf` file in the
`sites/` directory. Then, rebuild the image:

```bash
docker build -t alancheatham/nginx .
```
