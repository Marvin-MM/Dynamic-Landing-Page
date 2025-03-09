
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/20 dark:bg-dark-900/80 backdrop-blur-xl py-3 shadow-sm" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <motion.a 
            href="/" 
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
              <div className="absolute inset-1 bg-white dark:bg-dark-900 rounded-full"></div>
              <div className="absolute inset-2 bg-blue-500 rounded-full"></div>
            </div>
            <span className="text-xl font-bold">DeskAid</span>
          </motion.a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.ul 
            className="flex space-x-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {navLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="hidden lg:inline-flex"
            >
              Log In
            </Button>
            <Button 
              className="hidden lg:inline-flex"
            >
              Sign Up Free
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden"
          >
            <Menu size={32} />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white dark:bg-dark-900 z-50 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center p-4 border-b bg-white dark:bg-dark-900">
              <a href="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
                  <div className="absolute inset-1 bg-white dark:bg-dark-900 rounded-full"></div>
                  <div className="absolute inset-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-xl font-bold">DeskAid</span>
              </a>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-8 w-8" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="p-4 bg-inherit">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={link.href} 
                      className="block py-2 text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 space-y-4">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
                <Button className="w-full">
                  Sign Up Free
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
