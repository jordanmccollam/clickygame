import React from "react";
import "./card.css"

function Card(props) {

    // var randomPicture = props[Math.floor(Math.random() * props.length)].url;

    return(
        <div className="col-lg-3 position-relative">
            <img src={props.image} alt="Clicky Pic"className="clicky-pic" />
        </div>
    );
}

export default Card;