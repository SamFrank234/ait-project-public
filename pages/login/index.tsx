import Link from "next/link"

const LogIn = () => {


    return (
        <form>
            <div><input type="text" name="username" placeholder="Username" required /></div>
            <div><input type="password" name="password" placeholder="Password" required /></div>
            <span>Don't have an account? <Link href="/signup">Sign Up</Link></span>      
        </form>
    )
}

export default LogIn