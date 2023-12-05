import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { method } = req

    if(method !== 'POST'){
        res.status(400).json({success: false})
    }

    try {
        const {name, email, password } = req.body
        console.log("name", name)
        console.log("email", email)
        console.log("password", password)
        res.status(200).json({text: 'hello'})
    } catch (error) {
        res.status(400).json({success: false})
    }

}