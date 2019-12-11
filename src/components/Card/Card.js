import React from "react";
import "./card.css"


function Card(props) {
        return(
            <div className="col-lg-3 position-relative">
                <img 
                    src={props.image} 
                    alt={props.name} 
                    id={props.id} 
                    className="clicky-pic" 
                    onClick={() => props.handleClick(props.id)}
                />
            </div>
        );
}

export default Card;