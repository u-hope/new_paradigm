import "./mission.css";
import React, {useEffect, useState} from 'react';
import imgone from "../../../img/6.jpg";
import imgtwo from "../../../img/4.jpg";

export default function Mission(props){

    const [mission,setMission] = useState(true);

    function vision(){
        let mission = document.querySelector(".missionLeft");
        let vision = document.querySelector(".visionLeft");
        let black = document.querySelector(".blackBack");
        let img = document.querySelector(".missionImg");
            if(mission.style.display === "block"){
                mission.style.display="none";
                vision.style.display="block";
                setMission(false);
                black.classList.add("activeVision");
            }else{
                mission.style.display="block";
                vision.style.display="none";
                black.classList.remove("activeVision");
                setMission(true);
            }
    }

    return(
    <div className="mission">
        <div className="Left">
           
            <div className="missionLeft">
                <h1 className="missionTitle">Mission Statement</h1>
                <p className="missionBody">Creating an integrated school system where a child, parent and the school community is self-awared, unconditionally loving, accepting, perfectly creative and highly productive.</p>
            </div>

            <div className="visionLeft">
                <h1 className="missionTitle">Vision Statement</h1>
                <p className="missionBody">To create a community where self-awareness, unconditional love and acceptance, high creativity and productivity is maintained</p>
            </div>
            
            <button onClick={vision}>{mission ? "Vision" : "Mission"}</button>
        </div>

        <div className="missionRight">
            <div className="blackBack">
                <img className="missionImg" src={mission ? imgone : imgtwo}/>
            </div>
        </div>
    
    </div>
    );
}