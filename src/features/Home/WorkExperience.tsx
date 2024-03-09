import Box from "../../components/Box";
import Image from "../../components/Image";
import HomeSectionLayout from "../../components/Layouts/HomeSectionLayout";
import Text from "../../components/Text";
import workExperience from "../../constants/workExperience";

const WorkExperience = () => {
  const { title, experiences } = workExperience;

  return (
    <HomeSectionLayout>
      <Text variant="xl">{title}</Text>
      {experiences.map((experience) => (
        <Box key={experience.logo}>
          <Image type={experience.logo} />
          <Text>{experience.year}</Text>
          <Text>{experience.description}</Text>
        </Box>
      ))}
    </HomeSectionLayout>
  );
};

export default WorkExperience;
