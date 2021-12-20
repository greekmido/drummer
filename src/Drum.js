import { useEffect, useState } from 'react';
import Display from './Display.js';
import KeyPad from './KeyPad.js';
import clap from "./wav/clap.wav";
import eleckick from "./wav/elec-kick.wav";
import hat from "./wav/hat.wav";
import kick from "./wav/kick.wav";
import ride from "./wav/ride.wav";
import snare from "./wav/snare.wav";
import splash from "./wav/splash.wav";
import tabla from "./wav/tabla.wav";
import tom from "./wav/tom.wav";




function Drum (){
    const inActive = {background:"gray"};
    const active = {background:"tomato"};
    const [style,setStyle]=useState(inActive);

    const [display,setDisplay]=useState('press');
    
    
    const keysArr=[
    {id:"q",src:clap,code:"KeyQ"},
    {id:"w",src:eleckick,code:"KeyW"},
    {id:"e",src:hat,code:"KeyE"},
    {id:"a",src:kick,code:"KeyA"},
    {id:"s",src:ride,code:"KeyS"},
    {id:"d",src:snare,code:"KeyD"},
    {id:"z",src:splash,code:"KeyZ"},
    {id:"x",src:tabla,code:"KeyX"},
    {id:"c",src:tom,code:"KeyC"}
];
    useEffect(()=>{
        document.addEventListener("keydown",(event)=>{
            const element = document.getElementById(event.code).childNodes[1]
           element.play();
           setDisplay(event.code);
           setStyle(active);
        })
    },[])
    
    
    const playTone=(e)=>{
        e.target.childNodes[1].play(); 
        setDisplay(e.target.getAttribute("id"));
        setStyle(active);
     }
     const putKeys = arrOfkeys.map((val)=>{
        <KeyPad style={} code={} handleClick={playTone} id={} src={}/>
     });
    
    return(
        <div id='drum-machine'>
            
            <Display monitor={display}/>
        </div>
        
    )
}

export default Drum