import React from "react";
import "./nav.css";

function Nav(props) {

        return(
            <nav className="fixed-top bg-warning text-light py-2">
                <div className="container">
                    <div className="row font-secondary d-flex align-items-center">
                        <div className="col-lg-4 font-primary">
                            <a href="/">Clicky Game</a>
                        </div>
                        <div className="col-lg-4">
                            <div className={props.status + " guess-status"}>{props.message}</div>
                        </div>
                        <div className="col-6 col-lg-2 text-right">
                            <div>
                                Score: <span className="score-display">{props.score}</span>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 border-left border-light text-left">
                            <div>
                                Top Score: <span className="top-score-display">{props.topscore}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
}

export default Nav;