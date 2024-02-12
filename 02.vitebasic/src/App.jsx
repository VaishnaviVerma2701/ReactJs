
import  Chai from "./chai"

function App() {
 const username ="this is may channel"
  return (
    // we remove the ather containt because jsx return only one close tag . so we write this  type to return multiple tag
    <>
  <Chai/> 
  <h1>this is our react page using vite with vaishnavi verma {username}</h1>
  </>
  )
}

export default App
