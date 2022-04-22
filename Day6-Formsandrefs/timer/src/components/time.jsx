import './time.css';
import { useEffect, useRef, useState } from "react";

export function Time(){


    const [second,setSecond]=useState(0);

    const ref=useRef(null); //{current:10}



    useEffect(()=>{
        start() 
    },[]);

    const start=()=>{
        clearInterval(ref.current)
        ref.current= setInterval(()=>{           
            setSecond((preValue)=>{
                return preValue+1;
            });
        },1000);

    }
    const pause=()=>{
        clearInterval(ref.current)

    }
    const restart=()=>{
    setSecond(0)
       
    }


    return (
        <div className='container'>
            <h1>{second<10? "0"+second:second} Seconds</h1>
            <button onClick={pause}>Pause</button>
            <button onClick={start}>Start</button>
            <button onClick={restart}>Restart</button>
           
        </div>
    )
}