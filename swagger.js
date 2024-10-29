import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    title: 'My API',
    description: 'This is a detailed description of the API endpoints and their usage.'
  },
  host:'jobify-cqod.onrender.com',
  basePath: '/',
   schemes: ['https'],
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];
swaggerAutogen()(outputFile, routes, doc);
