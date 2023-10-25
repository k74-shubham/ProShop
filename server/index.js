import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'

import Connection from "./database/db.js";
import defaultData from "./default.js";
import Router from "./routes/route.js";

const app = express();
dotenv.config();    // dotenv is initialized here by config function

app.use(cors());
app.use(express.json());
app.use('/', Router);

const PORT = 8000;

// console.log(process);
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))

defaultData();