// https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/api/pets/index.ts

import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import Order from '../../../models/Order'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'PUT':
      try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!order) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: order })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}