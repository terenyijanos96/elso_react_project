import { lista } from "./model/adatok";
import "./App.css";
import Kartya from "./component/Kartya";

function App() {
  function kattintas(id) {
    console.log("szülőkomponensben", id)
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Első react projekt</h1>
        </header>
        <article className="row">
          {lista.map((elem, index) => {
            return <Kartya obj={elem} key={index} kattintas={kattintas} />;
          })}
        </article>
      </div>
    </>
  );
}

export default App;
