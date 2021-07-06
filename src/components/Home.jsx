import React from "react";
import "./Home.css";
import Banner from "./Banner";
import {Card} from '@material-ui/core'
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="home_section">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Home;
