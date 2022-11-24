import React from 'react'
import Chute from './Chute';
import Jogo from './Jogo';
import Letras from './Letras';
import palavras from '../Palavras';

let erros = 0;

function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [selecionados, setSelecionados] = React.useState([]);
  const [jogando, setJogando] = React.useState(false);
  const [palavra, setPalavra] = React.useState("");

  function iniciarJogo(){
    setJogando(true);
    console.log(jogando);
  }

  function clicouLetra(letraClicado) {
    const jaEscolhido = selecionados.includes(letraClicado)
  
    if (jogando && !jaEscolhido) {
      setSelecionados([...selecionados, letraClicado])
    }
    console.log(selecionados);
  }


  return(
    <>
        <Jogo />
          <button onClick={() => iniciarJogo()} className="botaoPalavra">Escolher Palavra</button>
        <Letras />
        <div className="containerLetras">
            {alfabeto.map(letra => <button onClick={() => clicouLetra(letra)} key={letra} className={`letraSelecao ${selecionados.includes(letra) ? "" : "selecionavel"}`}>{letra.toUpperCase()}</button>)}
        </div>
        <Chute />
    </>
  );
}

export default App;
export {erros};