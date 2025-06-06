import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movie from "./components/Movie";

function App() {
  const peliculas = [
    {
      title: "Spiderman",
      año: 1990,
      imagen: "src/assets/spiderman.jpg",
      puntaje: { rating: "Buena", color: "bg-success" },
    },
    {
      title: "Batman",
      año: 1995,
      imagen: "src/assets/batman&robin.png",
      puntaje: { rating: "Mala", color: "bg-danger" },
    },
    {
      title: "Batman&Robin",
      año: 2000,
      imagen: "src/assets/Batman&robin2.jpg",
      puntaje: { rating: "Intermedio", color: "bg-warning" },
    },
  ];

  return (
    <>
      {peliculas.map((pelicula, index) => (
        <Movie
          key={index}
          title={pelicula.title}
          puntaje={pelicula.puntaje.color}
          rating={pelicula.puntaje.rating}
          año={pelicula.año}
          imagen={pelicula.imagen}
        />
      ))}
    </>
  );
}

export default App;
