import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListaPokemon from "./components/ListaPokemon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center bg-light p-5">
        <ListaPokemon />
      </div>
    </div>
  );
}

export default App;
