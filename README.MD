# Basic-microservice

## Tech and Tool introduction

- Node servers
- HAPROXY load balancer
- Docker

### 1. Node servers

Here I created basic node server with express framework.

### 2. HAPROXY

HAProxy is a free, open source high availability solution, providing load balancing and proxying for TCP and HTTP-based applications by spreading requests across multiple servers. It is written in C and has a reputation for being fast and efficient.
[Click here](https://hub.docker.com/_/haproxy) to learn more about HAPROXY.

### 3. Docker

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.
[Click here](https://towardsdatascience.com/docker-for-absolute-beginners-what-is-docker-and-how-to-use-it-examples-3d3b11efd830) for easy intro about it.

## Flow of the system

I created a basic server with express which displays the port number and name dynamically from `env` variables. After it I used a [load balancer](#2-haproxy) to ditrubute the load of multiple servers.
I specified config of lb in haproxy dir. to intruct it for my server handling. I wrote a docker-compose file and spacified the container name, port, image name and env variables in it and finally used command `docker-compose-up` to spin up the containers.
