import React, {useReducer} from "react";
//it can be used to handle multiple useState funtions by using switch-cases
const reducer=(state, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return{count: state.count+1, showText:state.showText};
        case 'toggleShowText':
            return{count: state.count, showText:!state.showText};
            default:
                return state;
    }
}
const ReducerTut=()=>{
    /*const [count, setcount]=useState(0);
    const [showText, setText]=useState(true);*/
    const [state, dispatch] = useReducer(reducer,{ //define as much states as you want in const [x,y,y...] and initialise there default values
        count: 0,
        showText: true
    })
    return(
        <div style={{display:'grid', alignContent:'center',justifyContent:'center'}}>
            <h1>useReducer hook Example</h1>
            <h2>{state.count}</h2>
            <button
            onClick={()=>{
                //setcount(count+1);
                //setText(!showText);
                dispatch({type:'INCREMENT'});
                dispatch({type: 'toggleShowText'});
            }}>
                Click Here
            </button>
            {state.showText && <p>This is a text</p>}
        </div>
    )
}
export default ReducerTut
