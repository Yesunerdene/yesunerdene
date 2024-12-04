import React, { useState } from "react";
import config from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Image, Modal, Button } from "react-bootstrap";

function Others({ theme }) {
  const [selected, select] = useState();

  return (
    <div className="my-card my-info">
      <p className="card-title">Others</p>
      <p className="title text mb0 ml1">{`Hobbies`}</p>
      <p className="title text mb0 ml1">{`Archery`}</p>

      <Row className={`project-holder my-row`}>
        <Col lg={3} md={6} sm={12} xs={12}>
          <Image
            src={require("../assets/archery4.jpg")}
            className="gallery mb2"
          />
        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
          <Image
            src={require("../assets/archery3.jpg")}
            className="gallery mb2"
          />
        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
          <Image
            src={require("../assets/archery2.jpg")}
            className="gallery mb2"
          />
        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
          <Image
            src={require("../assets/archery1.jpg")}
            className="gallery mb2"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Others;
