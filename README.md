# Docker environment for react, express & mongo db development.

Docker environment for testing out building apps with react, express and mongodb locally. Also includes a dockerfile for easy [production docker deploys, for example on heroku](https://devcenter.heroku.com/articles/container-registry-and-runtime).

# Prerequisites

[Get docker here](https://docs.docker.com/get-docker/)

# Local Development

```
$ docker-compose up
```

Go to http://localhost:3000 in your browser.

# Deployment on Heroku

Login to container Registry

```
$ heroku container:login
```

Create a heroku app

```
$ heroku create
```

Set environment variable for your mongo database, for example on [MongoDB Atlas](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster).

```
$ heroku config:set MONGO_CONNECTION_STRING=your-mongodb-url
```

Build the image and push to Container Registry:

```
$ heroku container:push web
```

Then release the image to your app:

```
$ heroku container:release web
```

Now open the app in your browser:

```
$ heroku open
```

# Local testing

```
$ docker-compose up
```

Run tests in client container

```
$ docker-compose exec client npm run test
```

# Demo

[Test out deployed app](https://intense-crag-84291.herokuapp.com/)
