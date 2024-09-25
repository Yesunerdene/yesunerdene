import React from "react";
import config from "../config";

function Education() {
  return (
    <div className="my-card my-info">
      <p className="card-title">Education</p>
      {config?.educations?.map((item) => (
        <div key={item?.from} className="mt1">
          <p className="title text-small-gray">{`${item.from} - ${item.to}`}</p>
          <p className="title mb0">{item.major}</p>
          <a target="_blank" className="title mb2" href={item?.href}>
            {item.university}
          </a>
          <br />
          <a target="_blank" className="title italic mt1" href={item?.href}>
            {item.department}
          </a>
          {/* <br />
          <br /> */}
          {/* <p className="title mb0">Thesis: {item.thesis}</p>
          <p className="title mb0">{item.thesisDescription}</p>
          <br />
          <p className="title mb0">Final grade: {item.grade}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Education;
