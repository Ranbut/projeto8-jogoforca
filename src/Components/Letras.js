import { alfabeto } from "./App";
import styled from 'styled-components';

function Letras (props) {

  const ContainerLetras = styled.div`
    margin-left: 18%;
    width: 806px;
    display: flex;
    flex-wrap: wrap;
`;

  const LetraButao = styled.button`
    width: 50px;
    height: 50px;
    margin-left: 12px;
    margin-top: 12px;

    text-align: center;
    line-height: 18.75px;
    color: #7AA7C7;
    font-weight: 700;
    font-size: 16px;

    background: #9FAAB5;
    box-sizing: border-box;    
    border: 1px solid #7AA7C7;
    border-radius: 3px;
`;

    return(
    <>
      <ContainerLetras>
        {alfabeto.map(letra => <LetraButao data-test="letter" disabled={props.status === 3 && !props.selecionados.includes(letra) ? false : true} onClick={() => props.clicouLetra(letra)} key={letra} className={props.status === 3 && !props.selecionados.includes(letra) ? "selecionavel" : ""}>{letra.toUpperCase()}</LetraButao>)}
      </ContainerLetras>
    </>
      );
}

export default Letras;