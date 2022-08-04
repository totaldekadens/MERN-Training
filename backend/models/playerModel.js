import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Det som läggs in i objektet will be values that your database is taking, and what the types they're are expecting.
export const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,  // Find correct type for email in mongoose documentation.
        required: true
    },
    phone: {
        type: Number
    },
    iscoach: {
        type: Boolean,
        default: false
    },
    team: {
        type: String
    },
    speed: {
        type: Number,
        enum: [1, 2, 3]
    },
    strength: {
        type: Number,
        enum: [1, 2, 3]
    },
    endurance: {
        type: Number,
        enum: [1, 2, 3]
    },
    ability: {
        type: Number,
        enum: [1, 2, 3]
    },
    techniques: {
        type: Number,
        enum: [1, 2, 3]
    },
    tactical: {
        type: Number,
        enum: [1, 2, 3]
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});