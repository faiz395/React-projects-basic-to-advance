import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    currMode:'light',
    darkMode:()=>{},
    lightMode:()=>{},
});

export const ThemeProvider=ThemeContext.Provider;

export function useTheme(){
    return useContext(ThemeContext);
}