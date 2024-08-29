// src/context/ThemeContext.js
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const lightTheme = {
    mode: 'light',
    backgroundColor: '#ffffff',
    textColor: '#000000',
};

const darkTheme = {
    mode: 'dark',
    backgroundColor: '#000000',
    textColor: '#ffffff',
};

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme.mode === 'light' ? darkTheme : lightTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
