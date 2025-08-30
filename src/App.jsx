import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import { useTheme } from './contexts/themeContext.js'
import { ThemeProvider } from './contexts/themeContext.js'
import { useEffect, useState } from "react"

const App = () => {

  const [themeMode, setThemeMode] = useState('dark');

  const lightMode = () => {
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    if (themeMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </ThemeProvider>
  )
}

export default App
