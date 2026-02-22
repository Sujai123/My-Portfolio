import AnimatedText from "./AnimatedText";
import Section from "./Section";

const Hero = () => {
  return (
    <Section className="!pt-32 md:!pt-40 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="md:w-full text-center md:text-left flex flex-col justify-center items-center md:items-start z-10">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff7f] to-[#00e5ff] pb-2">
          <AnimatedText text="Sujai Beniks J" el="span" />
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-slate-300 font-light drop-shadow-md">
          <AnimatedText text="Software Engineer" />
        </p>
      </div>
    </Section>
  );
};

export default Hero;
