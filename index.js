import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from './Routes/userRoutes.js';
import chatRoute from './Routes/chatRoute.js';
import messageRoute from './Routes/messageRoute.js';
import connectDB from "./database/connectDB.js";

const app = express();
const PORT = process.env.PORT || 5000;


import dotenv from 'dotenv';
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

connectDB();

app.get('/', (req,res)=>{

    res.send("Hello World!");

});

app.use('/api/users',userRoute);
app.use('/api/chats',chatRoute);
app.use('/api/messages',messageRoute);


app.listen(PORT, ()=>{
    console.log("server running...");
});

