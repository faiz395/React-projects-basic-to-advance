import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0;
  let [counter,setCounter] = useState(0);
  

  const addValue=()=>{
    if(counter<20){
      counter++;
      setCounter(counter);
    }
    console.log("clicked to increase and counter is "+counter);
  }
  const removeValue=()=>{
    if(counter>0){
      counter--;
      setCounter(counter);  
    }
    console.log("clicked to decrease and counter is "+counter);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
