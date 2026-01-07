import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/themeContext";
import { InteractiveGridPattern } from "./components/ui/interactive-grid-pattern";

const AppWrapper = ({ children }) => {
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
      <div className="relative min-h-screen bg-background text-foreground">
        {/* Background Grid */}
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-20 dark:opacity-15">
          <InteractiveGridPattern
            width={60}
            height={60}
            className="w-full h-full max-w-none"
          />
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default AppWrapper;
