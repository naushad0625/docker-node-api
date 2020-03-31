# docker-node-api
> Simple guide to run a node api with docker container on **ubuntu**. This is for only docker image creation and containerization, not for node api creation.

### Docker Installation Guide 
Go to this **[link](https://docs.docker.com/install/linux/docker-ce/ubuntu/)** to install Docker on ubuntu

### Clone Github Repository
You can clone this repository with following command
```bash
      git clone https://github.com/naushad0625/docker-node-api.git
```

### Create Docker Image
Run the following command on terminal to create docker image.
```bash
      docker build -t docker-node-api . 
```

### List Docker Images
Check if image was created successfully with following command - 
```bash
      docker images
```

### Run Container With Created Image
After successful image creation, it's time to run image into a container. Command to run image is given below -
```bash
      docker run -d --name nodeApi -p 9000:3000 docker-node-api
```

### List Running Docker Containers
List all running docker containers with following command - 
```bash
      docker ps
```

### List All Docker Containers (both running and stopped)
List all running docker containers with following command - 
```bash
      docker ps -a
```
