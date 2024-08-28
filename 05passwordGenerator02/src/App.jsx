import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(10)
  const [numAllowed, setNumAllowed]=useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword]= useState('');

  const passRef = useRef(null)

  const passwordGenerator = useCallback( ()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str+="1234567890"
    }
    if(charAllowed){
      str+="!@#%^&&*()[]{}"
    }
    for(let i=0;i<length;i++){
      let index = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(index);
    }

    setPassword(pass);
  },[length,numAllowed,charAllowed]);
  
  const copyToClipboard=useCallback(()=>{
    // console.log('Clicked')
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)},[password]);
  
  useEffect(()=>{
    return passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'> 
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password} 
            className='outline-none w-full py-1 px-3' 
            placeholder='Password' 
            readOnly
            ref={passRef} />
          <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}/>
              <label htmlFor="">Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" 
            id="numberInput" 
            defaultChecked={numAllowed}
            onChange={()=>setNumAllowed((prev)=>!prev)} />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" 
            id="numberInput" 
            defaultChecked={numAllowed}
            onChange={()=>setCharAllowed((prev)=>!prev)} />
            <label htmlFor="">Characters</label>
          </div>
        </div>
    </div>
        
      
    </>
  )
}

export default App
