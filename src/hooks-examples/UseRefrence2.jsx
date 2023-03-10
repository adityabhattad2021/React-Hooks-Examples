import { useState,useRef } from "react";

function useRefrenceExample2(){

    const [startTime, setStartTime] = useState(null);
    const [now,setNow]=useState(null);
    const intervalRef=useRef(null);

    function handleStart(){
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current);
        intervalRef.current=setInterval(()=>{
            setNow(Date.now())
        },10)
    }

    function handleStop(){
        clearInterval(intervalRef.current);
    }
    
    let secondPassed=0;
    if(startTime!=null && now !=null){
        secondPassed=(now-startTime)/1000;
    }

    return (
        <div className="App">
            <h1>Time Passed: {secondPassed.toFixed(2)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default useRefrenceExample2;