import React, { useState } from "react";
import { Link } from "react-router-dom";

 function Sidebar() {
  const [isActive, setActive] = useState(false);
  let toggleSidebar = () => {
    setActive(!isActive);
  };
  const links = [
    {
      text: "home",
      link: "/home",
    },
    {
      text: "team",
      link: "/team",
    },
    {
      text: "contact",
      link: "/contacts",
    },
  ];
  return (
    <nav className={`sidebar ${isActive ? "sidebar--active" : ""}`}>
      <header className="sidebar__header">
        <Link className="logo" to="/home">
          <img
            alt="logo"
            src={require(isActive
              ? "../img/logo_black.svg"
              : "../img/logo_white.svg")}
          />
        </Link>

        <h2
          className={`sidebar__toggle ${isActive ? "black" : "white"}`}
          onClick={toggleSidebar}
        >
          menu
        </h2>
      </header>

      <ul
        className={`nav-list ${
          isActive ? "nav-list--active" : "nav-list--collapsed"
        }`}
      >
        {links.map((link, index) => {
          return (
            <li onClick={toggleSidebar} key={index}>
              <Link to={link.link}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Sidebar;