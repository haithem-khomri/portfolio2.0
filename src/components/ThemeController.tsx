import { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
}

const darkTheme = {
  primary: "#915eff",
  secondary: "#aaa6c3",
  background: "#050816",
  surface: "#151030",
  text: "#ffffff",
  textSecondary: "#aaa6c3",
  accent: "#915eff",
  border: "#2a2a5c",
};

const lightTheme = {
  primary: "#7c3aed",
  secondary: "#6b7280",
  background: "#ffffff",
  surface: "#f3f4f6",
  text: "#111827",
  textSecondary: "#4b5563",
  accent: "#7c3aed",
  border: "#e5e7eb",
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
  theme: darkTheme,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    // Update CSS variables
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme: () => setIsDarkMode(!isDarkMode),
        theme,
      }}
    >
      {children}
      <motion.button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
          isDarkMode ? "bg-white" : "bg-surface"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDarkMode ? "moon" : "sun"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDarkMode ? (
              <BsSun className="text-gray-800 text-xl" />
            ) : (
              <BsMoon className="text-gray-800 text-xl" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </ThemeContext.Provider>
  );
};
