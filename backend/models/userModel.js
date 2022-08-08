import mongoose from 'mongoose';
import pkg from 'mongoose';
const { model } = pkg;
const Schema = mongoose.Schema;

// Represents user collection in MongoDB  
const User = model(
    "User",
    new Schema({
        username: String,
        email: String,
        password: String,
    })
);

export default User;