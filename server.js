import express, { json } from "express";
import { config } from 'dotenv';
import connectDB from './src/config/db.js';
// import userRoutes from '';

config();
connectDB();

const app = express();

app.use(json());
// app.use('/', userRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})