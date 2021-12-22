import { useState } from 'react';
import Display from './Display.js';
import KeyPad from './KeyPad.js';
import tunes from './tunes'


function Drum (){
    
    const [display,setDisplay] = useState("beat it!!");
    const keys= tunes.map((val)=>{
        return <KeyPad display={setDisplay} tone={val.tone} id={val.id} src={val.src} keys={val.key} />
    });
    
    return (
        <div id="drum-machine">
        {keys}
        <Display display={display}/>
        </div>
    )
 
    
}

export default Drum