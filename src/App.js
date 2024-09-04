import React from'react'
import ChildA from './components/ChildA';

function App(){
  const carbrand='BMW'
  const carcolor='red'

  return(
    <>
    <p>Car details</p>
    <ChildA brand={carbrand} color={carcolor}/>

    </>
  )
}export default App;