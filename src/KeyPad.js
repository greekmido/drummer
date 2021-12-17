

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
        
        </div>
    )
}

export default KeyPad