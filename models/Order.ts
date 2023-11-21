import mongoose from 'mongoose'


export interface Orders extends mongoose.Document{
    buyer: number
    location: string
    items: Record<string, string>[] 
    createdAt: string
    status: string
}

const OrderSchema = new mongoose.Schema({
  buyer: {type: Number, required: true},
  location: {type: String, required: true},
  items: {type: [Object], required: true},
  createdAt: {type: String, required: true},
  status: {type: String, required: true}
})

export default mongoose.models.Order || mongoose.model<Orders>('User', OrderSchema)