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
            style={{height:"100%", width:"70%", overFlow:"hidden"}}
            >
                <Marker position={{lat:9.01260364955752, lng:38.83335907301758}} />
        </Map>

        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAouncNwemjzA0jZ-2tfRRAEy_w_NBfwVE")
  })(Maps);

