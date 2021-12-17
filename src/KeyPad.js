
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


function KeyPad (props){
const keysArr=[
    {id:"q",src:clap},
    {id:"w",src:eleckick},
    {id:"e",src:hat},
    {id:"a",src:kick},
    {id:"s",src:ride},
    {id:"d",src:snare},
    {id:"z",src:splash},
    {id:"x",src:tabla},
    {id:"c",src:tom}
];
function playTone(e){
    const sound = e.target;
    sound.
}
  
  
    
    return(
        
    )
}

export default KeyPad