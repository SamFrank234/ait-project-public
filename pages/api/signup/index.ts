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
        await dbConnect()
        const user = await User.create(
          req.body
        )
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        console.log(error)
        if(error instanceof Object && Object.hasOwn(error, 'code')){
            res.status(400).json({ success: false, error: error})
        }
        res.status(400).json({ success: false})
      }

}