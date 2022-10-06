import React, { useState } from "react";
import config from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Image, Modal, Container } from "react-bootstrap";

function Project({ theme }) {
  const [selected, select] = useState(null);

  return (
    <Container className="my-card my-info">
      <p className="card-title">Projects</p>
      <Row className="my-row">
        {config?.projects?.map((item) => (
          <Col key={item?.title} sm={3} className="centera">
            <div key={item?.title} className="project-holder center">
              <div className="profilePic-box">
                <Image src={item?.logo} className="project-logo center" />
              </div>
              <p className="card-title text-centera">{item.title}</p>
              <p className="title text-centera mb0">{`by ${item.company}`}</p>
              <p className="title text-small-gray text-centera">{`released on ${item.releasedOn}`}</p>
              <div className="center mt1">
                <a target="blank" href={item?.appStore} className="store-icon">
                  <FontAwesomeIcon
                    size="3x"
                    icon="fa-brands fa-app-store"
                    color={theme === "dark-theme" ? "#FFF" : "#000"}
                  />
                </a>
                <a target="blank" href={item?.playStore} className="store-icon">
                  <FontAwesomeIcon
                    size="3x"
                    icon="fa-brands fa-google-play"
                    color={theme === "dark-theme" ? "#FFF" : "#000"}
                  />
                </a>
              </div>
              <div className="line" />
              <div className="dot" />
            </div>
          </Col>
        ))}
      </Row>
      <Modal show={selected?.id === 0} onHide={null}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Project;
