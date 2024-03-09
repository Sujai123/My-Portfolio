import Text from "../../components/Text";
import Pills from "../../components/Pills";
import Box from "../../components/Box";

type SkillsDetailsProps = {
  title: string,
  pills: string[],
  description: string
}

const SkillDetails = (props: SkillsDetailsProps) => {
  const {title, pills, description} = props;
  return (
    <Box>
      <Text variant="lg">{title}</Text>
      <Pills
        label={pills}
      />
      <Text>
        {description}
      </Text>
    </Box>
  );
};

export default SkillDetails;
