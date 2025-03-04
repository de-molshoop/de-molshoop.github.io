import React from "react";
import "./Home.css";
import Header from "../components/HeaderButtons";
import HeaderButtons from "../components/HeaderButtons";
import TextSection from "../components/Text-Section";

const Home = () => {
  return (
    <div className="home">
        <HeaderButtons/>
        <TextSection/>
    </div>
  );
};

export default Home;
