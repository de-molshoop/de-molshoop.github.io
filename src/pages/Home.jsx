import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import HeaderButtons from "../components/HeaderButtons";
import TextSection from "../components/Text-Section";

const Home = () => {
    const [user, setUser] = useState(null);
    const [guilds, setGuilds] = useState([]);
    const navigate = useNavigate();

    return (
        <div className="home">

            <header className="navbar">
                <div className="left-nav">
                    <div className="userinfo">
                        
                    {user && (
                        <img src={user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` : "https://cdn.discordapp.com/embed/avatars/0.png"} 
                            alt="Profielfoto" className="profile-pic" />
                    )}

                    {user && (
                        <span className="name">{user.username}</span>
                    )}
                    </div>
                    
                    <button className="nav-button" onClick={() => navigate("/")}>Home</button>
                    <button className="nav-button" onClick={() => navigate("/quiz")}>Quiz</button>
                </div>

                <div className="right-nav">
                    <HeaderButtons />
                </div>
            </header>

            <TextSection />
        </div>
    );
};

export default Home;
