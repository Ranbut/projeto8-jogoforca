import Chute from './Chute';
import Jogo from './Jogo';
import Letras from './Letras';
import Palavras from '../Palavras';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function App() {
  return(
    <>
        <Jogo />
        <Letras />
        <Chute />
    </>
  );
}

export default App;
export {alfabeto};