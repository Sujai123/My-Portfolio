import HomeSectionLayout from "../../components/Layouts/HomeSectionLayout"
import Text from "../../components/Text"
import aboutMe from "../../constants/aboutMe"

const AboutMe = () => {
  return (
    <HomeSectionLayout>
      <Text variant="xl">
        {aboutMe.title}
      </Text>
      <Text>
        {aboutMe.description}
      </Text>
    </HomeSectionLayout>
  )
}

export default AboutMe