function Multiplicar() {
  const [formData, setFormData] = useState({
    numero1: "",
    numero2: "",
  });

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}
export default Multiplicar;
