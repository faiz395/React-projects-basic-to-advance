import React from "react"
import { useState } from "react"
function App() {
  const [color, setColor]=useState('blue');
  return (
    <>
      <div className="bg-slate-300 w-screen h-screen flex align-middle justify-end flex-col flex-wrap" style={{backgroundColor:color}}>
        <div className="border-2 w-auto h-auto m-6 bg-white flex align-middle justify-center p-2 rounded-lg shadow-md flex-wrap">
          <button onClick={()=>setColor('blue')} className="border-2 px-4 py-1 border-white rounded-lg text-lg shadow-sm bg-blue-400 text-white hover:bg-blue-900">Blue</button>
          <button onClick={()=>setColor('Yellow')} className="border-2 px-4 py-1 border-white rounded-lg text-lg shadow-sm bg-yellow-400 text-white hover:bg-yellow-900">Yellow</button>
          <button onClick={()=>setColor('Red')} className="border-2 px-4 py-1 border-white rounded-lg text-lg shadow-sm bg-red-400 text-white hover:bg-red-900">Red</button>
          <button onClick={()=>setColor('Pink')} className="border-2 px-4 py-1 border-white rounded-lg text-lg shadow-sm bg-pink-400 text-white hover:bg-red-900">pink</button>
          <button onClick={()=>setColor('violet')} className="border-2 px-4 py-1 border-white rounded-lg text-lg shadow-sm bg-violet-400 text-white hover:bg-violet-900">Violet</button>
          <button onClick={()=>setColor('Orange')} className="border-2 px-4 py-1 border-white rounded-lg text-lg shadow-sm bg-orange-400 text-white hover:bg-orange-900">Orange</button>
          <button onClick={()=>setColor('black')} className="border-2 px-4 py-1 border-white rounded-lg text-lg shadow-sm bg-black text-white hover:bg-black-900">Black</button>
          <button onClick={()=>setColor('white')} className="border-2 px-4 py-1 border-black rounded-lg text-lg shadow-sm bg-white-400 text-black hover:bg-white-900">White</button>
        </div>

      </div>
    </>
  )
}

export default App
