import React, { useContext } from "react";

import { DataContext } from "../../context/DataProvaider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  const resta = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCarrito([...carrito]);
    });
  };

  const suma = id => {
    carrito.forEach(item => {
      if(item.id === id){
        item.cantidad +=1;
      }
      setCarrito([...carrito])
    })
  }

  const removeProducto = (id) => {
    if (window.confirm("¿Quieres cancelar el producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
    }
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="closeCarrito" onClick={tooglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su Carrito</h2>
        <div className="centerCarrito">
          {
          
          carrito.length === 0 ? <h2 style={{
            textAlign: " center", fontSize: "3rem"
          }} >está vacio</h2> : <>
          {
          carrito.map((producto) => (
            <div className="itemCarrito" key={producto.id}>
              <img src={producto.image} alt="" />
              <div>
                <h3>{producto.title}</h3>
                <p className="price">${producto.price}</p>
              </div>
              <div>
                <box-icon name="up-arrow" type="solid" onClick={() => suma(producto.id)}></box-icon>
                <p className="cantidad">{producto.cantidad}</p>
                <box-icon name="down-arrow" type="solid" onClick={() => resta(producto.id)}></box-icon>
              </div>
              <div className="removeItem" onClick={() => removeProducto(producto.id)}>
                <box-icon name="trash" type="solid"></box-icon>
              </div>
            </div>
          ))}
          </>
          }
        </div>
        <div className="footerCarrito">
          <h3>Total:{total}</h3>
          <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};
