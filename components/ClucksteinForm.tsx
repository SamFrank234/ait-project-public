import { useState } from 'react'
import Checkbox from './Checkbox'

interface ClucksteinData {
    classic: boolean
    spicy: boolean
    vegan: boolean
  }

type Props = {
    formId: string
    postData: Function
}



const ClucksteinForm  = ({ formId, postData }: Props) => {
    

    const [form, setForm] = useState({
        classic: false,
        spicy: false,
        vegan: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target
        const value = (target as HTMLInputElement).checked
        const name = target.name
        setForm({
            ...form, 
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const items = []

        for (const key of Object.keys(form)){
            if(form[key as keyof ClucksteinData]){
                items.push(key)
            }
        }

        postData(items);    
    }


    return (
        <>
        <form id={formId} onSubmit={handleSubmit}>
            <fieldset>
                <Checkbox name="classic" label="Classic Chicken Tenders" onChange={handleChange}/><br/>
                <Checkbox name="spicy" label="Spicy Chicken Tenders" onChange={handleChange}/><br/>
                <Checkbox name="vegan" label="Vegan Chicken Tenders" onChange={handleChange}/><br/>
            </fieldset>
            <button type="submit" className="btn">
            Submit
            </button>
        </form>
        </>
    )
}

export default ClucksteinForm;