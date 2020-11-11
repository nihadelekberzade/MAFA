import React from "react";

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__bg-img" />

      <div className="contacts__content">
        <h1 className="contacts__title">CONTACT</h1>
        <h3 className="contacts__country">Azerbaijan</h3>
        <ul className="contacts__list">
          <li className="contacts__list-item">Baku,Hilton Business Center</li>
          <li className="contacts__list-item">1@mafactory.com.az</li>
          <li className="contacts__list-item">+994 51 314 14 41</li>
        </ul>

        <span className="btn contacts__btn">contact us</span>
      </div>
    </div>
  );
}
