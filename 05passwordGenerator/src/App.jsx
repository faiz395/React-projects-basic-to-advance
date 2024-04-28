import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // use Ref
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRESTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }
    for (let i = 1; i <= length; i++) {
      let val = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(val);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard =useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{passwordGenerator();
  }, [length,numberAllowed,charAllowed, passwordGenerator]);

  return (
    <>
      <div
        className="w-full  mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800"
        style={{}}
      >
        <h2 className="text-white text-center">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" id="numberInput" defaultChecked={numberAllowed} 
            onChange={()=>{
              setnumberAllowed((prev)=>{return !prev});
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" name="" id="charInput" defaultChecked={charAllowed} 
            onChange={()=>{
              setcharAllowed((prev)=>{return !prev});
            }}/>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
