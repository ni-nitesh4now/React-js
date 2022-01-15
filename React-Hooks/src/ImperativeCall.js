import React, {useRef} from 'react';
import Button from './useImperativeHandle';

function Imper(){
    const buttonRef= useRef(null);
    return(
        <div >
            <h1>useImperativeHandle Example</h1>
            <button onClick={()=>{buttonRef.current.alterTog();console.log('by parent');}}>Parent</button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default Imper