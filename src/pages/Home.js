import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div id="home-banner" className="banner">
        <div className="container">
          <div className="header-text">
            <h1>
              Technology & Healthcare
              <br />
              Uniting to Transform Lives!
            </h1>
          </div>
        </div>
      </div>

      <div id="mainContent" className="home">
        <section id="home">
          <p>
            At LxRose we strive to be different. By combining cutting-edge
            technology with expert-led services, we're setting new standards in
            mental and physical well-being. Your journey towards a healthier,
            happier you starts here!
          </p>
          <Link to="/contact">
            <button id="joinUsBtn" className="center-button">
              Get Started
            </button>
          </Link>
        </section>

        <div id="home-banner2" className="banner">
          <div className="container">
            <div className="header-text">
              <h1>Revolutionizing Mental Healthcare,</h1>
              <h1>One Innovation at a Time</h1>
            </div>
          </div>
        </div>

        <section id="about">
          <p>
            Welcome to the future of healthcare, powered by LxRose. Our mission
            is simple yet transformative: to combine the wonders of technology
            with the expertise of healthcare professionals to create
            personalized, effective, and accessible treatments. From mental
            health therapies that use art and technology to custom nutrition
            plans monitored in real-time, we're not just changing the game;
            we're creating a whole new playbook.
          </p>
        </section>

        <div id="home-banner3" className="banner">
          <div className="container">
            <div className="header-text">
              <h1>Our Expert-Led Services</h1>
              <h1>Designed to Transform Your Health Journey</h1>
            </div>
          </div>
        </div>

        <section>
          <h2>Mental Health Services</h2>
          <p>
            Unleash the power of technology and art to conquer your mental
            health challenges. Imagine experiencing therapy in a virtual world
            customized to your needs LxRose makes it possible.
          </p>
        </section>
        <section>
          <h2>Nutrition Services</h2>
          <p>
            Say goodbye to generic diet plans. At LxRose, our nutrition experts
            use real-time data to adapt your nutrition plans instantly, ensuring
            your path to physical well-being is as efficient as it is effective.
          </p>
        </section>
        <section>
          <h2>Nursing Services</h2>
          <p>
            Experience the warmth of human care supported by cutting-edge
            technology. Our nursing services redefine what it means to receive
            comprehensive healthcare, blending traditional practices with modern
            solutions for a truly transformative experience.
          </p>
        </section>
      </div>

      <div id="home-banner5" className="banner">
        <div className="container">
          <div className="header-text"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
