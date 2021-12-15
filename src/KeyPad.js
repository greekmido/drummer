

import { useEffect } from "react";
import clap from "./wav/clap.wav";
import eleckick from "./wav/elec-kick.wav";
import hat from "./wav/hat.wav";
import kick from "./wav/kick.wav";
import ride from "./wav/ride.wav";
import snare from "./wav/snare.wav";
import splash from "./wav/splash.wav";
import tabla from "./wav/tabla.wav";
import tom from "./wav/tom.wav";
function KeyPad (){

    function playTonehandle(event){
        document.getElementById(event.target.innerHTML[0]).play();
    }
  
   useEffect(()=>{
    document.addEventListener('keydown',(e)=>{
        e.key==="q"?console.log('the right key'):console.log('nope')
    });
   },[])
    
    
    return(
        <div id="key-pad">
            
            
            
            <button className="drum-pad" onClick={(e)=>playTonehandle(e)}>Q
            <audio id="Q" className="clip" src={clap}/>
            </button>
            <button className="drum-pad" onClick={(e)=>playTonehandle(e)}>W
            <audio id="W" src={eleckick} className="clip"/>
            </button>
            <button className="drum-pad" onClick={(e)=>playTonehandle(e)}>E
            <audio id="E" src={hat} className="clip"/>
            </button>
            <button className="drum-pad" onClick={(e)=>playTonehandle(e)}>A
            <audio id="A" src={kick} className="clip"/>
            </button>
            <button className="drum-pad" onClick={(e)=>playTonehandle(e)}>S
            <audio id="S" src={ride} className="clip"/>
            </button>
            <button className="drum-pad" onClick={(e)=>playTonehandle(e)}>D
            <audio id="D" src={snare} className="clip"/>
            </button>
            <button className="drum-pad" onClick={(e)=>playTonehandle(e)}>Z
            <audio id="Z" src={splash} className="clip"/>
            </button>
            <button className="drum-pad" onClick={(e)=>playTonehandle(e)}>X
            <audio id="X" src={tabla} className="clip"/>
            </button>
            <button className="drum-pad" onClick={(e)=>playTonehandle(e)}>C
            <audio id="C" src={tom} className="clip"/>
            </button>
        </div>
    )
}

export default KeyPad