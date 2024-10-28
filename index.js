import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json' assert { type: 'json' };

dotenv.config();

const app = express();

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Start the server and connect to the database
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running at http://localhost:${PORT}`);
});
