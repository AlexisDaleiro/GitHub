import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Foto from "./components/Foto";
function App() {
  let peliculas = {
    pelicula1: {
      title: "Spiderman",
      año: 1990,
      imagen: "Ejercicio-2srcassetsspiderman.jpg",
    },
    pelicula2: {
      title: "Batman",
      año: 1995,
      imagen: "Ejercicio-2srcassets\batman&robin.png",
    },
    pelicula3: {
      title: "Batman&Robin",
      año: 2000,
      imagen: "Ejercicio-2srcassetsBatman&robin2.jpg",
    },
  };

  for (let i = 0; i < peliculas.length; i++) {
    const pelicula = peliculas[i];
  }
  return <>
  <Titulo titulo= />
  </>;
}

export default App;
