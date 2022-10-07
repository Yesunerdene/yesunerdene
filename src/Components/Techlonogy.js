import React from "react";
import config from "../config";

function Techlonogy() {
  return (
    <div className="my-card my-info">
      <p className="card-title">Technological background</p>
      {config?.technologies?.map((item) => (
        <div key={item?.language}>
          <p className="title">
            {item.language}
            {item?.techs?.map((subItem) => (
              <span key={subItem} className="title">{` | ${subItem}`}</span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Techlonogy;
