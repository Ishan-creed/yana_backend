import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    chatId : String,
    senderId:String,
    text:String

},{
    timestamps:true
});

const messageModel = new mongoose.model("Message",messageSchema);

export default messageModel;