import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // onChange to validate username/password 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input 
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="amy@gmail.com"
                aria-label="enter your email address"
            />
            {/* password component with view/hidden toggle */}
            <label htmlFor="password">Password:</label>
            <input 
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
                aria-label="enter your password"
            />
            {/* Forgot password link */}
        </form>
    )
}