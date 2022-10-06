import React from "react";
import config from "../config";
import { Row, Col, Container } from "react-bootstrap";

function Experience() {
  return (
    <Container className="my-card my-info">
      <p className="card-title">Experience</p>
      <Row>
        {config?.experiences?.map((item) => (
          <Col key={item?.company} sm={6}>
            <div key={item?.company} className="company-holder">
              <p className="title text-bigger mb0">
                <a target="blank" href={item?.href}>
                  {item.company}
                </a>
              </p>
              <p className="title">{item.position}</p>
              <p className="title text-small-gray">{`${item.from} - ${item.to}`}</p>
              <p className="title text-medium-gray">{item.description}</p>
              <div className="line" />
              <div className="dot" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Experience;
