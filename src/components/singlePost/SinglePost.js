import "./singlePost.css"
import singlePostImg from "../../img/4.jpg";
import {useState,useEffect, useContext} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
export default function SinglePost(){
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPosts] =useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const {user} = useContext(Context); 

    useEffect(()=>{
        const getPost = async ()=> {
            const res = await axios.get("/posts/" + path);
            setPosts(res.data);
        }
        getPost();
    },[path]);

    const handleDelete = async() =>{
        try{
            await axios.delete("/posts/"+path);
            window.location.replace("/blog");
        }catch(err){
            console.log(err);
        }
    }
    const PF ="http://localhost:5000/image/";
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo &&   
                    <img 
                    src={PF + post.photo} 
                    alt="" 
                    className="singlePostImg"
                    />              
                }
                {
                    updateMode ? <input type="text" value={post.title}/> : (
                <h1 className="singlePostTitle">
                   {post.title}
                   {post.username === user?.username &&
                    <div className="singlePostEdit">
                       <i className="singlePostIcon fas fa-edit" onClick={()=>setUpdateMode(true)}></i>
                       <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                   }
                </h1>
                    )
                }
                
              <div className="singlePostInfo">
               <span className="singlePostAuthor">
                   Author: <b>{post.username}</b>
               </span>
               <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
              </div>  
              <p className="singlePostDesc">
                {post.desc}
              </p> 
            </div>
        </div>
    )
}