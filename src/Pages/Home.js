import React from "react";
import Footer from "../Components/Footer";

import { Row, Col } from "react-bootstrap";
import {
  MyInfo,
  Contact,
  Project,
  Education,
  Experience,
  Techlonogy,
  Certificate,
} from "../Components";

function Home({ theme, changeTheme }) {
  return (
    <div className="my-container">
      <Row>
        <Col sm={12}>
          <MyInfo theme={theme} changeTheme={changeTheme} />
        </Col>
        <Col sm={12}>
          <Row>
            <Col sm={12} md={12} lg={3}>
              <Contact theme={theme} />
            </Col>
            <Col sm={12} md={12} lg={3}>
              <Education theme={theme} />
            </Col>
            <Col sm={12} md={12} lg={3}>
              <Techlonogy theme={theme} />
            </Col>
            <Col sm={12} md={12} lg={3}>
              <Certificate theme={theme} />
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <Experience theme={theme} />
        </Col>
        <Col sm={12} md={12} lg={12}>
          <Project theme={theme} />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Home;
