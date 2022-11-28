import { alfabeto } from "./App";
import styled from 'styled-components';

function Letras (props) {
    return(
    <>
      <ContainerLetras>
        {alfabeto.map(letra => <button data-test="letter" disabled={props.status === 3 && !props.selecionados.includes(letra) ? false : true} onClick={() => props.clicouLetra(letra)} key={letra} className={`letraSelecao ${props.status === 3 && !props.selecionados.includes(letra) ? "selecionavel" : ""}`}>{letra.toUpperCase()}</button>)}
      </ContainerLetras>
    </>
      );
}

const ContainerLetras = styled.div`
    margin-left: 18%;
    width: 806px;
    display: flex;
    flex-wrap: wrap;
`;

export default Letras;