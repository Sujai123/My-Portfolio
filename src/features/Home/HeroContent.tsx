import Button from "../../components/Button";
import Text from "../../components/Text.js";
import TypeWriter from "../../components/TypeWriter.js";
import HomeSectionLayout from "../../components/Layouts/HomeSectionLayout.js";
import Box from "../../components/Box.js";
import heroContent from "../../constants/heroContent.js";
import Image from "../../components/Image.js";

const HeroContent = () => {

  const { title, typeWriterTitle } = heroContent;

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <HomeSectionLayout>
        <Box>
          <Box marginBlock="md">
            <Text variant="h1">{title}</Text>
            <Text variant="h1">
              <TypeWriter label={typeWriterTitle} />
            </Text>
          </Box>
          <Button label="Let's Go" onClick={handleClick} />
        </Box>
        <Image type="mountain-desktop" imageType="background" />
      </HomeSectionLayout>
    </>
  );
};

export default HeroContent;
