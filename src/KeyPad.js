

import { click } from "@testing-library/user-event/dist/click";
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
        console.log(event.target);
        document.getElementById(event.target.innerHTML[0]).play();
    }
  
   useEffect(()=>{
    document.addEventListener('keydown',(e)=>{
        const keysArr =["q","w","e","a","s","d","z","x","c"];
        keysArr.forEach((val)=>{
            if(e.key.toLowerCase()===val){
                document.getElementById(val).click();

            }
        })
    });
   },[])
    
    
    return(
        <div id="key-pad">
            
            
            
            <button id="q" className="drum-pad" onClick={(e)=>playTonehandle(e)}>Q
            <audio id="Q" className="clip" src={clap}/>
            </button>
            <button id="w" className="drum-pad" onClick={(e)=>playTonehandle(e)}>W
            <audio id="W" src={eleckick} className="clip"/>
            </button>
            <button id="e" className="drum-pad" onClick={(e)=>playTonehandle(e)}>E
            <audio id="E" src={hat} className="clip"/>
            </button>
            <button id="a" className="drum-pad" onClick={(e)=>playTonehandle(e)}>A
            <audio id="A" src={kick} className="clip"/>
            </button>
            <button id="s" className="drum-pad" onClick={(e)=>playTonehandle(e)}>S
            <audio id="S" src={ride} className="clip"/>
            </button>
            <button id="d" className="drum-pad" onClick={(e)=>playTonehandle(e)}>D
            <audio id="D" src={snare} className="clip"/>
            </button>
            <button id="z" className="drum-pad" onClick={(e)=>playTonehandle(e)}>Z
            <audio id="Z" src={splash} className="clip"/>
            </button>
            <button id="x" className="drum-pad" onClick={(e)=>playTonehandle(e)}>X
            <audio id="X" src={tabla} className="clip"/>
            </button>
            <button id="c" className="drum-pad" onClick={(e)=>playTonehandle(e)}>C
            <audio id="C" src={tom} className="clip"/>
            </button>
        </div>
    )
}

export default KeyPad