import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login(){
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", {
                username:userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data });
            res.data && window.location.replace("/");
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    }
    return(
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label> 
                <input type="text" placeholder="Enter your username..." className="loginInput" ref={userRef}/>
                <label>Password</label>
                <input type="password" placeholder="Enter your Password." className="loginInput" ref={passwordRef}/>
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                <button className="loginRegisterButton">
                    <Link to="/register" className="link">Register</Link>
                </button>
            </form>
        </div>
    )
}