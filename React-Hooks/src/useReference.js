import React from "react";
import {useRef} from 'react';

export default function RefTut(){
    const input=useRef(null);

    const onc=()=>{
        input.current.focus();
        console.log(input.current.value);
    };


    return(
        <div style={{display:'grid', alignContent:'center',justifyContent:'center'}}>
            <h1>useREderence Example:</h1>
            <input type='text' placeholder="Type.." ref={input} />
            <button onClick={onc}>Change</button>
        </div>
    );
}