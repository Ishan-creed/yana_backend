
import mongoose from "mongoose";


const Connection = () => {

    mongoose.connect("mongodb+srv://myUser:Ua54u9U7Z4k70utN@cluster0.wk0dk.mongodb.net/love?retryWrites=true&w=majority", {
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