import React from "react";
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
    <Header  />
    <h1 className='bg-green-500'>React Router</h1>
    <Home/>
    <Footer />
    </>
  );
}

export default App
