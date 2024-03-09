import HomeSectionLayout from "../../components/Layouts/HomeSectionLayout";
import Text from "../../components/Text";
import skillsConstant from "../../constants/skills";
import SkillDetails from "./SkillDetails";

const Skills = () => {
  const {title, skills} = skillsConstant;
  return (
    <HomeSectionLayout>
      <Text variant="h1">{title}</Text>
      {skills.map(skill => (
        <SkillDetails
          key={skill.title}
          title={skill.title}
          pills={skill.languages}
          description={skill.description}
        />
      ))}
    </HomeSectionLayout>
  );
};

export default Skills;
