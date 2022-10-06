import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { Row, Col } from "react-bootstrap";
import {
  MyInfo,
  Contact,
  Project,
  Education,
  Experience,
  Techlonogy,
} from "../Components";

function Home({ theme }) {
  return (
    <div className="my-container">
      <Row>
        <Col sm={12}>
          <MyInfo theme={theme} />
        </Col>
        <Col sm={12}>
          <Row>
            <Col sm={4}>
              <Contact theme={theme} />
            </Col>
            <Col sm={4}>
              <Education theme={theme} />
            </Col>
            <Col sm={4}>
              <Techlonogy theme={theme} />
            </Col>
          </Row>
          <Row>
            <Experience theme={theme} />
          </Row>
        </Col>
        <Project theme={theme} />
      </Row>
      {/* <Header />
      <Footer /> */}
    </div>
  );
}

export default Home;
