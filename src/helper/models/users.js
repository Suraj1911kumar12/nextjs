const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: String,
})


export const Users = mongoose.models.users || mongoose.model("users", userSchema)