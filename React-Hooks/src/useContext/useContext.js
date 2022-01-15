import React, {useState, createContext} from "react";
import Login from "./Login";
import User from "./User";

//Normal/alternative way of doing is given in comments 

export const AppContext = createContext(null);

export default function ContextTut(){
    const [username, setUsername]= useState("");
   /* return(
        <div  style={{display:'grid', alignContent:'center',justifyContent:'center'}}>
        <Login setUsername={setUsername}/>
        <User username={username}/>
        </div>
    )*/
    return(
        <AppContext.Provider value={{username, setUsername}}  style={{display:'grid', alignContent:'center',justifyContent:'center'}}>
        <h1>useContext hook Example</h1>
        <Login />
        <User/>
        </AppContext.Provider>
    );

}