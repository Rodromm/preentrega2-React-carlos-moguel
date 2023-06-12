import React from "react";
import FIRMA from "../../img/FIRMA MM.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={FIRMA} alt="logo" width="150px" />
        </div>
      </Link>
      <ul>
        <li>
            <Link to="/">Inicio</Link>
        </li>
        <li>
            <Link to="/products">Productos</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span>
      </div>
    </header>
  );
};
