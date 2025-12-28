import AnimatedText from "./AnimatedText";
import Scene from "./Scene";
import Section from "./Section";

const Hero = () => {
  return (
    <Section className="!pt-32 md:!pt-40 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold">
          <AnimatedText text="Sujai Beniks J" el="span" />
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-foreground/80">
          <AnimatedText text="Creative Software Engineer" />
        </p>
      </div>
      <div className="w-full md:w-1/2 h-96 md:h-auto mt-10 md:mt-0">
        <Scene />
      </div>
    </Section>
  );
};

export default Hero;
