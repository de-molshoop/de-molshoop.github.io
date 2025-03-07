import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import HeaderButtons from "../components/HeaderButtons";
import TextSection from "../components/Text-Section";

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        axios.get("https://discord.com/api/users/@me", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => {
            console.log("Gebruiker:", response.data);
            setUser(response.data);
        })
        .catch(error => {
            console.error("Fout bij ophalen gebruiker:", error);
            localStorage.removeItem("access_token");
        });
    }, [navigate]);

    console.log(user)

    return (
        <div className="home">
            <HeaderButtons />
            <TextSection />
        </div>
    );
};

export default Home;
