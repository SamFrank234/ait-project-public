import mongoose from "mongoose";

mongoose.connect(process.env.DSN)

const Buyer = mongoose.Schema({
        username: String,
        email: String,
        token: String,
        status: String,
        orders: []
})