// https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/components/Form.tsx

import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import ClucksteinForm from './ClucksteinForm'
import BONMiForm from './BONMiForm'

interface FormData {
  buyer: number
  location: string
  items: String []
  createdAt: string
  status: string
}

interface Error {
  name?: string
  owner_name?: string
  species?: string
  image_url?: string
}

type Props = {
  formId: string
  orderForm?: FormData
}

const Form = ({ formId }: Props) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState('')

 

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (formData: Array<string>) => {
    const items = formData

    const res = await fetch('/api/auth/session')
    const session = await res.json()

    

    try {

      if(!session?.user.id){
        throw new Error ('no session id')
      }
      const body = {
        buyer: session.user.id,
        location: location,
        items: items,
        status: "unfulfilled" 
      }

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(body),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString())
      }

      router.push('/buy/success')

    } catch (error) {
      console.log('error:', error)
      setMessage('Failed to submit order')
    }

  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const loc : string = e.target.value

    setLocation(loc)
  }

  return (
    <>

      <form id={formId}>
        <input 
          type="radio" 
          name="store" 
          value="Cluckstein"
          onChange={handleChange}
        />
        <label>Cluckstein</label>
        <input 
          type="radio" 
          name="store" 
          value="BONMi"
          onChange={handleChange}
        />
        <label>BONMi</label>
      </form>

    

      {location==='Cluckstein' && <ClucksteinForm formId="cluckstein-form" postData={postData}/>}
      {location==='BONMi' && <BONMiForm formId="cluckstein-form" postData={postData}/>}

      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}


export default Form