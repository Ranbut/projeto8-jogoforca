import App, { alfabeto } from "./App";

function Letras () {
    return(
    <>
        <h4 className="palavra">_ _ _ _ _ _ _ _ _ _</h4>
        <div className="containerLetras">
            {alfabeto.map(letra => <button key={letra} className="letraSelecao">{letra.toUpperCase()}</button>)}
        </div>
    </>
      );
}

export default Letras;