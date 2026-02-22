import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { CONTACT_INFO } from "../lib/constants";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contributions", href: "#contributions" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-wider relative group">
          <span className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,255,127,0.8)] transition-all duration-300">S</span>B
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="hidden sm:inline-block px-5 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(0,255,127,0.4)] transition-all duration-300"
          >
            Get In Touch
          </a>

          <button
            onClick={toggleMenu}
            className="md:hidden text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-border/40"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-lg font-medium text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 py-2 border-b border-border/20 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                onClick={closeMenu}
                className="mt-4 px-5 py-3 text-center text-sm font-semibold rounded-xl bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 sm:hidden"
              >
                Get In Touch
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
