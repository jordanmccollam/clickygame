import React from "react";
import "./header.css"
import HeaderPic from "./header.jpg"

function Header() {
    return(
        <div>
            <img src={HeaderPic} alt={"Family Guy Banner"}/>
        </div>
    );
}

export default Header;