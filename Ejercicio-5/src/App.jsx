import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
import productos from "./components/ListaProducto";
function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const quitarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const index = prevCarrito.findIndex((item) => item.id === producto.id);
      if (index !== -1) {
        const nuevoCarrito = [...prevCarrito];
        nuevoCarrito.splice(index, 1);
        return nuevoCarrito;
      }
      return prevCarrito;
    });
  };

  return (
    <>
      <div className="container-fluid">
        <header>
          <h1>Bienvenido a la tienda</h1>
        </header>
        <div className="row">
          <div className="col-6">
            <Producto agregarAlCarrito={agregarAlCarrito} />
          </div>
          <div className="col-6">
            <Carrito carrito={carrito} quitarAlCarrito={quitarAlCarrito} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
