import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import User, { Users } from '../../../models/User'
import { MongoServerError } from "mongodb";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const { method } = req

    if(method !== 'POST'){
        res.status(400).json({success: false, method: method})
    }

    try {
        const {username, password} = req.body
        await dbConnect()
        let user = await User.find({username})
        if(!user){
            res.status(400).json({success: false, error: 'user_not_found'})
        }
        user = await User.find({email: username, password: password})
        if(!user){
            res.status(400).json({success: false, error:'incorrect_password'})
        }
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false})
      }

}