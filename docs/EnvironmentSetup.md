Certainly! Docker is a fantastic tool to create, deploy, and run applications using containers. It ensures that your application runs the same way regardless of where it's deployed since the environment is consistent. Here is a step-by-step guide on how you can set up your backend and database using Docker.

**1. Install Docker:**
First things first, you need Docker installed on your machine. You can download Docker Desktop from the official Docker website. It's available for Windows, macOS, and several flavors of Linux.

Link: https://www.docker.com/products/docker-desktop

**2. Setup Project Folders:**
Next, we want to set up the project folders. Create a new folder for your project and then create two subfolders inside it: `backend` and `frontend`. The `backend` folder will contain the `Node.js/Express` application, and the `frontend` folder (future add) will contain your React application.

**3. Create a `docker-compose.yml` file:**
Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services, then with a single command, you create and start all the services from your configuration.

Create a `docker-compose.yml` file in the root directory of your project and add the following content:

```yaml
services:
  backend:
    container_name: server
    restart: always
    build:
      context: backend
      args: 
        NODE_PORT: ${NODE_PORT}
    ports:
      - "${NODE_PORT}:${NODE_PORT}"
    depends_on:
      - mongo
    environment:
      - SECRET_KEY=${SECRET_KEY}
  mongo:
    container_name: mongo
    image: mongo:5.7.0
    restart: always
    ports:
      - "27017:27017"
    volumes:
      - ./data:/data/db
    user: "1000:1000"
```

In this file, we're defining two services, `app` and `db`. The `app` service is your Node.js application, which is built from the Dockerfile in the current directory (the `.` in the `build` field). The `db` service is a PostgreSQL database, using the official PostgreSQL image from Docker Hub.

Create another file called `.env` in the root directory of your project and add the following content:
- TBD Need to update this section when I have a better understanding of the environment variables needed for the backend.

```env
SECRET_KEY=mysecretkey
```

**4. Create a Dockerfile:**
In the root directory of your backend project, create a new file called `Dockerfile` (no extension). This file will specify how Docker should build your application image. Your Dockerfile for the Node.js/Express backend might look like this:

```Dockerfile
# Use an official Node.js runtime as the base image
FROM node:20.5.0

# Set the working directory in the container to /app
WORKDIR /usr/src/app

# Copy packages into the container
COPY package*.json /usr/src/app/

# Install any needed packages specified in package.json
RUN npm ci

# Bundle app source
COPY . /usr/src/app/

# Make port 8080 available to the world outside this container
ARG NODE_PORT
EXPOSE $NODE_PORT

# Run the app as a non-root user
USER node

# Run the app when the container launches
CMD ["npm", "run", "start"]
```

**5. Create a .dockerignore:**
In the root directory of your backend project `/PROJECTMANAGEMENTAPP/backend/`, create a new file called `.dockerignore`. This file will specify what files Docker should ignore when building your application image.

```
node_modules
npm-debug.log
Dockerfile
.dockerignore
```

**6. Create a package.json:**
In the root directory of your backend project `/PROJECTMANAGEMENTAPP/backend/`, create a new file called `package.json`. This file will help setup the project as needed by node.

```json
{
    "name": "projectmanagementapp",
    "version": "1.0.0",
    "description": "A personal project management tool designed to assist with project selection, task breakdown, scheduling, and progress tracking, incorporating a unique dashboard for swift project recaps.",
    "main": "index.js",
    "scripts": {
        "start": "node server.js"
    },
    "keywords": [],
    "author": "Benjamin Buddle",
    "license": "MIT",
    "dependencies": {
        "express": "^4.18.2",
        "mongodb": "^5.7.0",
        "mongoose": "^7.4.3"
    }
}
```

**6. Build and run your Docker containers:**
Now that everything is set up, you can build and run your Docker containers using the following command:

```bash
docker-compose up --build
```

This command will start your app and database containers, and your app will be accessible at http://localhost:8000.

Remember, you will need to set up your Node.js application to connect to the PostgreSQL database using the `DATABASE_URL` environment variable. Also, any changes in the code will require you to rebuild the Docker images.

This should give you a solid start with Docker, but Docker is an extensive platform, and I'd recommend going through its documentation and understanding how it works for a smoother development experience.

Once Docker is up and running, you should be good to start developing your application. Here are a few steps you should follow for your development workflow:

1. **Start Docker Containers**: You can start your containers with the command `docker-compose up`. This command will start all the services defined in your `docker-compose.yml` file. Your application will be accessible at the address http://localhost:8000 or whatever port you've specified.

2. **Coding**: Now you can start developing your application. Since you're developing the backend with Node.js and Express, you can start by setting up your routes and then your controllers. Then, set up your connection with the PostgreSQL database and define your models.

3. **Testing**: Docker also facilitates testing by providing isolated environments. You can test your application while it's running in the Docker container.

4. **Stopping Containers**: Once you're done with your development for the time being, you can stop your Docker containers by hitting `CTRL+C` in the terminal where you ran `docker-compose up`, or in a new terminal, run `docker-compose down` in the same directory as your `docker-compose.yml` file.

5. **Restarting Development**: The next time you want to develop, you just need to start your Docker containers again with `docker-compose up`.

Remember to frequently commit your changes to Git and push them to your remote repository. It's important to keep your code safe and track your progress.

One thing to note: depending on your Dockerfile and docker-compose setup, you may or may not have live reloading (the ability for your application to refresh and use the latest code without having to rebuild the Docker image). If you find that changes to your code aren't being reflected when you refresh your application, you may need to stop your Docker containers and run `docker-compose up --build` again to create a new Docker image with your latest code. There are ways to set up your Docker configuration to use live reloading, but they can be a bit more advanced.
