import React, { useContext } from "react";
import { ProductoItem } from "./ProductoItem";
import { DataContext } from "../../context/DataProvaider";

export const ListProducts = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  console.log(productos);

  return (
    <>
      <h1 className="title"> Productos Masonicos </h1>
      <div className="productos">
      {
        productos.map((producto) => (
          <ProductoItem 
          
          id={producto.id}
          title={producto.title}
          price={producto.price}
          image={producto.image}
          category={producto.category}
          cantidad={producto.cantidad}
          />
        ))
      }
      </div>
    </>
  );
};
