import { Link } from "react-router-dom"

export default function Footer() {
    return(
        <div className="bg-[#FFDB7D] p-12 flex justify-between">
            <h1 className="text-2xl font-black">FTW</h1>
            <div className="flex flex-col gap-6">
                <Link to={"/settings"} className="hover:font-semibold">SETTINGS</Link>
                <Link to={"/contact"} className="hover:font-semibold">CONTACT</Link>
            </div>

        </div>
    )
}