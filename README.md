# docker-node-api
> Simple guide to run a node api with docker container on **ubuntu**

### Docker installation guide 
Go to this **[link](https://docs.docker.com/install/linux/docker-ce/ubuntu/)** to install Docker on ubuntu

### Clone Github repository
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

### List Docker Containers
List all running docker containers with following command - 
```bash
      docker container ls
```
