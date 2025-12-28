import { PERSONAL_PROJECTS } from "../lib/constants";
import AnimatedText from "./AnimatedText";
import Section from "./Section";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <Section id="projects">
      <AnimatedText
        text="Personal Projects"
        el="h2"
        className="text-3xl font-bold text-center mb-12"
      />
      <motion.div
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PERSONAL_PROJECTS.map((project, index) => (
          <motion.a
            key={index}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="block p-6 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors group"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-foreground/80 mb-4">{project.description}</p>
            <span className="flex items-center text-sm font-medium text-primary group-hover:underline">
              View Project
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
