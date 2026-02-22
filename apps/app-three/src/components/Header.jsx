import { motion } from "framer-motion";
import { CONTACT_INFO } from "../lib/constants";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-xl font-bold tracking-wider">
          <span className="text-primary">S</span>B
        </a>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="px-4 py-2 text-sm font-medium border rounded-full border-primary/50 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
