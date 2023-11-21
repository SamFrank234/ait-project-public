//https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
import { useState } from 'react'

type Props = {
    name: string
    label?: string
    onChange: Function
}


export default function Checkbox ({name, label, onChange} : Props) {

    const [isChecked, setChecked] = useState(false)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!isChecked)
        onChange(e)
    }

    return (
        <>
        <input
          type="checkbox"
          id={name+"checkbox"}
          name={name}
          checked={isChecked}
          onChange={handleOnChange}
        />
        <label htmlFor={name}>{label ?? name}</label>
        </>
    )
}