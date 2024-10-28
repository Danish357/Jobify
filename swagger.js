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
const routes = [
  './routes/user.route.js',
  './routes/company.route.js',
  './routes/job.route.js',
  './routes/application.route.js',
]; // Ensure you imports all routes

swaggerAutogen()(outputFile, routes, doc);
