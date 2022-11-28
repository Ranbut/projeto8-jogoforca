function Chute (props) {
    return(
    <>
        <div className="chute">
          Já sei a palavra!
          <input disabled={props.status === 3 ? false : true} data-test="guess-input" ref={props.chuteValor} type="text"/>
          <button className={props.status === 3 ? "selecionavel" : ""} disabled={props.status === 3 ? false : true} data-test="guess-button" onClick={() => props.chutarPalavra()}>Chutar</button>
        </div>
    </>
    );
}

export default Chute;