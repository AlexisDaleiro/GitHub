function Movie(props) {
  return (
    <div className=" d-flex justify-content-center">
      <div className="w-25S text-center">
        <li className="list-group">
          <ul>
            <h2>{props.title}</h2>
            <p className={props.puntaje}> {props.rating} </p>
            <p>{props.año}</p>
            <img
              className=""
              src={props.imagen}
              alt={props.title}
              width="200"
            />
          </ul>
        </li>
      </div>
    </div>
  );
}
export default Movie;
//
//
//
