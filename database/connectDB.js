
import mongoose from "mongoose";


const Connection = () => {

    mongoose.connect("mongodb+srv://myUser:user12345@cluster0.wk0dk.mongodb.net/love?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });

};


export default Connection;
