import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="bg-[#FFDB7D] p-6 flex items-center justify-between">
            <h1 className="text-2xl font-black">FTW</h1>
            <div className="flex gap-6 items-center font-semibold">
                <Link to={"/settings"}>SETTINGS</Link>
                <Link to={"/contact"}>CONTACT</Link>
                <Link to={"/login"} className="text-white bg-black px-8 py-3 rounded-full">LOGIN</Link>
            </div>

        </div>
    )
}