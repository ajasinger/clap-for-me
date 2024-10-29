import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // onChange to validate username/password 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <div className="bg-[#FFDB7D] bg-opacity-50 px-36 py-12 rounded-2xl border-2 border-black flex flex-col gap-12 justify-center items-center">
            <h2 className="text-xl font-semibold">Welcome back!</h2>
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-6"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm">Email:</label>
                    <input 
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="amy@gmail.com"
                        aria-label="enter your email address"
                        className="border border-black p-2 w-80"
                    />
                </div>
                {/* password component with view/hidden toggle */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm">Password:</label>
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="*******"
                        aria-label="enter your password"
                        className="border border-black p-2 w-80"
                    />
                </div>
                {/* Forgot password link */}
                <button 
                    type="submit"
                    className="text-white bg-black w-fit px-10 py-2 mt-6 rounded-full border-2 border-transparent hover:border-current hover:text-black hover:bg-transparent transition duration-300 ease-in-out"
                >
                    LOGIN
                </button>
            </form>
        </div>
    )
}