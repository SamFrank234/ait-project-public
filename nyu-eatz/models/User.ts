import mongoose from 'mongoose'

export interface Users extends mongoose.Document{
    username: string
    email: string
    password: string
    token: string
    status: string
    orders: number[]
}

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: String,
    token: String,
    status: String,
    orders: []
})

export default mongoose.models.User || mongoose.model<Users>('User', UserSchema)