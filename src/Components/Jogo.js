import styled from 'styled-components';

function Jogo (props) {
    return(
    <>
        <Forca data-test="game-image" draggable={false} className="forca" src={`./assets/forca${props.erros}.png`} alt={`Imagem forca n° ${props.erros}`} />
        <BotaoPalavra data-test="choose-word" onClick={() => props.iniciarJogo()}>Escolher Palavra</BotaoPalavra>
        <Palavra data-test="word" data-answer={props.palavraEscolhida} className={`${(props.status === 1) ? "ganhou" : ""} ${(props.status === -1) ? "perdeu" : ""}`}>{props.palavra}</Palavra>
    </>
    );
}

const Forca = styled.img`
    width: 400px;
    height: 466.67px;
    margin-left: 38px;
    margin-top: 59px;
`;

const BotaoPalavra = styled.button`
    width: 200px;
    height: 60px;

    position: relative;
    Top: -30vw;
    Left: 45vw;
    
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    
    color: #FFFFFF;

    background: #27AE60;
    border-radius: 8px;
`;

const Palavra = styled.div`
    position: relative;
    Top: -5vw;
    Left: 25vw;

    font-weight: 700;
    font-size: 50px;
    line-height: 68.1px;
    text-align: center;
`;

export default Jogo;