import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import config from "../config";

function Contact({ theme }) {
  return (
    <div className="my-card my-info">
      <p className="card-title">Contact</p>
      {config?.contact?.map((item) => (
        <div key={item?.value} className="my-row">
          <FontAwesomeIcon
            size="1x"
            icon={item?.icon}
            color={theme === "dark-theme" ? "#FFF" : "#000"}
          />
          <a
            href={item?.href}
            className={`title contact-title ${
              item?.key === "Phone" ? "ml3" : ""
            }`}
          >
            {`${item?.key}${!item?.url ? ":" : ""}`}
          </a>
          {!item?.url && (
            <a href={item?.value} className="title contact-value">
              {item?.value}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default Contact;
