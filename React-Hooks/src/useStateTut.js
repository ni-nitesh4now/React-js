import { useState } from "react/cjs/react.development";
import React from "react";

const Statetut=()=>{
    const [c,setc]=useState(0);
    const increment=()=>{
        setc(c+1);
    };
    const [input, setinput]=useState('');
    let ch =(e)=>{
        const newv=e.target.value;
        setinput(newv);
    }
    const delet=(e)=>{
        setinput('');
    }
    return <div style={{display:'grid', alignContent:'center',justifyContent:'center'}}>
        <h1>useState hook Example</h1>
        <h2 style={{paddind:'10px',justifyContent:'center', display:'grid'}}>{c}</h2>
        <button onClick={increment}>Increment</button><br/>
        <input placeholder="Type here..." value={input} style={{width:input.length<5?50:input.length*5+50}} onChange={ch}/>
        <button onClick={delet}>Clear</button>
        <h1></h1>
    </div>
};

export default Statetut
