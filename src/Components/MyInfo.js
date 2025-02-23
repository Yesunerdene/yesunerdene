import React from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import config from "../config";
import img from "../assets/image.png";

function MyInfo({ theme, changeTheme }) {
  return (
    <div className="my-card my-info">
      <div className="profilePic-box">
        <Image src={img} className="profilePic" />
        <div onClick={changeTheme} className="theme-button">
          {theme === "dark-theme" ? (
            <FontAwesomeIcon
              size="xl"
              color="#2c3440"
              icon={"fa-solid fa-sun"}
            />
          ) : (
            <FontAwesomeIcon size="lg" color="#FFF" icon={"fa-solid fa-moon"} />
          )}
        </div>
      </div>
      <p className="card-title text-large text-center">{`${config.fullName}`}</p>
      <p className="title text-center text-bigger">{`${config.profession}, (${config.occupation})`}</p>
      <p className="title text-center w50">{`🍀 ${config.description}`}</p>
    </div>
  );
}

export default MyInfo;
