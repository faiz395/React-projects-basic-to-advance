import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/card"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 classNameName="bg-green-400">Tailwind Test</h1>
      <Card name="Faiz" btn="Click Here"/>
      <Card name="Farhan" btn="Start Now"/>
    </>
  );
}

export default App;
