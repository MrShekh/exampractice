    import React, { useState } from 'react';



    function Counter(){
        const [count, setCount] = useState(1);

        const increment =()=>{
            if(count<20)
            setCount(count + 1);
        }

        const decrement =()=>{
            if(count>1)
            setCount(count -1);
        }

        return(
            <>
            <p>count:{count}</p>
            {count===10&&<p>its ten number</p>}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            </>
        )
    }
    export default Counter