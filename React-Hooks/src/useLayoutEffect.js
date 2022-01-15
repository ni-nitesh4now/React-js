import React, { useEffect, useLayoutEffect } from 'react';
//both useLayoutEff and useEff are same but former occurs first
//maybe it is useless
export default function LEffTut(){
    useLayoutEffect(()=>{
        console.log('I knew I am faster');
    },[]);

    useEffect(()=>{
        console.log('I am useEffect');
    },[]);
    return (
    <div style={{display:'grid', alignContent:'center',justifyContent:'center'}}>
        <h1>This is useLayoutEffect hook. Output is in Console</h1>
    </div>);
}
