import React from 'react'
import Chute from './Chute';
import palavras from '../Palavras';

let palavraEscolhida;
let quantidadeDeAcertos = 0;
let palavraTemplate = ""
let errosAtuais = 0;

function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [selecionados, setSelecionados] = React.useState([]);
  const [jogando, setJogando] = React.useState(false);
  const [palavra, setPalavra] = React.useState("");
  const [erros, setErros] = React.useState(0);

  function iniciarJogo(){
    setSelecionados([]);
    setErros(0)
    setJogando(true);
    escolherPalavra();
  }

  function escolherPalavra(){
    const palavraAleatoria = palavras[Math.floor(Math.random()*palavras.length)];
    palavraEscolhida = palavraAleatoria;
    for(let i = 0; i < palavraEscolhida.length; i++){
      palavraTemplate += "_ "
    }
    setPalavra(palavraTemplate);
    console.log(palavraEscolhida);
  }

  function clicouLetra(letraClicado) {

    palavraTemplate = "";

    if (errosAtuais === 6){
      setJogando(false);
      console.log("Perdeu!");
      return;
    }

    const jaEscolhido = selecionados.includes(letraClicado)
    let letraCorreta = false;

    for(let i = 0; i < palavraEscolhida.length; i++){
      if(letraClicado === palavraEscolhida[i]){
        letraCorreta = true;
        break;
      }
    }
    
    if (jogando && !jaEscolhido) {
      if (!letraCorreta){
        errosAtuais++;
        setErros(erros + 1);
        palavraTemplate += "_ ";
        console.log(palavraTemplate);
      }
      else{
        for (let i = 0; i < palavraEscolhida.length; i++){
          if(palavraEscolhida[i] === letraClicado){
            quantidadeDeAcertos++;
            palavraTemplate += letraClicado + " ";
          }
        }
        console.log(palavraTemplate);
      }

      setSelecionados([...selecionados, letraClicado])
      setPalavra(palavraTemplate);
    }

    if (quantidadeDeAcertos === palavraEscolhida.length){
      setJogando(false);
      console.log("Ganhou!");
    }

  }

  return(
    <>
        <img className="forca" src={`./assets/forca${erros}.png`} alt="forca" />
        <button onClick={() => iniciarJogo()} className="botaoPalavra">Escolher Palavra</button>
        <h4 className="palavra">{palavra}</h4>
        <div className="containerLetras">
            {alfabeto.map(letra => <button onClick={() => clicouLetra(letra)} key={letra} className={`letraSelecao ${selecionados.includes(letra) ? "" : "selecionavel"}`}>{letra.toUpperCase()}</button>)}
        </div>
        <Chute />
    </>
  );
}

export default App;