import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import userIcon from '../public/user.png'
import { signIn, signOut} from 'next-auth/react'

const Navbar = () => {

    const {data: session} = useSession()

    return (
    <>
        <Link href="/" className="nav-title">NYU Eatz</Link>
        {session && session.user ? 
        <button onClick={() => signOut({callbackUrl: '/'})} className="navbar">Sign Out</button> :
        <>
        <button onClick={() => signIn(undefined, {callbackUrl: '/'})} className="navbar">Log In</button>
        <Link href="/signup" className="navbar">Sign Up</Link>
        </>
        }
        <Link href="/buy" className="navbar">Buy</Link>
        <Link href="/sell" className="navbar">Sell</Link>
        {(session && session.user) && 
            <Link href={`/users/${session.user.id}`} className="navbar nav-user">
                <Image src={userIcon} height={20} width={25} alt="user icon"/>
            </Link>
        }
       
    </>
    )
}

export default Navbar