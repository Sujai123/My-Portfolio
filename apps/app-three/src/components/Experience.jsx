import { PROFESSIONAL_EXPERIENCE } from "../lib/constants";
import AnimatedText from "./AnimatedText";
import Section from "./Section";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Experience = () => {
  return (
    <Section id="experience">
      <AnimatedText
        text="Work Experience"
        el="h2"
        className="text-3xl font-bold text-center mb-12"
      />
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PROFESSIONAL_EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            variants={item}
            className="p-6 border border-primary/20 rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="font-semibold text-primary">{exp.company}</p>
              </div>
              <p className="text-sm text-foreground/60">{exp.period}</p>
            </div>
            <p className="mt-4 text-foreground/80">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;
