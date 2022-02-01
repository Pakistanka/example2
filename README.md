# GMI Software
## Landing page for GMI Software company

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

GMI Software is an outsourcing development company specialized on backend/frontend development, mobile development, security code audit, DevOps services.

## Installation

GMI Software doesn't require anything except your computer.

Install the dependencies and devDependencies and start the server.

Go to
```
https://gitlab.com/hodl/gmi-soft
```

Download or Clone the project
```
Download - push the button "Download"

Clone - "git clone https://gitlab.com/hodl/gmi-soft.git"
```

Then unpack the project and double click on index.html file.
The project starts working.  ✨Magic ✨

## Docker

GMI Software is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd gmi-soft
 docker build -t gmi-soft .
```

This will create the dillinger image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --name=gmi-soft gmi-soft
```


Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```





