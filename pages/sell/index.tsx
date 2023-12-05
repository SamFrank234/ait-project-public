// inspired by https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/%5Bid%5D/index.tsx


import SellersForm from '@/components/SellersForm'
import dbConnect from '../../lib/dbConnect'
import Order, { Orders } from '../../models/Order'
import Checkbox from '@/components/Checkbox'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'


type Props = {
  orders: Orders []
}

/* Allows you to view pet card info and delete pet card*/
const SellPage = ({ orders }: Props) => {
  
    
  return (
    <>
      <h1>Sell Meal Swipes Here</h1>
      <SellersForm orders={orders}/>
    </>
  )
  
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    await dbConnect()
  
    const result = await Order.find({status: "unfulfilled"})
  
    const orders = result.map((doc) => {
      const order = JSON.parse(JSON.stringify(doc))
      return order
    })
  
    return { props: { orders: orders } }
  
    
  }

export default SellPage