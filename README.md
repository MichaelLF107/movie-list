# Setup Dev Enviroment

## Front-end

Open a terminal on the root folder of the project and run:

### `npm install`
### `npm start`

The app will run on on [http://localhost:3000](http://localhost:3000)

## Back-end

Open a terminal on the api folder of the project and run:

The first time you will need to run
### `docker-compose up -d`
### `npm i --global @adonisjs/cli`
### `adonis migration:run`

After the initial setup of the docker container and the migrations, you can run:

### `adonis serve --dev`

This will run the API on [http://localhost:3333](http://localhost:3333)
