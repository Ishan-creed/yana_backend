import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from './Routes/userRoutes.js';
import chatRoute from './Routes/chatRoute.js';
import messageRoute from './Routes/messageRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

import dotenv from 'dotenv';
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req,res)=>{

    res.send("Hello World!");

});

app.use('/api/users',userRoute);
app.use('/api/chats',chatRoute);
app.use('/api/messages',messageRoute);


mongoose.connect("mongodb+srv://myUser:user12345@cluster0.wk0dk.mongodb.net/love?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("mongo db connected...")).catch((error)=> console.log(error));




app.listen(PORT, ()=>{
    console.log("server running...");
});