import clap from "./wav/clap.wav";
import eleckick from "./wav/elec-kick.wav";
import hat from "./wav/hat.wav";
import kick from "./wav/kick.wav";
import ride from "./wav/ride.wav";
import snare from "./wav/snare.wav";
import splash from "./wav/splash.wav";
import tabla from "./wav/tabla.wav";
import tom from "./wav/tom.wav";

const tunes=[
    {
        id:"Q",
        src:clap,
        tone:"clap",
        key:"q"
    },
    {
        id:"W",
        src:eleckick,
        tone:"eleckick",
        key:"w"
    },
    {
        id:"E",
        src:hat,
        tone:"hat",
        key:"e"
    },
    {
        id:"A",
        src:kick,
        tone:"kick",
        key:"a"
    },
    {
        id:"S",
        src:ride,
        tone:"ride",
        key:"s"
    },
    {
        id:"D",
        src:snare,
        tone:"snare",
        key:"d"
    },
    {
        id:"Z",
        src:splash,
        tone:"splash",
        key:"z"
    },
    {
        id:"X",
        src:tabla,
        tone:"tabla",
        key:"x"
    },
    {
        id:"C",
        src:tom,
        tone:"tom",
        key:"c"
    },
   
];

export default tunes;