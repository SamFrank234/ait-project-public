import Checkbox from './Checkbox'
import dbConnect from '../lib/dbConnect'
import Order, {Orders} from '@/models/Order'
import { useState } from 'react'
import { useRouter } from 'next/router'


type Props = {
    orders: Orders []
}

type StatusForm = {
    [key: string] : boolean
}

const SellersForm  = ({ orders }: Props) => {
    const router = useRouter()
    const [message, setMessage] = useState('')
    const initialForm = orders.reduce<StatusForm>((statusForm, order) => {
        const key = 'order_'+order._id
        statusForm = {...statusForm, [key]: false}
        return statusForm
    }, {})
    console.log('init form', initialForm)
    const [form, setForm] = useState(initialForm)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target
        const value = (target as HTMLInputElement).checked
        const name = target.name
        setForm({
            ...form, 
            [name]: value
        })
    }

    const orderElems = orders.map( order => {
        return( 
        <>
        <Checkbox
            name={`order_${order._id}`}
            label={order.items.join(', ')+`(${order.items.length} Meal Swipes)`}
            onChange={ handleChange}
        /> <br></br>
        </>
        )
    }) 

    console.log(orderElems)


    const putData = async (formData: Array<string>) => {
        const items = formData
    
        items.filter(id => form[id]===true)
             .forEach(async item => {
            console.log(item)
            const id = item.replace('order_', '')
            try {
                const res = await fetch(`/api/orders/${id}`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({status: "fulfilled"}),
                })
          
                // Throw error with status code in case Fetch API req failed
                if (!res.ok) {
                  throw new Error(res.status.toString())
                } else {
                    router.reload()
                }
                
              } catch (error) {
                console.log('error:', error)
                setMessage('Failed to submit order')
              }
        })
    
        
    
      }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const items = []

        for (const key of Object.keys(form)){
            if(form[key]){
                items.push(key)
            }
        }

        putData(items);    
    }


    return (
        <>
        <form id="sellers_form" onSubmit={handleSubmit}>
            <fieldset>
                {orderElems}
            </fieldset>
            <button type="submit" className="btn">
            Submit
            </button>
        </form>
        </>
    )
}


export default SellersForm;