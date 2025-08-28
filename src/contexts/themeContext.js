import { createContext, useContext } from "react";

const createThemeContext = createContext({
    themeMode: 'light',
    lightMode: () => {},
    darkMode: () => {}
});

export const useTheme = () => {
    return useContext(createThemeContext);
}

export const ThemeProvider = createThemeContext.Provider;