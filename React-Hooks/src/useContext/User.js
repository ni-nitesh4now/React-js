import React, { useContext } from "react";
import { AppContext } from "./useContext";



//export default function User({username}){
export default function User(){
    const {username} = useContext(AppContext);
    return (
        <div>
            <h1>User:{username}</h1>
        </div>
    )
}
