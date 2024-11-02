import mongoose, { Schema } from "mongoose";


const UserModelSchema = new Schema({
    firstname: String,
    lastname: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, { versionKey: false })

export const UserDbModel = mongoose.model('User', UserModelSchema)