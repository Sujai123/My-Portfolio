import Button from "../../components/Button";
import Text from "../../components/Text.js";

const HeroContent = () => {
  return (
    <>
      <div className="sb-layout">
        <Text variant="h1">Hello There!</Text>
        <Text variant="h1">This is Sujai Beniks</Text>
        <Button label="Let's Go" />
      </div>
      <div>
        {/* <BoySVG />
        <GrassSVG /> */}
        {/* <MountainSVG /> */}
      </div>
    </>
  );
};

export default HeroContent;
