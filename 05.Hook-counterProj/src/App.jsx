import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

// react create problem to 1 button clicked than multiple palce are update where that variable is present  
// like counter 

function App() {
 
  let [counter,setCounter]= useState(0) // useState is a hook that  is responsible for change state

   //let counter
  const addVlaue =()=>{
    //console.log("clicked" , counter);
   // counter = counter + 1;
   setCounter(counter + 1)
   if(counter >= 20){
    setCounter(counter)
   }
  }

  const removeVlaue =()=>{
   setCounter(counter - 1)
   if(counter <= 0){
    setCounter(counter)
   }
  }
  return (
    <>
        <h1>Hello User</h1>
        <h2>Counter Value = {counter}</h2>

        <button 
        onClick ={addVlaue}
        >Add Value =  {counter}</button>
        <br />

        <button 
        onClick={removeVlaue}>Remove Value  = {counter}</button>
    </>
  )
}

export default App
