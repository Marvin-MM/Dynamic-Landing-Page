import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  // Function to apply the theme
  const applyTheme = (theme: "light" | "dark" | "system") => {
    const root = window.document.documentElement;
    const isDarkMode =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", isDarkMode);
  };

  // Set the initial theme based on system 
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
    applyTheme(systemTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = () => {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        setTheme(systemTheme);
        applyTheme(systemTheme);
      };
      mediaQuery.addEventListener("change", handleSystemThemeChange);

      // Cleanup listener
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
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
          y: theme === "dark" ? 0 : -10,
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
          y: theme === "dark" ? 10 : 0,
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