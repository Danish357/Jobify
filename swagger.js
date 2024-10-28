import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:5000',
//   basePath: '/api/v1', // <-- Set the correct base path here
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const routes = ['./index.js']; // Ensure you pass in the main file (index.js) that imports all routes

swaggerAutogen()(outputFile, routes, doc);
