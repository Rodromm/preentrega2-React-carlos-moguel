import React from "react";
import card from "../../img/arreo1.jpeg";

export const Carrito = () => {
  return (
    <div className="carritos show">
      <div className="carrito show">
        <div className="closeCarrito">
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su Carrito</h2>
        <div className="centerCarrito">
          
          <div className="itemCarrito">
            <img src={card} alt="" />
            <div>
                <h3>Titulo</h3>
                <p className="price">$1500</p>
            </div>
            <div>
                <box-icon name="up-arrow" type="solid"></box-icon>
                <p className="cantidad">1</p>
                <box-icon name="down-arrow" type="solid"></box-icon>
            </div>
            <div className="removeItem">
                <box-icon name="trash" type="solid"></box-icon>
            </div>
          </div>


        </div>
        <div className="footerCarrito">
            <h3>Total: $15000</h3>
            <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};
