import Box from "../../components/Box";
import HomeSectionLayout from "../../components/Layouts/HomeSectionLayout";
import Text from "../../components/Text";
import contact from "../../constants/contact";

const Contact = () => {
  const { title, details } = contact;

  return (
    <HomeSectionLayout>
      <Text variant="xl">{title}</Text>
      {details.map((detail) => (
        <Box key={detail.title}>
          <Text variant="lg">{detail.title}</Text>
          <Text>{detail.value}</Text>
        </Box>
      ))}
    </HomeSectionLayout>
  );
};

export default Contact;
