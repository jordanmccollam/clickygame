import React from "react";
import "./header.css"
import HeaderPic from "./header.jpg"

function Header() {
    return(
        <div className="pt-4">
            <div className="d-none d-lg-block">
                <img src={HeaderPic} alt={"Family Guy Banner"} className="position-relative"/>
                <h3 className="header-text font-primary shadow-text text-light">Click on an image to earn points. 
                <br/>
                But don't click on any more than once!</h3>
            </div>
            <div className="d-lg-none bg-custom small-header pt-5 d-flex align-items-center justify-content-center">
                <h3 className="font-primary text-light shadow-text">Click on an image to earn points.
                    <br/>
                    But don't click on any more than once!
                </h3>
            </div>
        </div>
    );
}

export default Header;