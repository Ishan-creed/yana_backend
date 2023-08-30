import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({

    members: Array,
    thought:{
        String
    }

}, {
    timestamps: true,
});


const chatModel = mongoose.model("Chat",chatSchema);

export default chatModel;