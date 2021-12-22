import { useEffect, useState } from "react"


function KeyPad ({display,tone,id,src,keys}){
  const inActive = {background:"gray"};
  const active = {background:"tomato"}
  const [style,setStyle]=useState(inActive);
    const activate= ()=>{
      console.log("this is activate" + keys)
      document.getElementById(id).currentTime = 0;
      document.getElementById(id).play();
      setStyle(active);
      setTimeout(()=>setStyle(inActive),100);
      display(tone);
    }
   const handleKey =()=>{
     console.log("im handeling key press")
    document.getElementById(keys).play()
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