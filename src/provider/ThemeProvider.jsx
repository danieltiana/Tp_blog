import { createContext, useEffect, useState } from 'react'
const themeContext = createContext()

function ThemeProvider (children) {
  const [theme, setTheme] = useState(null)

  const getTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme
  }
  /*
    const toogleTheme= useCallback(()=>{
                if(theme === "light"){
                setTheme("dark");
                localStorage.setItem('theme', 'dark')
                }else{
                setTheme("light");
      localStorage.setItem('theme', 'light')
}
        })
    */

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (!getTheme()) {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme(getTheme())
    }
  }, [])

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider
