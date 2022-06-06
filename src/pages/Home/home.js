import "./home.css";
import Header from "../Header/header";
import About from "./About/About";
import CoreValues from "./coreValues/coreValues";
import Mission from "./Mission/mission";
import Contact from "./Contact/contact";

import Parallex from "../../components/parallex/parallex";
import Moto from "../../components/moto/moto";

import aboutImg from "../../img/10.jpg";
import missionImg from "../../img/11.jpg";
import mapImg from "../../img/map.PNG";

export default function Home(){
    return(
        <div className="home">
             <Header headerTitle="New Paradigm" headerMoto="Where Love and Acceptance is Retained"/>
             <Moto/>
             <About aboutImg={aboutImg}/>
             <Parallex parallexTitle="Our Core Values" parallexBody="" />
             <CoreValues/>
             <Mission missionImg={missionImg}/>
             <Contact mapImg={mapImg}/>
        </div>
    );
}