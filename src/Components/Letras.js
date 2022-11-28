import { alfabeto } from "./App";

function Letras (props) {
    return(
    <>
      <div className="containerLetras">
        {alfabeto.map(letra => <button data-test="letter" disabled={props.status === 3 && !props.selecionados.includes(letra) ? false : true} onClick={() => props.clicouLetra(letra)} key={letra} className={`letraSelecao ${props.status === 3 && !props.selecionados.includes(letra) ? "selecionavel" : ""}`}>{letra.toUpperCase()}</button>)}
      </div>
    </>
      );
}

export default Letras;