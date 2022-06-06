import "./navbar.css";
import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../../context/Context";

export default function NavBar(props){
    
    const {user, dispatch} = useContext(Context);
    
    const handleLogout = () => {
        dispatch({type:"LOGOUT"});
    }
    
    const [navbar,setNavbar] = useState(true);

    const navScroll = () =>{
        if(window.screenY >= 80){
            setNavbar(false);
        }else{
            setNavbar(true);
        }
    }
    
    window.addEventListener('scroll', navScroll)

    return(
        <div className= {navbar ? 'navBar active' : 'navBar'}>

            {/* We are going to use a grid layout and divide the nav bar into three sections 
            the logo, the navigation links and the social media links respectively */}
            <div className="navLogo">
                <img src={props.Logo}/>
            </div>

            <div className="navLinks">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Value</a></li>
                    <li><a href="/Blog">Blog</a></li>
                    <li><a href="#">Anouncement</a></li>
                    {user ? <li><a href="/Write">Write</a></li> : <li></li>} 
                    <li><a href="" onClick={handleLogout}>{user && "Logout"}</a></li>
                </ul>
            </div>

            <div className="navSocial">
                <a href="#" target="_blank"><i className="topIcon fab fa-facebook-f"></i></a>
                <a href="#" target="_blank"><i className="topIcon fab fa-twitter"></i></a> 
                <a href="#" target="_blank"><i className="topIcon fab fa-instagram"></i></a>
                <a href="#" target="_blank"><i className="topIcon fab fa-telegram-plane"></i></a>
                <a href="#" target="_blank"><i className="topIcon fab fa-tiktok"></i></a> 
            </div>
            <button><i class="fa fa-bars" aria-hidden="true"></i></button>
        </div>
    );
}