import { useState } from "react";

function Countery (){
    const [count, setCount] = useState(Number)
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () =>{
        const newReduce = count - 1 ;
        setCount(newReduce)
    }
    return(
        <div style={{border:'2px solid purple'}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
           
        </div>
    )
}

export default Countery;