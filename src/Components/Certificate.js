import React from "react";
import config from "../config";
import { Col } from "react-bootstrap";

function Certificate() {
  return (
    <div className="my-card my-info experience">
      <p className="card-title">Certificate</p>
      {config?.certificates?.map((item, index) => (
        <Col
          key={item?.title}
          sm={12}
          md={6}
          onClick={() => {
            if (!item?.link) {
              select(item);
            }
          }}
        >
          <div key={item?.year}>
            <p className="title text-small-gray">{`${item.year} - ${item?.number}`}</p>
            <p className="title mb0 text-small-gray">{item.text}</p>
            <p className="title mb0 italic">{`${item.org} - ${item.title}`}</p>
            <a
              href={item?.link}
              target="_blank"
              className="title text-small-gray"
            >
              Verify here
            </a>
            {index + 1 < config?.certificates?.length && (
              <div className="line2" />
            )}
          </div>
        </Col>
      ))}
    </div>
  );
}

export default Certificate;
