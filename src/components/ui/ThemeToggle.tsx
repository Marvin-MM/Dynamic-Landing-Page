
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const root = window.document.documentElement;
    const isDarkMode = 
      theme === "dark" || 
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    root.classList.toggle("dark", isDarkMode);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-full"
    >
      <motion.div 
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ 
          opacity: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : -30,
          y: theme === "dark" ? 0 : -10
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="h-5 w-5" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, rotate: 30 }}
        animate={{ 
          opacity: theme === "dark" ? 0 : 1,
          rotate: theme === "dark" ? 30 : 0,
          y: theme === "dark" ? 10 : 0
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="h-5 w-5" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
