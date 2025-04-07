import { motion, AnimatePresence } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg"
      style={{ 
        backgroundColor: isDarkMode ? "#ffffff" : "#151030",
        boxShadow: `0 0 10px ${isDarkMode ? "#915eff40" : "#7c3aed40"}`
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDarkMode ? "moon" : "sun"}
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 180 }}
          transition={{ duration: 0.2 }}
        >
          {isDarkMode ? (
            <BsSun className="text-gray-800 text-xl" />
          ) : (
            <BsMoon className="text-white text-xl" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;