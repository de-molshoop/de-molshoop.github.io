import React from "react";
import "../components/Text-Section.css";
import texts from "../components/text.js"
import IconDM from "../assets/DM-paragraaf.png"

const TextSection = () => {
    return (
        <div className="text-section-container">
            <div className="logo">
                <img className="DM-logo" src={IconDM} unselectable="true" draggable="false"></img>
            </div>
            <p>{texts.homeP1}</p>
            <p>{texts.homeP2}</p>
        </div>
    );
};

export default TextSection;
