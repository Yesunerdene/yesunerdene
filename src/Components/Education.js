import React from "react";
import config from "../config";

function Education() {
  return (
    <div className="my-card my-info">
      <p className="card-title">Educational background</p>
      {config?.educations?.map((item) => (
        <div key={item?.from}>
          <p className="title text-small-gray">{`${item.from} - ${item.to}`}</p>
          <p className="title text-bigger mb0">{item.major}</p>
          <a
            target="_blank"
            className="title text-bigger mb2"
            href={item?.href}
          >
            {item.university}
          </a>
          <br />
          <br />
          <a target="_blank" className="title italic mt1" href={item?.href}>
            {item.department}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Education;
