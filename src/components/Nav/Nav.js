import React from "react";
import "./style.css";

function Nav() {
    return(
        <nav className="fixed-top bg-warning text-light py-2">
            <div className="container">
                <div className="row font-secondary d-flex align-items-center">
                    <div className="col-md-4 font-primary">
                        <a href="/">Clicky Game</a>
                    </div>
                    <div className="col-md-4">
                        <div className="guess-status">Click an image to begin!</div>
                    </div>
                    <div className="col-md-2 text-md-right">
                        <div>
                            Score: <span className="score-display">0</span>
                        </div>
                    </div>
                    <div className="col-md-2 border-left border-light text-md-left">
                        <div>
                            Top Score: <span className="top-score-display">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;