import { useState } from 'react'
import Link from 'next/link'

const SignUp = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        console.log("in handle submit")
        const res = await fetch("api/signup", {
            method: 'POST'
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text" 
                name="username" 
                placeholder="Username"
                onChange={e => setUser(e.target.value)}
                required />
            </div>
            <div>
                <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={e => setEmail(e.target.value)}
                required />
            </div>
            <div>
                <input 
                type="password" 
                name="password"
                placeholder="Password" 
                onChange={e => setPassword(e.target.value)}
                required />
            </div>
            <div>
                <input type="submit" value="Sign Up"/>
            </div>
            <span>Already have an account? <Link href="/login">Log In</Link></span>
        </form>
        {
            error && <h2>{error}</h2>
        }
        </>
    )
}

export default SignUp