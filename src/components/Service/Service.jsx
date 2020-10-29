/* eslint-disable jsx-a11y/anchor-is-valid */
import "./service.css";
import React from "react";

export default function Service(props) {
  return (
    <div
      className={`service  ${
        props.index === props.activeIndex ? "service--active" : ""
      }`}
    >
      <a className="service__title" onClick={() => props.onClick(props.index)}>
        {props.title}
      </a>
      <div className="service__text">
        <span className="service__subtitle-1">{props.subtitle1}</span>
        <br />
        <span className="service__subtitle-2">{props.subtitle2}</span>
      </div>
    </div>
  );
}
