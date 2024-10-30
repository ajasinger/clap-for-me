import { Link } from "react-router-dom"

export default function Footer() {
    return(
        <div className="bg-[#FFDB7D] p-12 flex justify-between">
            <h1 className="text-2xl font-black">FTW</h1>
            <div className="flex flex-col gap-6 font-medium">
                {/* <Link to={"/settings"} className="border-b-2 border-transparent hover:border-current transition duration-300 ease-in-out">
                    SETTINGS
                </Link> */}
                <Link to={"/contact"} className="border-b-2 border-transparent hover:border-current transition duration-300 ease-in-out">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}