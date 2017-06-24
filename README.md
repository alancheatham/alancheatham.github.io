Alan Cheatham
=============

This directory and its children house the composed website
for Alan Cheatham, developer extraordinaire (title pending).

Directory Structure
-------------------

```
alancheatham/
├── app-1/                  (a node app)
│   ├── README.md           (README file for the individual project)
├── nginx/                  (the main NGINX server)
│   ├── README.md           (README file for the individual project)
├── .dockerignore           (list of files/folders for Docker to ignore)
├── docker-compose.dev.yml  (docker-compose development configuration)
├── docker-compose.yml      (docker-compose production configuration)
├── package.json            (npm project configuration)
├── README.md               (this file)
```

Building for production
-----------------------

To build the whole application for production, you can run:

```bash
docker-compose build
```

Running in production
---------------------

To run the whole application in production, you can run:

```bash
docker-compose up
```

Notes:
+ Optionally (and likely), you can add `-d` to the end of the command to run the processes in the background.

Building for development
------------------------

To build the whole application for development, you can run:

```bash
docker-compose -f docker-compose.dev.yml build
```

Running in development
----------------------

To build the whole application for development, you can run:

```bash
docker-compose -f docker-compose.dev.yml up
```

Notes for building
------------------

It should be noted that building for both environments will
not conflict. The development images are specifically tagged
as "dev" and production images are tagged as "latest". In fact,
if you update the host port mapping for NGINX in the
docker-compose files to be different, you can run both versions
simultaneously!

Notes for development
---------------------

Currently, the development Dockerfile for `app-1` is setup to
install and run `nodemon` which will automatically reload the
node app when a file changes. The files being watched are
currently hard-coded into the Dockerfile. This can be improved
by using a `nodemon` configuration file and updating options
there.

`app-1` is simply a barebones example of what is possible. You
can indeed add a fully functional web app development system
with webpack and the likes. Just make sure that you toggle
file polling **on** if you are using Docker toolbox because
otherwise file watching will fail (limitation of virtualbox).

The project is also setup with `husky` which means it is ready
to handle Git hooks. Currently, `npm test` is run whenever you
`git commit`. No tests exist right now, but it is a great
starting point to add some!
