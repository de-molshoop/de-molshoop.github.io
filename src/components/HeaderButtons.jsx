import React from "react";
import "../components/HeaderButtons.css";
import DiscordIcon from "../assets/Discord-PNG.png";

const HeaderButtons = () => {
    return (
        <div className="header-container">
            <button className="button discord" onClick={() => window.open('https://discord.gg/zSAcFbAwNU', '_blank', 'noopener,noreferrer')}>
                <img src={DiscordIcon} alt="Discord" className="btn-icon" />
                Join
            </button>
            <button className="button login">
                Inloggen
            </button>
        </div>
    );
};

export default HeaderButtons;
