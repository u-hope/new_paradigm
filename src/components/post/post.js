import "./post.css";
import {Link} from "react-router-dom";
import postImg from "../../img/1.jpg";

export default function Post({post}) {
  const PF ="http://localhost:5000/image/";
    return (
      <Link to={`/post/${post._id}`} className="link">  
        <div className="post">
            {post.photo && (
              <img 
               className="postImg" 
               alt="" 
               src={PF + post.photo} 
            />
               )}
            <div className="postInfo">
              <span className="postTitle">{post.title} </span>
              <hr/>
              <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
          <p className="postDesc">{post.desc}</p>
        </div>
      </Link>
    )
}