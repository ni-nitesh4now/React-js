import React, { useContext } from "react";
import { AppContext } from "./useContext";


//export default  function Login({setUsername}){
export default  function Login(){
    const {setUsername}=useContext(AppContext);
        return(
        <div>
            <input onChange={(e)=>{
                setUsername(e.target.value);
            }}/>
        </div>
    )
}