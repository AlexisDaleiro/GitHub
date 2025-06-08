import { useState } from "react";
import productos from "./ListaProducto";
import Carrito from "./Carrito";

function Producto({ agregarAlCarrito }) {
  return (
    <div className="producto">
      <h2>Lista de Productos</h2>
      <ul className="list-group">
        {productos.map((producto) => (
          <li className="list-group-item" key={producto.id}>
            <button
              onClick={() => agregarAlCarrito(producto)}
              type="button"
              className="btn btn-light"
            >
              +
            </button>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Producto;
