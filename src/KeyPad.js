import { useState } from "react"


function KeyPad ({display,tone,id,src}){
  const inActive = {background:"gray"};
  const active = {background:"tomato"}
  const [style,setStyle]=useState(inActive);
    const activate= ()=>{
      document.getElementById(id).currentTime = 0;
      document.getElementById(id).play();
      setStyle(active);
      setTimeout(()=>setStyle(inActive),100);
      display(tone);
    }
    
    return (
      <div className="drum-pad"
      id={tone}
      style={style}
      onClick={activate}>
        {id}
        <audio src={src} className="clip" id={id}>
          audio not supported
        </audio>

      </div>
    )
}

export default KeyPad