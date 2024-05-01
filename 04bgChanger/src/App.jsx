import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('black');

  return (
    
      <div className="w-full h-screen duration-200 d-flex " style={{backgroundColor:color}}>
        <div className='w-full d-flex items-center justify-center'>
          <button onClick={()=>{setColor('white')}} className='bg-white black'>
            <span className='text-black'>White</span>
          </button>
          <button onClick={()=>{setColor('black')}} className='bg-black-600 white'>
            <span className='text-white'>Black</span>
          </button>
          <button onClick={()=>{setColor('red')}} className='bg-red-600 black'>
            <span className='text-white'>Red</span>
          </button>
          <button onClick={()=>{setColor('blue')}} className='bg-blue-600 black'>
            <span className='text-white'>Blue</span>
          </button>
          <button onClick={()=>{setColor('green')}} className='bg-green-600 black'>
            <span className='text-white'>Green</span>
          </button>
        </div>
      </div>
   
  )
}

export default App
