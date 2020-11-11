import React from "react";

export default function Developer(props) {
  return (
    <div className="developer">
      <img className="developer__img" src={props.src} alt="developer"></img>

      <div className="developer__info">
        <h2 className="developer__name">{props.name}</h2>

        <footer className="developer__footer">
          <h4 className="developer__profession">{props.profession}</h4>

          <a
            href={props.linkedin}
            className="developer__link developer__link--linkedin"
          >
            <i className="fab fa-linkedin-in developer__icon"></i>
          </a>
          <a href={props.email} className="developer__link">
            <i className="far fa-envelope developer__icon"></i>
          </a>
        </footer>
      </div>
    </div>
  );
}
