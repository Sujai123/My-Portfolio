import { SKILLS } from "../lib/constants";
import AnimatedText from "./AnimatedText";
import Section from "./Section";
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <skill.icon className="text-primary" />
          <span>{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <Section id="skills">
      <AnimatedText
        text="Skills"
        el="h2"
        className="text-3xl font-bold text-center mb-12"
      />
      <div className="max-w-4xl mx-auto space-y-12">
        <SkillCategory title="Frontend" skills={SKILLS.frontend} />
        <SkillCategory title="Backend" skills={SKILLS.backend} />
        <SkillCategory title="Database" skills={SKILLS.database} />
      </div>
    </Section>
  );
};

export default Skills;
