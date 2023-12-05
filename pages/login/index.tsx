import Link from "next/link"
import { useState } from "react"

const LogIn = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        console.log("in handle submit")
        const res = await fetch("api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        if(res.ok){

        } else {

        }
        const data = await res.json()
        if(data.error){
            setError(data.error.code === 11000 ? 'It appears you already have an account. Try logging in.' : 'Something went wrong on our end. Please try again later')
        }
        console.log(data)
    }

    return (
        <form>
            <div><input type="text" name="username" placeholder="Username" required /></div>
            <div><input type="password" name="password" placeholder="Password" required /></div>
            <div><input type="submit" value="Log In"/></div>
            <span>Don't have an account? <Link href="/signup">Sign Up</Link></span>      
        </form>
    )
}

export default LogIn