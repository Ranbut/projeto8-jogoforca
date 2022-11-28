import React from 'react'
import palavras from '../Palavras';
import Chute from './Chute';
import Letras from './Letras';
import Jogo from './Jogo';
import GlobalStyle from '../globalStyles'

let maximaTentativas = 6;
let palavraEscolhida;
let quantidadeDeAcertos = 0;
let palavraTemplate = "";
let errosAtuais = 0;

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function App() {

  const [selecionados, setSelecionados] = React.useState([]);
  const [jogando, setJogando] = React.useState(false);
  const [status, setStatus] = React.useState(0);
  const [palavra, setPalavra] = React.useState("");
  const [erros, setErros] = React.useState(0);

  const chuteValor = React.useRef(null);

  const iniciarJogo = () => {
    quantidadeDeAcertos = 0;
    setSelecionados([]);
    errosAtuais = 0;
    setErros(0)
    setStatus(3);
    setJogando(true);
    escolherPalavra();
  }

  const escolherPalavra = () =>{
    const palavraAleatoria = palavras[Math.floor(Math.random()*palavras.length)];
    palavraEscolhida = palavraAleatoria;
    palavraTemplate = "";
    for(let i = 0; i < palavraEscolhida.length; i++){
      palavraTemplate += "_";
    }
    setPalavra(palavraTemplate);
    console.log(palavraEscolhida);
  }

  const clicouLetra = (letraClicado) => {

    const jaEscolhido = selecionados.includes(letraClicado)
    let letraCorreta = false;
    const palavraNormalizada = palavraEscolhida.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    for(let i = 0; i < palavraEscolhida.length; i++){
      if(letraClicado === palavraNormalizada[i]){
        letraCorreta = true;
        break;
      }
    }

    if (jogando && !jaEscolhido) {
      if (!letraCorreta){
        errosAtuais++;
        setErros(erros + 1);
      }
      else{
        let novo = "";

        for(let i = 0; i < palavraEscolhida.length; i++){
          if(letraClicado === palavraNormalizada[i]){
              novo += palavraEscolhida[i];
              quantidadeDeAcertos++;
          }
          else if("_" !== palavraTemplate[i]){
              novo += palavraTemplate[i];
          }
          else{
            novo += "_"
          }
        }
        palavraTemplate = novo;
      }
      }

      setSelecionados([...selecionados, letraClicado])
      setPalavra(palavraTemplate);

    if (errosAtuais === maximaTentativas){
        setStatus(-1);
        setJogando(false);
        setPalavra(palavraEscolhida);
        console.log("Perdeu!");
        return;
      }

    if (quantidadeDeAcertos === palavraEscolhida.length){
      setStatus(1);
      setJogando(false);
      console.log("Ganhou!");
    }

  }

  const chutarPalavra = () => {
    const palavraEscrita = (chuteValor.current.value);

    if(palavraEscrita === palavraEscolhida){
      setPalavra(palavraEscolhida);
      setStatus(1);
      setJogando(false);
      console.log("Ganhou!");
    }
    else{
      setPalavra(palavraEscolhida);
      setErros(maximaTentativas);
      setStatus(-1);
      setJogando(false);
      console.log("Perdeu!");
    }
  }

  return(
    <>
      <GlobalStyle />
      <Jogo erros={erros} status={status} chuteValor={chuteValor} iniciarJogo={iniciarJogo} escolherPalavra={escolherPalavra} palavra={palavra} palavraEscolhida={palavraEscolhida} />
      <Letras status={status} selecionados={selecionados} clicouLetra={clicouLetra}/>
      <Chute status={status} chuteValor={chuteValor} chutarPalavra={chutarPalavra}/>
    </>
  );
}

export default App;
export {alfabeto};