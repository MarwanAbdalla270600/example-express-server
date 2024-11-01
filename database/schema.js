import mongoose, { Schema } from "mongoose";


const UserModelSchema = new Schema({
    id: Number,
    firstname: String,
    lastname: String
})

export const UserModel = mongoose.model('UserList', UserModelSchema)