import React from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import config from "../config";
import img from "../assets/profile.png";
import "../custom.css"; // make sure to import your styles
import FloatingParticles from "./FloatingParticles";

function MyInfo({ theme, changeTheme }) {
  return (
    <div className="my-info-wrapper">
      <FloatingParticles
        color={theme === "dark-theme" ? "#fff" : "#000"}
        count={60}
        theme={theme}
      />

      {/* <div className="floating-dots"></div> */}

      <div className="my-card my-info main-info">
        <div className="my-row tech-row">
          <div className="profilePic-box">
            <Image src={img} className="profilePic" />
            <div onClick={changeTheme} className="theme-button">
              {theme === "dark-theme" ? (
                <p className="card-title text-large text-center whitet">☀️</p>
              ) : (
                <p className="card-title text-large text-center whitet">🌙</p>
              )}
            </div>
          </div>
          <div>
            <p className="card-title text-large text-center whitet">{`${config.fullName}`}</p>
            <p className="title text-center text-bigger whitet">{`${config.profession}, ${config.occupation}`}</p>
            <p className="title text-medium whitet w50">{`🍀 ${config.description}`}</p>
            {/* <p className="title text-medium whitet w50">{`🍀 ${config.desc}`}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="my-info-wrapper">
      <FloatingParticles
        color={theme === "dark-theme" ? "#fff" : "#000"}
        count={60}
        theme={theme}
      />

      {/* <div className="floating-dots"></div> */}

      <div className="my-card my-info main-info">
        <div className="profilePic-box">
          <Image src={img} className="profilePic" />
          <div onClick={changeTheme} className="theme-button">
            {theme === "dark-theme" ? (
              <p className="card-title text-large text-center whitet">☀️</p>
            ) : (
              <p className="card-title text-large text-center whitet">🌙</p>
            )}
          </div>
        </div>
        <p className="card-title text-large text-center whitet">{`${config.fullName}`}</p>
        <p className="title text-center text-bigger whitet">{`${config.profession}, ${config.occupation}`}</p>
        <p className="title text-center text-medium whitet w50">{`🍀 ${config.description}`}</p>
      </div>
    </div>
  );
}

export default MyInfo;
