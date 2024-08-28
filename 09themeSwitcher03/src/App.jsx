import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import {ThemeContext,ThemeProvider,useTheme} from './context/ThemeContext'

function App() {
  const [currMode,setCurrMode]=useState('light');
  const darkMode=()=>setCurrMode('dark');
  const lightMode=()=>setCurrMode('light');

  useEffect(()=>{
    let ele = document.querySelector('html');
    // console.log(ele);

    if(currMode=='light'){
      ele.classList="";
      ele.classList="light";
    }
    else{
      ele.classList="";
      ele.classList="dark";
    }
  },[currMode])


  return (
    <>
    <ThemeProvider value={{currMode,darkMode,lightMode}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

      </ThemeProvider>
    </>
  );
}

export default App;
