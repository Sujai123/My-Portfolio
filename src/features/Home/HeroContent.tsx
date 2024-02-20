import Button from "../../components/Button";
import Text from "../../components/Text.js";
import MountainSVG from "../../assets/images/MountainSVG.jsx";
import BoySVG from '../../assets/images/BoySVG.jsx';
import GrassSVG from '../../assets/images/GrassSVG.jsx';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeWriter from "../../components/TypeWriter.js";

const HeroContent = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(".boy-svg", {
  //     scrollTrigger: ".about-me",
  //     y: -100,
  //   });
  // }, [])

  return (
    <>
      <div className="sb-layout">
        <div>
          <div className="hero-content__main">
            <Text variant="h1">Hello There!</Text>
            <Text variant="h1">
              <TypeWriter />
            </Text>
          </div>
          <Button label="Let's Go" />
        </div>
        {/* <div>
          <BoySVG className="boy-svg" />
          <GrassSVG className="grass-svg" />
          <MountainSVG className="mountain-svg" />
        </div> */}
      </div>
    </>
  );
};

export default HeroContent;
