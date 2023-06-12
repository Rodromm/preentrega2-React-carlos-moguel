import React from "react"
import ANILLO1 from "../../img/anillo1.jpeg";

export const ProductoItem = ({id, title, price, image, category, cantidad}) => {
    return(
        
            <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={image} alt={title} />
            </div>
          </a>
          <div className="producto_footer">
            <h1> { title } </h1>
            <p>  {category} </p>
            <p> {cantidad} </p>
            <p className="price"> ${price} </p>
          </div>
          <div className="button">
            <button className="btn">Añadir</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>

        
    )
}