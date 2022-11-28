import styled from 'styled-components';

function Chute (props) {

    const StyledChute = styled.div`
    margin-top: 56px;
    margin-left: 25%;
    
    display: flex;
    flex-direction:row;

    p{
    width: 146px;
    height: 23px;
    
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    
    color: #000000;
    }

    input{
    margin-left: 12px;
    box-sizing: border-box;

    width: 353px;
    height: 40px;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
}

    button{
    margin-left: 12px;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color:${props.status === 3 ? "#39739D" : "#7AA7C7"};

    width: 100px;
    height: 40px;

    background:${props.status === 3 ? "#E1ECF4" : "#9FAAB5"};
    border: 1px solid #7AA7C7;
    border-radius: 3px;
}
`;

    return(
    <>
        <StyledChute>
          <p>Já sei a palavra!</p>
          <input disabled={props.status === 3 ? false : true} data-test="guess-input" ref={props.chuteValor} type="text"/>
          <button disabled={props.status === 3 ? false : true} data-test="guess-button" onClick={() => props.chutarPalavra()}>Chutar</button>
        </StyledChute>
    </>
    );
}

export default Chute;