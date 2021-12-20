

function KeyPad (props){
  

  
    return (
      <div style={props.style} className="drum-pad" id={props.code} onClick={(e)=>props.handleClick(e)}>{props.id.toUpperCase()}
        <audio className="clip" id={props.id} src={props.src}>
    </audio>
    </div>
    )
}

export default KeyPad