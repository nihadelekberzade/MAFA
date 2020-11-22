import React from "react";
import Developer from "./Developer";
import { images } from "../img/images";

export default function Team() {
  const team = [
    {
      name: "Nihad Elekberzade",
      profession: "head of front end",
      src: images.dimaM,
      linkedin: "https://www.linkedin.com/in/nihad-elekberzade-550959185/",
      email: "elekberzadeh333@gmail.com",
      className: "dimaM",
    },
    {
      name: "ДМИТРИЙ ЗАПИСОЧНЫЙ",
      profession: "head of contextual ad",
      src: images.dimaZ,
      linkedin: "https://www.linkedin.com/in/nihad-elekberzade-550959185/",
      email: "elekberzadeh333@gmail.com",
      className: "dimaZ",
    },
    {
      name: "ЕВГЕНИЯ КУКУШКИНА",
      profession: "head of legal",
      src: images.evgeniya,
      linkedin: "https://www.linkedin.com/in/nihad-elekberzade-550959185/",
      email: "elekberzadeh333@gmail.com",
      className: "evgeniya",
    },
  ];

  return (
    <section className="team">
      <ul className="list">
        <div className="column">
          {team.map((item, index) => {
            return (
              <li
                className={`list__item list__item--${item.className}`}
                key={index}
              >
                <Developer
                  name={item.name}
                  profession={item.profession}
                  src={item.src}
                  linkedin={item.linkedin}
                  email={item.email}
                />
              </li>
            );
          })}
        </div>
      </ul>
    </section>
  );
}
