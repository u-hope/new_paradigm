import "./blog.css";
import {useState,useEffect} from "react";
import axios from "axios";
import Logo from "../../img/logo.png";
import NavBar from "../../components/navBar/navBar";
import Post from "../../components/post/post";

export default function Blog(){
    const [posts, setPosts] = useState([]);
    

    useEffect(()=>{
        const fetchPosts = async () => {
            const res = await axios.get("/posts");
            setPosts(res.data);
        }
        fetchPosts()  
    },[]);
    return(
        <div className="Blog">
             <NavBar Logo={Logo}/>

            <div className="blogTop">
              <div className="blogSide">
                  <h1>Blog</h1>
              </div>
            </div>

            <div className="blogBody">
                <div className="blogTitle">
                    <h3>Blog&Article</h3>
                    <h1>Recent Blog</h1>
                </div>
                <div className="blogCards">
                  {posts.map((p)=>(
                         <Post post = {p}/>
                      ))}
                    
                </div>
                <div className="blogCounter"> 
                123
                </div>
            </div>
          
        </div>
    );
}