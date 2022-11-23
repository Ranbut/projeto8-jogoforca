import { erros } from "./App";

function Jogo () {
    return(
    <>
        <img className="forca" src={`./assets/forca${erros}.png`} alt="forca" />
        <button className="botaoPalavra">Escolher Palavra</button>
    </>
    );
}

export default Jogo;