import React from'react';

function Filter(){
    const a = [1,2,3,4,5,6,];

    const b=a.filter(num=> num%2==0);

    return(
        <>  
        <h1>Even Numbers</h1>
    {b}
        </>
    )
}

export default Filter;