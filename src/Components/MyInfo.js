import React from "react";
import config from "../config";
import { Image } from "react-bootstrap";
import img from "../assets/image.png";

function MyInfo() {
  return (
    <div className="my-card my-info">
      <div className="profilePic-box">
        <Image src={img} className="profilePic" />
      </div>
      <p className="card-title text-large text-center">{`${config.fullName}🕊`}</p>
      <p className="title text-center text-bigger">{`${config.profession}, (${config.occupation})`}</p>
      <p className="title text-center w50">{`🍀 ${config.description} 🌊`}</p>
    </div>
  );
}

export default MyInfo;
