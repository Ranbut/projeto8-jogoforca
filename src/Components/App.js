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
  const [palavra, setPalavra] = React.useState("");
  const [erros, setErros] = React.useState(0);

  const chuteValor = React.useRef(null);

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
      palavraTemplate += "_";
    }
    setPalavra(palavraTemplate);
    console.log(palavraEscolhida);
  }

  function clicouLetra(letraClicado) {

    if (errosAtuais === maximaTentativas){
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

    if (quantidadeDeAcertos === palavraEscolhida.length){
      setJogando(false);
      console.log("Ganhou!");
    }

  }

  function chutarPalavra(){
    const palavraEscrita = (chuteValor.current.value);

    if(palavraEscrita === palavraEscolhida){
      setPalavra(palavraEscolhida);
      setJogando(false);
      console.log("Ganhou!");
    }
    else{
      setPalavra(palavraEscolhida);
      setErros(maximaTentativas);
      setJogando(false);
      console.log("Perdeu!");
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
        <div className="chute">
          Já sei a palavra!
          <input ref={chuteValor} type="text"/>
          <button onClick={() => chutarPalavra()}>Chutar</button>
        </div>
    </>
  );
}

export default App;