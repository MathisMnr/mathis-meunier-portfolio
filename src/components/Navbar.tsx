import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Mindset", href: "#mindset" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#hero" className="font-display text-xl font-bold gradient-text">
          MM
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="/CV_Mathis_Meunier.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass text-sm font-medium text-foreground hover:bg-card/80 transition-all"
          >
            <Download size={14} /> CV
          </a>

          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border/50"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/CV_Mathis_Meunier.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download size={14} /> Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
