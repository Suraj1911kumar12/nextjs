const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: [true, 'Email Should be Unique'],
        required: [true, 'Please provide email']
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})


export const Users = mongoose.models.users || mongoose.model("users", userSchema)