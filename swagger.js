const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Ingredients API',
        description: 'Ingredients CRUD example using Express, Mysql, Typescript'
    },
    host: 'localhost:3000',
    basePath: '/api/ingredients',
};

const outputFile = './swagger-spec.json';
const routes = ['./routes/ingredientRoutes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);