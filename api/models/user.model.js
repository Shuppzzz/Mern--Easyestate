import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    
    },
    avatar:{
        type: String,
        default: "data:image/jpeg;base64,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"
    },

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;

