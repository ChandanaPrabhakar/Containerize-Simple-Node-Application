import express, { json } from "express";
import { config } from 'dotenv';
import connectDB from './src/config/db.js';
import students from './src/routes/studentRoutes.js';

config();
connectDB();

const app = express();

app.use(json());
app.use('/', students);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})