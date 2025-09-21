import React, { createContext, useState } from 'react'


const ThemeContext = createContext(null);

const ThemeContextHolder = ({children}) => {

    const [theme] = useState({
                         background:"bg-gray-700",
                         color:"text-white"
                        })

const [isDark, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{theme,isDark, setDarkTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextHolder;
export {ThemeContext};
