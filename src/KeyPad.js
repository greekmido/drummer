

function KeyPad (props){
  
  const putKeys = props.arrOfkeys.map((val)=>{
    return <div style={props.style} className="drum-pad" id={val.code} onClick={(e)=>props.handleClick(e)}>{val.id.toUpperCase()}
    <audio className="clip" id={val.id} src={val.src}>
    </audio>
</div>
  })
  
    return putKeys;
}

export default KeyPad