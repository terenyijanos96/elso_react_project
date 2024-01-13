export default function Kartya(props) {

    function kattintas(){
        console.log(props.obj.id)
        props.kattintas(props.obj.id)
    }

  return (
    <div className="card col-4">
      <div className="card-header">
        <h3>{props.obj.nev}</h3>
      </div>
      <div className="card-body">
        <img
          className="img-thumbnail"
          src={props.obj.img}
          alt={props.obj.nev}
        />
        {props.obj.nev}, {props.obj.kor} éves
      </div>
      <div className="card-footer">
        <button className="btn btn-success" onClick={kattintas} type="button">
          Vigyél haza!
        </button>
      </div>
    </div>
  );
}
