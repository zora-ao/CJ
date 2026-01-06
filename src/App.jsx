import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact.jsx";
import { ThemeProvider } from "./contexts/themeContext.js";
import { InteractiveGridPattern } from "./components/ui/interactive-grid-pattern";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");

  const lightMode = () => setThemeMode("light");
  const darkMode = () => setThemeMode("dark");

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className=" min-h-screen bg-background text-foreground">
        
        {/* 🔹 FULLSCREEN CENTERED BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-20 dark:opacity-15">
          <InteractiveGridPattern
            width={60}
            height={60}
            className="w-full h-full max-w-none"
          />
        </div>

        {/* 🔹 CONTENT */}
        <Header />
        <Hero />
        <Certificate />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
