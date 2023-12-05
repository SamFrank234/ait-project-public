import dbConnect from '../../../lib/dbConnect'
import User, { Users } from '../../../models/User'
import Order, { Orders } from '../../../models/Order'
import Checkbox from '@/components/Checkbox'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

type Props = {
    user: Users
    orders: Orders []
}

function UserPage ({user, orders} : Props) {

    const orderRows = orders.map( order => {
        const date = new Date(order.createdAt)
        return( 
        <tr key={order._id}>
            <td>{date.toLocaleDateString() + ', ' + date.toLocaleTimeString()}</td>
            <td>{order.location}</td>
            <td>{order.items.join(', ')}</td>
            <td>{order.items.length} Meal Swipes</td>
            <td>{order.status === 'fulfilled' ? '✅' : '❌' }</td>
        </tr>
        )
    }) 


    return ( 
    <>
        <h1>{user.username}{`&apos`}s Orders:</h1>
        <table>
            <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Items</th>
                <th>Cost</th>
                <th>Fulfilled</th>
            </tr>
            {orderRows}
        </table>
    </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
    params,
  }: GetServerSidePropsContext) => {
    await dbConnect()
  
    if(!params?.id){
        return {
            notFound: true
        }
    }
    
    const user = await User.findById(params.id)

    if(!user) {
        return {
            notFound: true
        }
    }

    const serializedUser = JSON.parse(JSON.stringify(user))

    const result = await Order.find({buyer: user._id})
  
    const orders = result.map((doc) => {
      const order = JSON.parse(JSON.stringify(doc))
      return order
    })

    console.log('props', serializedUser, orders)
  
    return { props: { user: serializedUser, orders: orders } }
  
    
  }

export default UserPage