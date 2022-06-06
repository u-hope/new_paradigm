import Maps from "../../../components/maps/maps";
import "./contact.css";
export default function Contact(props) {
    
  
    return(
<div className="contact">
        <div className="contactBody">
            <div className="contactLeft">
                <h1>Contact</h1>
                <p>Addis Ababa,Ethiopia <br/> Phone Number: +251-111-588-547 <br/> Summit(Feyel Bet)</p>
            </div>
            <div className="contactRight"></div>
        </div>
        <div className="map">
            <Maps/>   
         </div>
    </div>
    )
    
}
