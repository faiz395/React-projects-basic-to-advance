import React, { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    lightTheme:()=>{},
    darkTheme: ()=>{},
    themeMode:false,
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}