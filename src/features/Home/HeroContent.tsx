import Button from "../../components/Button";
import Text from "../../components/Text.js";
import TypeWriter from "../../components/TypeWriter.js";
import mountainMobileImg from '../../assets/images/mountain-mobile.jpg'
import mountainDesktopImg from '../../assets/images/mountain-desktop.jpg'

const HeroContent = () => {

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }

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
          <Button label="Let's Go" onClick={handleClick} />
        </div>
        <div className="hero-content__images">
          <picture>
            <source media="(min-width:650px)" srcSet={mountainDesktopImg} />
            <img src={mountainMobileImg} alt="Mountain" />
          </picture>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
