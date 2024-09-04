import React, { useState , useEffect} from 'react';

function Counter1(){
    const [count, setCount] = useState(0);
   

        useEffect(()=>{
            console.log("useEffect called");
        },[count])
    

    return (
        <>
        <p>count:{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </>
    )
}
export default Counter1;