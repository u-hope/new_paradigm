import "./app.css";
import Blog from "./pages/Blog/blog";
import Home from "./pages/Home/home";
import Single from "./components/single/Single";
import Write from "./components/write/Write";
import Register from "./pages/register/Register";
import Announcement from "./pages/Announcement/announcement";
import Login from "./pages/login/Login";
import Logo from "./img/logo.png";
import NavBar from "./components/navBar/navBar"; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
    const {user} = useContext(Context);
  return (
    <Router className="App">
      <NavBar Logo={Logo}/>
      <Routes>
      
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="Blog" element={<Blog/>}/>
        <Route exact path="announcement" element={<Announcement/>}/>
        <Route exact path="write" element={user ? <Write/> : <Login/>}/>
        <Route exact path="post/:postId" element={<Single/>}/>
        <Route exact path="register" element={<Register/>}/>
        <Route exact path="login" element={<Login/>}/>
      
      </Routes>

    </Router>
  );
}

export default App;
