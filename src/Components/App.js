import React from 'react'
import palavras from '../Palavras';


let maximaTentativas = 6;
let palavraEscolhida;
let quantidadeDeAcertos = 0;
let palavraTemplate = "";
let errosAtuais = 0;

function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [selecionados, setSelecionados] = React.useState([]);
  const [jogando, setJogando] = React.useState(false);
  const [status, setStatus] = React.useState(0);
  const [palavra, setPalavra] = React.useState("");
  const [erros, setErros] = React.useState(0);

  const chuteValor = React.useRef(null);

  function iniciarJogo(){
    quantidadeDeAcertos = 0;
    setSelecionados([]);
    errosAtuais = 0;
    setErros(0)
    setStatus(0);
    setJogando(true);
    escolherPalavra();
  }

  function escolherPalavra(){
    const palavraAleatoria = palavras[Math.floor(Math.random()*palavras.length)];
    palavraEscolhida = palavraAleatoria;
    palavraTemplate = "";
    for(let i = 0; i < palavraEscolhida.length; i++){
      palavraTemplate += "_";
    }
    setPalavra(palavraTemplate);
    console.log(palavraEscolhida);
  }

  function clicouLetra(letraClicado) {

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
      }
      else{
        let novo = "";

        for(let i = 0; i < palavraEscolhida.length; i++){
          if(letraClicado === palavraEscolhida[i]){
              novo += letraClicado;
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
        console.log("Perdeu!");
        return;
      }

    if (quantidadeDeAcertos === palavraEscolhida.length){
      setStatus(1);
      setJogando(false);
      console.log("Ganhou!");
    }

  }

  function chutarPalavra(){
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
        <img data-test="game-image" className="forca" src={`./assets/forca${erros}.png`} alt={`Imagem forca n° ${erros}`} />
        <button data-test="choose-word" onClick={() => iniciarJogo()} className="botaoPalavra">Escolher Palavra</button>
        <div data-test="word" data-answer={palavraEscolhida} className={`palavra ${(status === 1) ? "ganhou" : ""} ${(status === -1) ? "perdeu" : ""}`}>{palavra}</div>
        <div className="containerLetras">
            {alfabeto.map(letra => <button data-test="letter" disabled={status === 0 ? false : true} onClick={() => clicouLetra(letra)} key={letra} className={`letraSelecao ${selecionados.includes(letra) ? "" : "selecionavel"}`}>{letra.toUpperCase()}</button>)}
        </div>
        <div className="chute">
          Já sei a palavra!
          <input data-test="guess-input" ref={chuteValor} type="text"/>
          <button data-test="guess-button" disabled={status === 0 ? false : true} onClick={() => chutarPalavra()}>Chutar</button>
        </div>
    </>
  );
}

export default App;