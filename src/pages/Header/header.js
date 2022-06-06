import "./header.css";

export default function header(props){
    return(
      <div className="header">
              <div className="headerSide">
                  <h1>{props.headerTitle}</h1>
                  <p>{props.headerMoto}</p>
              </div>
     </div>
        
    );
}