import "./announcement.css";
import {useState,useEffect} from "react";
import axios from "axios";
import Post from "../../components/post/post";
    
export default function Announcement (){
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
    
                <div className="blogTop" style={{height:"30vh"}}>
                  <div className="blogSide">
                      <h1 style={{paddingTop:"10vh"}}>Announcements</h1>
                  </div>
                </div>
                <div className="announcmentBody">
                
                <div className="announcementSidebar">
            <p>Sth First</p>
            <p>Sth Second</p>
            <p>Sth Third</p>
            <p>Sth Fourth</p>
            <p>Sth Fifth</p>
            <p>Sth Sixth</p>
                </div>

                <div className="announcmentLeftbar">
                    <div className="blogTitle">
                        <h3>Announcement</h3>
                        <h1>Recent Anouncements</h1>
                    </div>
                    <div className="announcementCards">
                      {posts.map((p)=>(
                             <Post post = {p}/>
                          ))}
                        
                    </div>
                    <div className="blogCounter"> 
                    123
                    </div>
                </div>
                </div>
              
            </div>
        );
    
}