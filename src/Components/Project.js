import React, { useState } from "react";
import config from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Image, Modal, Button } from "react-bootstrap";

function Project({ theme }) {
  const [selected, select] = useState();

  return (
    <div className="my-card my-info">
      <p className="card-title">Projects</p>
      <p className="title text-bigger mb0 ml1">{`Mobile applications`}</p>
      <Row className="my-row">
        {config?.projects?.map((item) => (
          <Col lg={3} md={6} sm={12} xs={12} key={item?.title}>
            <div
              key={item?.title}
              className={`project-holder 
                ${selected?.title === item?.title ? "selected-project" : ""}
              `}
            >
              <Image src={item?.logo} className="project-logo mb2" />
              <p className="title text-bigger mb0 text-center">{item.title}</p>
              <p className="title text-center mb0">{`by ${
                item.company || ""
              }`}</p>
              <p className="title text-small-gray text-center">{`released in ${item.releasedOn}`}</p>
              <div className="my-row2 mt1 ">
                <div className="mr3">
                  <a target="blank" href={item?.appStore || ""}>
                    <FontAwesomeIcon
                      size="2xl"
                      // style="--fa-animation-duration: 0.5s;"
                      icon="fa-brands fa-app-store fa-beat"
                      color={theme === "dark-theme" ? "#FFF" : "#535c6e"}
                    />
                  </a>
                </div>
                <div className="ml3">
                  <a target="blank" href={item?.playStore || ""}>
                    <FontAwesomeIcon
                      size="2xl"
                      // style="--fa-animation-duration: 0.5s;"
                      icon="fa-brands fa-google-play fa-beat"
                      color={theme === "dark-theme" ? "#FFF" : "#535c6e"}
                    />
                  </a>
                </div>
                <div className="ml3" onClick={() => select(item)}>
                  <p className="title text-bigger2 mb0 text-center">ⓘ</p>
                </div>
              </div>
              <div className="line" />
              <div className="dot" />
            </div>
          </Col>
        ))}
      </Row>
      <p className="title text-bigger mb0 ml1">{`Web sites`}</p>
      <Row className="my-row">
        {config?.webs?.map((item) => (
          <Col lg={3} md={6} sm={12} xs={12} key={item?.title}>
            <div
              key={item?.title}
              className={`project-holder ${
                selected?.title === item?.title ? "selected-project" : ""
              }
              `}
            >
              <Image src={item?.logo} className="project-logo mb2" />
              <p className="title text-bigger mb0 text-center">{item.title}</p>
              <p className="title text-center mb0">{`by ${
                item.company || ""
              }`}</p>
              <p className="title text-small-gray text-center">{`released in ${item.releasedOn}`}</p>
              <div className="my-row2 mt1 ">
                <div className="mr3">
                  <a target="blank" href={item?.link || ""}>
                    <FontAwesomeIcon
                      size="2xl"
                      // style="--fa-animation-duration: 0.5s;"
                      icon="fa-solid fa-link"
                      color={theme === "dark-theme" ? "#FFF" : "#535c6e"}
                    />
                  </a>
                </div>
                <div className="ml3" onClick={() => select(item)}>
                  <p className="title text-bigger2 mb0 text-center">ⓘ</p>
                </div>
              </div>
              <div className="line" />
              <div className="dot" />
            </div>
          </Col>
        ))}
      </Row>
      <Modal show={!!selected} onHide={null}>
        <Modal.Header closeButton>
          <Modal.Title>{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selected?.desc}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => select(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Project;
