import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import cors from "cors";
import { connect } from "./config/db.config";
import TodoRouter from "./routes/todo.routes";
import swaggerUi from "swagger-ui-express";

//Environment Variables
const app: Application = express();
const PORT: number = Number(process.env.PORT || 3000);

//Swagger Docs
const swaggerSpec = require("./config/swagger.config");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Config for express app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/todos", TodoRouter);


app.get('/', async (req, res) => res.send(`ToDo API running successfully since ${new Date()}`));


// Start express server
app.listen(PORT, () => {
    console.log(`Server started listening at ${PORT}`);
    connect;
})