import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div>
            <h1>FTW</h1>
            <div>
                <Link to={"/settings"}>Settings</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/login"}>Login</Link>
            </div>

        </div>
    )
}