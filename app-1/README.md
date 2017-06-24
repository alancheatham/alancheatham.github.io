Node App
========

This directory and its children house a node app.

Directory Structure
-------------------

```
app-1/
├── routes/            (route definitions)
│   ├── get_index.js   (route definition for '/')
├── Dockerfile         (dockerfile for building the image)
├── Dockerfile.dev     (dockerfile for building a development image)
├── index.js           (entry point)
├── package-lock.json  (npm lock file for locking down dependency versions))
├── package.json       (npm package file for this project)
├── README.md          (this file)
```

Building the production image
-----------------------------

You can build the image just like normal:

```bash
docker build -t alancheatham/app-1 .
```

Running the production image
----------------------------

You can run the image like so:

```bash
docker run -it --rm -p $HOST_PORT:8080 alancheatham/app-1
```

Notes:

+ `-it` will show output in the terminal and allow interaction
+ `--rm` will remove the container when it stops
+ `$HOST_PORT` is the port on your local machine you would like to access the server via
+ You can also inclue `-e PORT=XXXX` where `XXXX` is a number if you would like to customize the port that the node app listens on within the container.
    - This will also require that you update the `-p $HOST_PORT:8080` to be `-p $HOST_PORT:XXXX` so that you can access the port from outside the container.

Building the development image
------------------------------

You can build the image specifying the development Dockerfile.

```bash
docker build -f Dockerfile.dev -t alancheatham/app-1:dev .
```

Running the development image
-----------------------------

You can run the image like so:

```bash
docker run -it --rm -p $HOST_PORT:8080 alancheatham/app-1:dev
```

Notes:

+ `-it` will show output in the terminal and allow interaction
+ `--rm` will remove the container when it stops
+ `$HOST_PORT` is the port on your local machine you would like to access the server via
+ You can also inclue `-e PORT=XXXX` where `XXXX` is a number if you would like to customize the port that the node app listens on within the container.
    - This will also require that you update the `-p $HOST_PORT:8080` to be `-p $HOST_PORT:XXXX` so that you can access the port from outside the container.
