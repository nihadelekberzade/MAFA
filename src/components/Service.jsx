import React from "react";
import { useEffect } from "react";

const Service = ({ index, activeIndex, title, subtitle1, subtitle2, onClick }) => {
  useEffect(() => {
    if (index === activeIndex) {
      // document.querySelector('.service--active').document.querySelector(".service__text-wrapper").style.height = document.querySelector('.service--active').document.querySelector('.service__text').clientHeight;
    }
  });
  return (
    <div className={`service  ${index === activeIndex ? "service--active" : ""}`}>
      <h2 className="service__title" onClick={() => onClick(index)}>
        {title}
      </h2>
      <div className="service__text-wrapper">
        <div className="service__text">
          <p className="service__subtitle-1">{subtitle1}</p>
          <p className="service__subtitle-2">{subtitle2}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
