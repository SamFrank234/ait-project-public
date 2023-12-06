import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {signIn} from 'next-auth/react'

const SignUp = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        console.log("in handle submit")
        const res = await fetch("api/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const data = await res.json()
        if(res.ok){
            
            router.push('/api/auth/signin')
        } else if (data.error) {
            setError(data.error.code === 11000 ? 'It appears an account already exists with that username or password. Try logging in.' : 'Something went wrong on our end. Please try again later')
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text" 
                name="username" 
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
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
            <span>Already have an account? <button onClick={() => signIn(undefined, {callbackUrl: '/'})} className="navbar">Log In</button></span>
        </form>
        {
            error && <h2>{error}</h2>
        }
        </>
    )
}

export default SignUp