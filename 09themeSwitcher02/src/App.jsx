import { useState, useContext, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import { ThemeContext } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  // const {lightTheme,darkTheme,themeMode}=useContext(ThemeContext);
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme=()=>{
    setThemeMode('light');
  }
  const darkTheme=()=>{
    setThemeMode('dark');
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
