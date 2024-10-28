import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    title: 'My API',
    description: 'This is a detailed description of the API endpoints and their usage.'
  },
  host:'jobify-q4yg.onrender.com',
  basePath: '/',
   schemes: ['https'],
};

const outputFile = './swagger-output.json';
const routes = ['./index.js']; // Ensure you pass in the main file (index.js) that imports all routes

swaggerAutogen()(outputFile, routes, doc);
