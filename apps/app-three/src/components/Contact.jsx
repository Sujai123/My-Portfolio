import { SOCIAL_LINKS, CONTACT_INFO } from "../lib/constants";
import AnimatedText from "./AnimatedText";
import Section from "./Section";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedText
          text="Let's Connect"
          el="h2"
          className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff7f] to-[#00e5ff]"
        />
        <p className="text-slate-300 font-light text-lg mb-8">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="inline-block px-8 py-3 font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors mb-12"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-8">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-3xl text-foreground/70 hover:text-primary transition-colors"
            >
              <link.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
