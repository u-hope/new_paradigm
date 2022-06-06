import "./cards.css";

export default function Cards(props){
    return(
        <div className="cards">
            <img className="cardsImg" src={props.cardImg}/>
          <div className="cardBody">            <h1 className="cardsTitle">{props.cardTitle}</h1>
            <p className="cardsDetail">{props.cardDetail}</p>
          </div>
        </div>
    );
}