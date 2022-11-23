import Chute from './Chute';
import Jogo from './Jogo';
import Letras from './Letras';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let jogando = false;
let erros = 0;

function App() {
  return(
    <>
        <Jogo />
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