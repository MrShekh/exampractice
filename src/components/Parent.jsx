import React from'react'
import ChildA from './components/ChildA';

function Parent(){
  const carbrand='BMW'
  const carcolor='red'

  return(
    <>
    <p>Car details</p>
    <ChildA brand={carbrand} color={carcolor}/>

    </>
  )
}export default Parent;