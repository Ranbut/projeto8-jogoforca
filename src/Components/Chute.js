function Chute (props) {

  console.log(props.status);

    return(
    <>
        <div className="chute">
          Já sei a palavra!
          <input data-test="guess-input" ref={props.chuteValor} type="text"/>
          <button disabled={props.status === 3 ? false : true} data-test="guess-button" onClick={() => props.chutarPalavra()}>Chutar</button>
        </div>
    </>
    );
}

export default Chute;