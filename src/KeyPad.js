import { useEffect, useState } from "react"


function KeyPad ({display,tone,id,src,keys}){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  const inActive = {background:"#"+randomColor};
  const active = {"background":"tomato","box-shadow":"2px 1px 2px wheat"}
  const [style,setStyle]=useState(inActive);
    const activate= ()=>{
      document.getElementById(id).currentTime = 0;
      document.getElementById(id).play();
      setStyle(active);
      setTimeout(()=>setStyle(inActive),100);
      display(tone);
    }

    const handleKey = (e)=>{
      if (e.key===keys){
     activate();
      }
    }
    useEffect(()=>{
      document.addEventListener("keydown",handleKey);
      return ()=>document.removeEventListener("keydown",handleKey);
    }
      )
    
    
    
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