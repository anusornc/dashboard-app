"use client"

import React, { createContext, useContext, useState,
useEffect} from "react"

// Create the interface for the theme object
interface ThemeContextType {
    mode: string;
    setMode: (mode:string) => void;
}

// Create the context object and set the default value to an empty object
// ThemeContext is the context object
// ThemeContextType is the type of the context object |undefined is the default value
const ThemeContext = createContext<ThemeContextType|undefined>(undefined) // create a context object and {} is the default value which {} is an empty object

export function ThemeProvider({children}:{children:React.ReactNode}) {
    const [mode, setMode] = useState('');

    const handleThemeChange = () => {
        if (mode === 'dark') {
            setMode('light');
            document.documentElement.classList.add('light');
        } else {
            setMode('dark');
            document.documentElement.classList.add('dark');
        } 
        
    };

    // useEffect when mode changes call handleThemeChange function
    useEffect(()=>{
        handleThemeChange();
    }, [mode])

    return (
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    )
    

}

// custom hook to consume the theme context
// this hook will be used in components that need the theme object
// this hook will throw an error if used outside of the ThemeProvider
// useTheme hook returns the theme object
// Example: const {mode, setMode} = useTheme();
// mode is the current theme mode
// setMode is the function to toggle the theme mode
export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}