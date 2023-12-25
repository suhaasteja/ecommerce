import React, { SyntheticEvent, useState } from 'react'
import './styles.css'
import axios from 'axios';

export default function Auth() {
    return (
        <div>
            <Register />
            <Login />
        </div>
    )
}

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        console.log("submitting");

        try{
            console.log("inside try");
            await axios.post("http://localhost:3001/user/register", {
                "username": username,
                "password": password
            });
    
            alert("Regsistration Completed!")


        }catch(err){
            console.log("inside catch");

            console.log(err);
        }

        
    }

    return (
        <div>
            <p>Register</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input name='username' type='text' id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input name='password' type='text' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {/* <input name='confirm-password' type='text' id="confirm-password" /> */}

                <button type='submit'>Register</button>
            </form>

        </div>
    )
}



function Login() {
    return (
        <div>Login</div>
    )
}
