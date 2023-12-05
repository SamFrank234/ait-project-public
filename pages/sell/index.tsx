// inspired by https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/pages/%5Bid%5D/index.tsx


import dbConnect from '../../lib/dbConnect'
import Order, { Orders } from '../../models/Order'
import Checkbox from '@/components/Checkbox'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'


type Props = {
  orders: Orders []
}

/* Allows you to view pet card info and delete pet card*/
const SellPage = ({ orders }: Props) => {
  
    const orderElems = orders.map( order => {
        return( 
        <>
        <Checkbox
            name={`order_${order.id}`}
            label={order.items.join(', ')+`(${order.items.length} Meal Swipes)`}
            onChange={ () => {return}}
        /> <br></br>
        </>
        )
    })

  return (
    <>
      <h1>Sell Meal Swipes Here</h1>
      {orderElems}
    </>
  )
  
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    await dbConnect()
  
    const result = await Order.find({})
  
    const orders = result.map((doc) => {
      const order = JSON.parse(JSON.stringify(doc))
      return order
    })
  
    return { props: { orders: orders } }
  
    
  }

export default SellPage