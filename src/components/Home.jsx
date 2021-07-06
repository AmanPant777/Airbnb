import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from './Card'
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card 
        src='https://www.sotc.in/images/tour-package-banners/Uttarakhand-Tour-Package1.jpg' 
        title='Uttarakhand Package'
        description='Uttarakhand is among the holiest places in India as it holds a lot of mythological importance.' 
        price="25,000"/>
        <Card 
        src='https://www.sotc.in/images/tour-package-banners/Himachal-Holiday-Pacakges.jpg'
        title='Himachal Package'
        description='The picturesque state of Himachal Pradesh is nestled between the snow topped Himalayan ranges in North India. '
        price='6,500'/>
        <Card 
        src='https://www.sotc.in/images/tour-package-banners/Kerala-Tour-Package.jpg'
        title='Kerala Packages'
        description='Jane Austen wrote, ‘To sit in the shade on a fine day, and look upon verdure, is the perfect refreshment.’'
        price='30,000'/>
      </div>
      <div className="home_section">
        <Card
        src='https://resources.sotc.in/images/holidays/PKG008004/Zuriwhitesands1.jpeg'
        title='Goa Packages'
        price='20,000Rs'/>
        <Card
        src="https://www.sotc.in/images/tour-package-banners/Andaman-Youth-Special.jpg"
        title="Andaman Crazy Deal"
        description
        price='30,999Rs'/>
         <Card
        src='https://www.sotc.in/images/tour-package-banners/Rajasthan-Tourism.jpg'
        title='Rajhastan Tour'
        description=''
        price='20,000Rs'/>
      </div>
    </div>
  );
};

export default Home;
