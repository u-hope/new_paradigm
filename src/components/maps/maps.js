import "./maps.css";
import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class Maps extends Component {
    
    render() {
        
        return(
            
        <Map 
            className="maps" 
            google={this.props.google} 
            zoom={16} 
            initialCenter={{lat:9.01260364955752, lng:38.83335907301758}}
            style={{height:"80%", maxWidth:"60%", overFlowX:"hidden", overFlowY:"hidden", margin: "5% 15%"}}
            >
                <Marker position={{lat:9.01260364955752, lng:38.83335907301758}} />
        </Map>

        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAouncNwemjzA0jZ-2tfRRAEy_w_NBfwVE")
  })(Maps);

