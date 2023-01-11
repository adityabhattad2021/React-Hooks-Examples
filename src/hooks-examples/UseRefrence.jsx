import {useRef} from "react";


function UseRefrenceExample(){

    let ref=useRef(0);

    function handleClick(){
        ref.current=ref.current+1;
        console.log(`Clicked ${ref.current} times.`);
    }

    return (
        <div>
           <button onClick={handleClick}>Click Here</button>
        </div>
    )
}




export default UseRefrenceExample;