import React from "react";
import config from "../config";

function Certificate() {
  return (
    <div className="my-card my-info">
      <p className="card-title">Certificate</p>
      {config?.certificates?.map((item, index) => (
        <div key={item?.year}>
          <p className="title text-small-gray">{`${item.year} - ${item?.number}`}</p>
          <p className="title mb0 text-small-gray">{item.text}</p>
          <p className="title mb0 italic">{`${item.title} from ${item.org}`}</p>
          {index + 1 < config?.certificates?.length && (
            <div className="line2" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Certificate;
