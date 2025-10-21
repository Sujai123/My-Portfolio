// import Button from "../../components/Button";
import Text from "../../components/Text.js";
import TypeWriter from "../../components/TypeWriter.js";
import HomeSectionLayout from "../../components/Layouts/HomeSectionLayout.js";
import Box from "../../components/Box.js";
import heroContent from "../../constants/heroContent.js";
import Image from "../../components/Image.js";

const HeroContent = () => {

  const { title, typeWriterTitle } = heroContent;

  // const handleClick = () => {
  //   window.scrollTo({
  //     top: window.innerHeight,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }

  return (
    <>
      <HomeSectionLayout>
        <Box>
          <Box marginBlock="md">
            <Text variant="xl">{title}</Text>
            <Text variant="lg" component="h2">
              <TypeWriter label={typeWriterTitle} speed={20} />
            </Text>
          </Box>
          {/* <Button label="Let's Go" onClick={handleClick} /> */}
        </Box>
        <Image type="night" imageType="background" />
      </HomeSectionLayout>
    </>
  );
};

export default HeroContent;
