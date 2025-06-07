import pokemons from "./pokemons";

function ListaPokemon() {
  return (
    <>
      {pokemons.map((pokemon) => (
        <div
          className="col-2 border border-2 border-dark m-2 p-2 rounded-3 bg-light justify-content-center d-flex"
          key={pokemon.id}
        >
          <li className="list-group-item text-center">
            <img className="img-fluid" src={pokemon.image} alt={pokemon.name} />
            <p> {pokemon.name} </p>
            <p> {pokemon.type} </p>
          </li>
        </div>
      ))}
    </>
  );
}
export default ListaPokemon;
