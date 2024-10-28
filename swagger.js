import swaggerAutogen from 'swagger-autogen';
const isProduction = process.env.NODE_ENV === 'production';
const doc = {
  info: {
    title: 'My API',
    description: 'This is a detailed description of the API endpoints and their usage.'
  },
  host: isProduction ? 'jobify-q4yg.onrender.com' : 'localhost:5000',
  //  basePath: '/api/v1', // <-- Set the correct base path here
   schemes: [isProduction ? 'https' : 'http'],
};

const outputFile = './swagger-output.json';
const routes = ['./index.js']; // Ensure you pass in the main file (index.js) that imports all routes

swaggerAutogen()(outputFile, routes, doc);
