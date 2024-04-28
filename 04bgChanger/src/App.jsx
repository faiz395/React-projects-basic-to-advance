import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Color from './components/Color'

function App() {

  const [color, setColor] = useState('black');

  
  
  return (
    
      <div className="w-full h-screen duration-200 d-flex " style={{backgroundColor:color}}>
        <div className='w-full d-flex items-center justify-center'>
          <button onClick={()=>{setColor('white')}} className='bg-white black'>
            <span className='text-black'>White</span>
          </button>
          <button onClick={()=>{setColor('black')}} className='bg-white white'>
            <span className='text-black'>Black</span>
          </button>
          <button onClick={()=>{setColor('red')}} className='bg-white black'>
            <span className='text-black'>Red</span>
          </button>
          <button onClick={()=>{setColor('blue')}} className='bg-white black'>
            <span className='text-black'>Blue</span>
          </button>
          <button onClick={()=>{setColor('green')}} className='bg-white black'>
            <span className='text-black'>Green</span>
          </button>
        </div>
      </div>
   
  )
}

export default App
