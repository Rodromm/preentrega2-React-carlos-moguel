import React from "react";
import FIRMA from "../../img/FIRMA MM.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvaider";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toogleMenu = () => {
    setMenu(!menu)
  }

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
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total"> {carrito.length} </span>
      </div>
    </header>
  );
};
