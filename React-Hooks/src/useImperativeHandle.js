import React, { useImperativeHandle,useRef, useState, forwardRef } from 'react';

const Button=forwardRef((props,ref)=>{
    const [toggle, setTogg]= useState(false);
function alterTogC(){
    setTogg(!toggle);
}
useImperativeHandle(ref,() => ({
    alterTog(){
        setTogg(!toggle);
    },
}));
return(
    <>
    <button onClick={()=>{alterTogC();console.log('by Child');}}>Child</button>
    {toggle &&<h2>Toggling Text</h2>}
    </>
);
});

export default Button
