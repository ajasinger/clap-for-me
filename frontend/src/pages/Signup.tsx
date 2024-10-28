import { useState } from "react";


export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // onChange to validate username/password 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name:</label>
            <input 
                id="firstName"
                name="firstName"
                type="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="Amy"
                aria-label="enter your first name"
            />
            <label htmlFor="lastName">Last name:</label>
            <input 
                id="lastName"
                name="lastNamel"
                type="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Douglas"
                aria-label="enter your last name"
            />
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