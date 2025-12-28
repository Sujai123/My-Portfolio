import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const Section = ({ children, className, ...props }) => {
  return (
    <motion.section
      className={cn("py-20 px-4", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default Section;
