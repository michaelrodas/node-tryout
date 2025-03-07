# Ingredients CRUD using Typescript, Express, Mysql (NodeJS Sequelize)

## Updating Swagger specification
> It uses swagger autogen, generates the file "swagger-spec.json"

For updating swagger documentation: `npm run swagger`

## Ensuring a database
Run the database via Docker: `docker-compose up -d`
Create database schema: `docker exec -it {container} bash`

## Run the application
Initialize project: `npm init`
Install necessary modules: `npm install express sequelize mysql2 cors swagger-autogen swagger-jsdoc swagger-ui-express --save`
Start the app from `bin/www`

Go to [Swagger](http://localhost:3000/api-docs) for testing

## Layers communication 
model -> controller -> routes -> app
