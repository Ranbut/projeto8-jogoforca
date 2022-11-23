import React from 'react'
import Chute from './Chute';
import Jogo from './Jogo';
import Letras from './Letras';

let erros = 0;

function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [jogando, setJogando] = React.useState(false);

  return(
    <>
        <Jogo />
          <button onClick={() => setJogando(true)} className="botaoPalavra">Escolher Palavra</button>
        <Letras />
        <div className="containerLetras">
            {alfabeto.map(letra => <button key={letra} className={(jogando) ? 'letraSelecao selecionavel' : 'letraSelecao'}>{letra.toUpperCase()}</button>)}
        </div>
        <Chute />
    </>
  );
}

export default App;
export {erros};