import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./inicio";
import { ListProducts } from "./products";

export const Pages = () => {
    return(
        <section>
            <Routes>
                <Route path="/" exact Component={Inicio} />
                <Route path="/products" exact Component={ListProducts} />
            </Routes>
        </section>
        
    )
}