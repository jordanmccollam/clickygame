import React from "react";
import Pictures from "./cards.json";
import "./card.css"

function Card() {

    var randomPicture = Pictures[Math.floor(Math.random() * Pictures.length)].url;

    return(
        <div className="row">
        <div className="col-lg-3">
            <img src={Pictures[0].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[1].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[2].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[3].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[4].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[5].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[6].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[7].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[8].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[9].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[10].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        <div className="col-lg-3">
            <img src={Pictures[11].url} alt="Clicky Pic"className="clicky-pic" />
        </div>
        </div>
    );
}

export default Card;