import React from 'react';
import './hero.css';
import Speach from './Speach';
const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* title */}
        <h1 className="hTitle">
          Hey There, <br /> <span>I'm Lasith</span>
        </h1>
        {/* awrds */}
        <div className="awards">
          <h2>Top Rated Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam</p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>
        {/* Scroll svg */}
        <a href="#services"></a>
      </div>
      <div className="hSection right">
        {/* follow */}
        <div className="follow">
          <a href="/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="/">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
        {/* bubble */}
        <Speach />
        <div className="certificate">
          <img src="/certificate.png" alt="" />
          Lasith
          <br />
          PROFESSIONAL
          <br />
          WEB DEVELOPER
        </div>

        {/* contact button */}
        <a href="/#contact">
          <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
