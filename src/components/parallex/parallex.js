import "./parallex.css";

export default function parallex(props) {
    return(
        <div className="parallex">
           <div className="parallexOverlay">
            <h1>{props.parallexTitle}</h1>
            <p>{props.parallexBody}</p>
           </div>
        </div>
    );
}