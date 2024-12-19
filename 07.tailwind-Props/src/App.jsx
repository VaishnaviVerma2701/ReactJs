import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from  './component/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj ={
    name : "vaishnavi verma",
    age: 23,
  }

  return (
    <>
     <h1 className='bg-gray-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>
     <Card username ="vaishnavi" btnText="click me"/>
     <Card  username="vaishnavi's youtube" btnText="visit me"/> { /* this is defined the props  in username and  btnText */}
    </>
  )
}

export default App
