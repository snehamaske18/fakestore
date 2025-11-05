import { createContext, useState } from "react";

export let ThemeContext=createContext();

function ThemeProvider(props){
let [theme, settheme]=useState('light')
    return (
        <ThemeContext.Provider value={{theme, settheme}}>
          {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;