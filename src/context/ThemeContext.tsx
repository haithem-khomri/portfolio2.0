import React, { createContext, useState, useEffect } from "react";

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
  themeColors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
    tertiary: string;
  };
};

const darkTheme = {
  primary: "#050816",
  secondary: "#aaa6c3",
  background: "#050816",
  surface: "#151030",
  text: "#ffffff",
  textSecondary: "#aaa6c3",
  accent: "#915eff",
  border: "#2a2a5c",
  tertiary: "#151030",
};

const lightTheme = {
  primary: "#f9fafb",
  secondary: "#6b7280",
  background: "#ffffff",
  surface: "#f3f4f6",
  text: "#111827",
  textSecondary: "#4b5563",
  accent: "#7c3aed",
  border: "#e5e7eb",
  tertiary: "#e5e7eb",
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  themeColors: darkTheme,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const themeColors = theme === "dark" ? darkTheme : lightTheme;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light-mode", newTheme === "light");
    document.documentElement.classList.toggle("dark-mode", newTheme === "dark");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light-mode", savedTheme === "light");
    document.documentElement.classList.toggle("dark-mode", savedTheme === "dark");
    
    // Update CSS variables
    const currentTheme = savedTheme === "dark" ? darkTheme : lightTheme;
    Object.entries(currentTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, []);

  // Update CSS variables when theme changes
  useEffect(() => {
    Object.entries(themeColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, [theme, themeColors]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};