import { useReducer } from "react";


const initialState={
    counter:0
}


function UseReducerExample(){

    const [state,dispatch]=useReducer(reducer,initialState)

    return (
        <div className="App">
            <h1>Counter: {state.counter}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            {/* To Pass a value from the component, we use payload */}
            <button onClick={()=>dispatch({type:"decrement",payload:5})}>Decrement</button>
            <button onClick={()=>dispatch({type:"double"})}>Double</button>
            <button onClick={()=>dispatch({type:"divide"})}>Divide</button>
        </div>
    )
}


function reducer(state,action){
    if(action.type==="increment"){
        return {counter:state.counter+1}
    }
    else if(action.type==="decrement"){
        return {counter:state.counter-action.payload}
    }
    else if(action.type==="double"){
        return {counter:state.counter*2}
    }
    else if(action.type==="divide"){
        return {counter:state.counter/2}
    }
    else{
        throw new Error("Incorrect type")
    }
}

export default UseReducerExample;