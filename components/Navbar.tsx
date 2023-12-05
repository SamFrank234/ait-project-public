import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import userIcon from '../public/user.png'

const Navbar = () => {

    const {data: session} = useSession()

    return (
    <>
        <Link href="/" className="nav-auth">Home</Link>
        {session && session.user ? 
        <Link href="api/auth/signout" className="nav-auth">Sign Out</Link> :
        <>
        <Link href="api/auth/signin" className="nav-auth">Log In</Link>
        <Link href="/signup" className="nav-auth">Sign Up</Link>
        </>
        }
        <Link href="/buy" className="nav-page">Buy</Link>
        <Link href="/sell" className="nav-page">Sell</Link>
        {(session && session.user) && 
            <Link href={`/user/${session.user.id}`} className="nav-page">
                <Image src={userIcon} height={20} width={25} alt="user icon"/>
            </Link>
        }
       
    </>
    )
}

export default Navbar