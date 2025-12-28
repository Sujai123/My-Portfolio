import { CONTRIBUTIONS } from "../lib/constants";
import AnimatedText from "./AnimatedText";
import Section from "./Section";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Contributions = () => {
  return (
    <Section id="contributions">
      <AnimatedText
        text="Contributions"
        el="h2"
        className="text-3xl font-bold text-center mb-12"
      />
      <motion.div
        className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CONTRIBUTIONS.map((contrib, index) => (
          <motion.div
            key={index}
            variants={item}
            className="text-center p-6 border border-primary/10 rounded-lg hover:shadow-md hover:shadow-primary/5"
          >
            {contrib.icon && <contrib.icon className="text-4xl text-primary mx-auto mb-4" />}
            <h3 className="text-lg font-bold">{contrib.platform}</h3>
            <p className="text-foreground/70 mt-2">{contrib.description}</p>
            {contrib.href && (
              <a
                href={contrib.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Contributions;
