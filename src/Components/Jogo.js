function Jogo (props) {
    return(
    <>
        <img data-test="game-image" draggable={false} className="forca" src={`./assets/forca${props.erros}.png`} alt={`Imagem forca n° ${props.erros}`} />
        <button data-test="choose-word" onClick={() => props.iniciarJogo()} className="botaoPalavra">Escolher Palavra</button>
        <div data-test="word" data-answer={props.palavraEscolhida} className={`palavra ${(props.status === 1) ? "ganhou" : ""} ${(props.status === -1) ? "perdeu" : ""}`}>{props.palavra}</div>
    </>
    );
}

export default Jogo;