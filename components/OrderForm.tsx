// https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/components/Form.tsx

import { useState } from 'react'
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
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState('')

  /*const [form, setForm] = useState({
    buyer: orderForm.buyer,
    location: orderForm.location,
    items: orderForm.items,
    createdAt: orderForm.createdAt,
    status: orderForm.status
  })*/

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (formData: Array<string>) => {
    const items = formData

    const body = {
      buyer: 123,
      location: location,
      items: items,
      status: "unfulfilled" 
    }

    try {
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

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err: Error = {}
    /*if (!form.name) err.name = 'Name is required'
    if (!form.owner_name) err.owner_name = 'Owner is required'
    if (!form.species) err.species = 'Species is required'
    if (!form.image_url) err.image_url = 'Image URL is required'*/
    return err
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    /*const errs = formValidate()
 
    if (Object.keys(errs).length === 0) {
      postData(form)
    } else {
      setErrors({ errs })
    } */
    // postData(form)
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