import mongoose from 'mongoose'


export interface Orders extends mongoose.Document{
    buyer: number
    location: string
    items: string[] 
    createdAt: Date
    status: string
}

const OrderSchema = new mongoose.Schema({
  buyer: {type: Number, required: true},
  location: {type: String, required: true},
  items: {type: [], required: true},
  createdAt: {type: Date, default: Date.now},
  status: {type: String, required: true}
})

export default mongoose.models.Order || mongoose.model<Orders>('Order', OrderSchema)