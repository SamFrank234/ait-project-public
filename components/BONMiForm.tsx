import { useState } from 'react'
import Checkbox from './Checkbox'

interface BONMiData {
    "Red Eye Banh Mi Sandwich": boolean
    "BBQ Belly Banh Mi Sandwich": boolean
    "Kickshaw Salad": boolean
}

type Props = {
    formId: string
    postData: Function
}


const BONMiForm  = ({ formId, postData }: Props) => {
    

    const [form, setForm] = useState({
        "Red Eye Banh Mi Sandwich": false,
        "BBQ Belly Banh Mi Sandwich": false,
        "Kickshaw Salad": false,
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
            if(form[key as keyof BONMiData]){
                items.push(key)
            }
        }

        postData(items);    
    }


    return (
        <>
        <form id={formId} onSubmit={handleSubmit}>
            <fieldset>
                <Checkbox name="Red Eye Banh Mi Sandwich" label="Red Eye Banh Mi Sandwich" onChange={handleChange}/><br/>
                <Checkbox name="BBQ Belly Banh Mi Sandwich" label="BBQ Belly Banh Mi Sandwich" onChange={handleChange}/><br/>
                <Checkbox name="Kickshaw Salad" label="Kickshaw Salad" onChange={handleChange}/><br/>
            </fieldset>
            <button type="submit" className="btn">
            Submit
            </button>
        </form>
        </>
    )
}

export default BONMiForm;