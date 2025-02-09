import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg  bg-white  px-2 py-3 rounded-2xl">
            <button 
             onClick={() =>setColor("red")}
            className="outline-none px-3 py-1  rounded-full text-white shadow-lg"
               style ={{backgroundColor: "red"}}>
              Red</button>

              <button 
               onClick={() =>setColor("green")}
            className="outline-none px-3 py-1  rounded-full text-white shadow-lg"
               style ={{backgroundColor: "green"}}>
              Green</button>

              <button 
               onClick={() =>setColor("blue")}
            className="outline-none px-3 py-1  rounded-full text-white shadow-lg"
               style ={{backgroundColor: "blue"}}>
              Blue</button>

            
              <button 
               onClick={() =>setColor("deeppink")}
            className="outline-none px-3 py-1  rounded-full text-white shadow-lg"
               style ={{backgroundColor: "deeppink"}}>
              pink</button>

              <button 
               onClick={() =>setColor("gray")}
            className="outline-none px-3 py-1  rounded-full text-white shadow-lg"
               style ={{backgroundColor: "gray"}}>
              Gray</button>

              <button 
               onClick={() =>setColor("yellow")}
            className="outline-none px-3 py-1  rounded-full text-white shadow-lg"
               style ={{backgroundColor: "yellow"}}>
              yellow</button>

              <button 
               onClick={() =>setColor("purple")}
            className="outline-none px-3 py-1  rounded-full text-white shadow-lg"
               style ={{backgroundColor: "purple"}}>
              purple</button>

              <button 
               onClick={() =>setColor("lavender")}
            className="outline-none px-3 py-1  rounded-full text-white shadow-lg"
               style ={{backgroundColor: "lavender"}}>
              lavender</button>

              <button 
               onClick={() =>setColor("white")}
            className="outline-none px-3 py-1  rounded-full text-black shadow-lg"
               style ={{backgroundColor: "white"}}>
              white</button>

              <button
               onClick={() =>setColor("black")} 
            className="outline-none px-3 py-1  rounded-full text-white shadow-lg"
               style ={{backgroundColor: "black"}}>
              black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App


