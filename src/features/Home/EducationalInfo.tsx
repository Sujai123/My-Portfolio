import Box from "../../components/Box";
import HomeSectionLayout from "../../components/Layouts/HomeSectionLayout";
import Text from "../../components/Text";
import educationalInfoConstant from "../../constants/educationalInfo";

const EducationalInfo = () => {
  const { title, educationalInfo } = educationalInfoConstant;
  return (
    <HomeSectionLayout>
      <Text variant="xl">{title}</Text>
      {educationalInfo.map((detail) => (
        <Box key={detail.course}>
          <Text variant="lg">{detail.title}</Text>
          <Text>{detail.year}</Text>
          <Text>{detail.course}</Text>
          <Text>{detail.grade}</Text>
        </Box>
      ))}
    </HomeSectionLayout>
  );
};

export default EducationalInfo;
