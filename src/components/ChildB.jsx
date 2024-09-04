import React,{useEffect, useState} from'react'

function ChildB(){
    const [data, setData]= useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>response.json())
        .then(json=>setData(json))
        .catch(error=>console.error(error));


    },[])
return(
    <>
    {data ? <pre>{JSON.stringify(data,null,2)}</pre>: 'loading...'}
    </>
)
}export default ChildB;