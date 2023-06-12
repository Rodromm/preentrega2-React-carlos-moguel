import React from "react";
import Portada from "../img/lodgefenix.jpg";
import { Link } from "react-router-dom";

export const Inicio = () => {
    return(
        <div className="inicio">
            <Link to="/">
                <h1>Inicio</h1>
            </Link>

            <Link to="/products">
                <h1>Productos</h1>
            </Link>

            <img src={Portada} alt="Inicio" />

        </div>
    )
} 