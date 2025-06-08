import { useState } from "react";
import productos from "./ListaProducto";
import Producto from "./Producto";

function Carrito({ carrito, quitarAlCarrito }) {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  return (
    <>
      <div className="carrito">
        <div className="d-flex justify-content-between">
          <h2>Carrito</h2>
          <h5 className="bg-secondary text-white p-2 rounded-3">
            {" "}
            Total ${total}{" "}
          </h5>
        </div>
        <ul className="list-group">
          {carrito.map((item, index) => (
            <li className="list-group-item" key={index}>
              <button
                className="btn btn-light"
                onClick={() => quitarAlCarrito(item)}
                type="button"
              >
                -
              </button>
              {item.nombre} - ${item.precio} <h3> </h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Carrito;
