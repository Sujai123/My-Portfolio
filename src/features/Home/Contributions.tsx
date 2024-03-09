import Box from "../../components/Box.js";
import HomeSectionLayout from "../../components/Layouts/HomeSectionLayout.js";
import Text from "../../components/Text.js";
import contributionsConstant from "../../constants/contributions.js";

const Contributions = () => {
  const { title, contributions } = contributionsConstant;
  return (
    <HomeSectionLayout>
      <Text variant="h1">{title}</Text>
      {contributions.map((contribution) => (
        <Box key={contribution.title}>
          <Text variant="h3">{contribution.title}</Text>
          <Text>{contribution.description}</Text>
        </Box>
      ))}
    </HomeSectionLayout>
  );
};

export default Contributions;
