import "./register.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit =  async (e) => {
        e.preventDefault();
        try{
            const res =  await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        }catch (err){
            setError(true);
        }
        }
    return(
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>UserName</label> 
                <input 
                    type="text" 
                    placeholder="Enter your Username..." 
                    className="registerInput"
                    onChange={e=>setUsername(e.target.value)}
                />
                <label>Email</label> 
                <input 
                    type="text" 
                    placeholder="Enter your email..." 
                    className="registerInput"
                    
                    onChange={e=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your Password." 
                    className="registerInput"
                    onChange={e=>setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
                <button className="registerLoginButton">
                    <Link to="/login" className="link">Login</Link>
                </button>
            </form>
        </div>
    )
}