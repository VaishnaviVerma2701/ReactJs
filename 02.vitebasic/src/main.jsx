import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// day 04: custome react app
function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// this is not directly executed  becuase there not write custom render method  and this page this syntax is not correct

// const ReactElement = {
//   type:'a',
//   props: {
//       href : 'https://google.com',
//       target: '_blank'
//   },
//   children : 'click me to visit google'
// } 

 const anotherelement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const username = "vaishnavi verma"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com' , target:'_blank'},
  'click me to visit google',
    username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode> esko likh bhi sakte hai or nhi bhi
    
    //  anotherelement // agar koi object ko run karna hai to React.StrictMode ko hata hi padega 
      //  <App/> 
    //  <MyApp/>
      reactElement
    
    // </React.StrictMode>   
)
