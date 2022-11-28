import styled from 'styled-components';

function Chute (props) {
    return(
    <>
        <StyledChute>
          Já sei a palavra!
          <input disabled={props.status === 3 ? false : true} data-test="guess-input" ref={props.chuteValor} type="text"/>
          <button className={props.status === 3 ? "selecionavel" : ""} disabled={props.status === 3 ? false : true} data-test="guess-button" onClick={() => props.chutarPalavra()}>Chutar</button>
        </StyledChute>
    </>
    );
}

const StyledChute = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 144px;
    height: 23px;
    
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    
    color: #000000;

    input{
    box-sizing: border-box;

    width: 353px;
    height: 40px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
}

    button{
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #7AA7C7;

    width: 100px;
    height: 40px;

    background: #9FAAB5;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
}
`;

export default Chute;