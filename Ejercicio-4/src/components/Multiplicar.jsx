import { useState } from "react";

function Multiplicar() {
  const [formData, setFormData] = useState({
    numero1: "",
    numero2: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [mostrarResultado, setMostrarResultado] = useState(false);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Numero 1</label>
        <input
          type="number"
          value={formData.numero1}
          onChange={(e) =>
            setFormData({ ...formData, numero1: e.target.value })
          }
        />
        <label htmlFor="">Numero 2</label>
        <input
          type="number"
          value={formData.numero2}
          onChange={(e) =>
            setFormData({ ...formData, numero2: e.target.value })
          }
        />
        <button
          type="submit"
          onClick={() => setMostrarResultado(!mostrarResultado)}
        >
          Multiplicar
        </button>
      </form>
      {mostrarResultado ? (
        <p>
          El resultado de {formData.numero1} por {formData.numero2} es:{" "}
          {formData.numero1 * formData.numero2}
        </p>
      ) : (
        <p>Pon dos numeros para multiplicar</p>
      )}
    </div>
  );
}
export default Multiplicar;
