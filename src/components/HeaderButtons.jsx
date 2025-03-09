import React from "react";
import "../components/HeaderButtons.css";
import DiscordIcon from "../assets/Discord-PNG.png";
import { useNavigate } from "react-router-dom";

const HeaderButtons = () => {

    const navigate = useNavigate()
    const inviteLink = "https://discord.gg/zSAcFbAwNU"
    const user = localStorage.getItem("user")

    return (
        <div className="header-container">
            <button className="button discord" onClick={() => window.open(inviteLink, '_blank', 'noopener,noreferrer')}>
                <img src={DiscordIcon} alt="Discord" className="btn-icon" />
                Join
            </button>
            {!user && (
                <button className="button login" onClick={() => navigate("/login")}>
                Inloggen
                </button>
            )}

            {user && (
                <button className="button login" onClick={() => {localStorage.clear(); location.reload()}}>
                Uitloggen
                </button>
            )}
        </div>
    );
};

export default HeaderButtons;
