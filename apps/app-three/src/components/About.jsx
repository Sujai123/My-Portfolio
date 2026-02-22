import { AREA_OF_INTEREST } from "../lib/constants";
import AnimatedText from "./AnimatedText";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about">
      <AnimatedText
        text="About Me"
        el="h2"
        className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
      />
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {AREA_OF_INTEREST.map((interest, index) => (
            <p key={index} className="text-lg text-foreground/80 leading-relaxed">
              {interest}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
