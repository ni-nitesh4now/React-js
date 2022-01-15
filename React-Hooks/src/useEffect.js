import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function EffectTut(){
    const [data, setdata]=useState('');


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            setdata(response.data[0].email);

        });
    },[]); // useeffect is called depending on the states present in [] , here zero
    return(
        <div style={{display:'grid', alignContent:'center',justifyContent:'center'}}>
            <h1>useEffect Example</h1>
            <div>Hello World {data}</div>
        </div>
    );
}
