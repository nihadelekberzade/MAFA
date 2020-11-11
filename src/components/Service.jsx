import React from "react";

export default function Service(props) {
  return (
    <div
      className={`service  ${
        props.index === props.activeIndex ? "service--active" : ""
      }`}
    >
      <h2 className="service__title" onClick={() => props.onClick(props.index)}>
        {props.title}
      </h2>
      <div className="service__text">
        <p className="service__subtitle-1">{props.subtitle1}</p>
        <p className="service__subtitle-2">{props.subtitle2}</p>
      </div>
    </div>
  );
}
