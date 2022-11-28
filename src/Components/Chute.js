function Chute (props) {
    return(
    <>
        <div className="chute">
          Já sei a palavra!
          <input data-test="guess-input" ref={props.chuteValor} type="text"/>
          <button data-test="guess-button" disabled={props.status === 0 ? false : true} onClick={() => props.chutarPalavra()}>Chutar</button>
        </div>
    </>
    );
}

export default Chute;