import React, { useState } from "react";
import config from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Image, Modal, Container } from "react-bootstrap";

function Project({ theme }) {
  const [selected, select] = useState(config?.projects[0]);

  return (
    <div className="my-card my-info">
      <p className="card-title">Projects</p>
      <p className="title text-bigger mb0 ml1">{`Mobile applications`}</p>
      <Row className="my-row">
        {config?.projects?.map((item) => (
          <Col
            lg={4}
            md={6}
            sm={12}
            xs={12}
            key={item?.title}
            // onClick={() => select(item)}
          >
            <div
              key={item?.title}
              className={`project-holder 
                // {selected?.title === item?.title ? "selected-project" : ""}
              `}
            >
              <Image src={item?.logo} className="project-logo mb2" />
              <p className="title text-bigger mb0 text-center">{item.title}</p>
              <p className="title text-center mb0">{`by ${
                item.company || ""
              }`}</p>
              <p className="title text-small-gray text-center">{`released on ${item.releasedOn}`}</p>
              <div className="my-row2 mt1 ">
                <div className="mr3">
                  <a target="blank" href={item?.appStore || ""}>
                    <FontAwesomeIcon
                      size="3x"
                      // style="--fa-animation-duration: 0.5s;"
                      icon="fa-brands fa-app-store fa-beat"
                      color={theme === "dark-theme" ? "#FFF" : "#2a303c"}
                    />
                  </a>
                </div>
                <div className="ml3">
                  <a target="blank" href={item?.playStore || ""}>
                    <FontAwesomeIcon
                      size="3x"
                      // style="--fa-animation-duration: 0.5s;"
                      icon="fa-brands fa-google-play fa-beat"
                      color={theme === "dark-theme" ? "#FFF" : "#2a303c"}
                    />
                  </a>
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
          <Col
            lg={4}
            md={6}
            sm={12}
            xs={12}
            key={item?.title}
            // onClick={() => select(item)}
          >
            <div
              key={item?.title}
              className={`project-holder 
                // {selected?.title === item?.title ? "selected-project" : ""}
              `}
            >
              <Image src={item?.logo} className="project-logo mb2" />
              <p className="title text-bigger mb0 text-center">{item.title}</p>
              <p className="title text-center mb0">{`by ${
                item.company || ""
              }`}</p>
              <p className="title text-small-gray text-center">{`released on ${item.releasedOn}`}</p>
              <div className="my-row2 mt1 ">
                <div className="mr3">
                  <a target="blank" href={item?.link || ""}>
                    <FontAwesomeIcon
                      size="3x"
                      // style="--fa-animation-duration: 0.5s;"
                      icon="fa-solid fa-link"
                      color={theme === "dark-theme" ? "#FFF" : "#2a303c"}
                    />
                  </a>
                </div>
              </div>
              <div className="line" />
              <div className="dot" />
            </div>
          </Col>
        ))}
      </Row>
      {/* <div>
        <p className="title text-bigger mb0 text-center">{selected.title}</p>
      </div> */}
      {/* <Modal show={selected?.id === 0} onHide={null}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default Project;
