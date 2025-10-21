import HeroContent from '../features/Home/HeroContent'
import AboutMe from '../features/Home/AboutMe'
import Skills from '../features/Home/Skills'
import Contributions from '../features/Home/Contributions'
import WorkExperience from '../features/Home/WorkExperience'
import EducationalInfo from '../features/Home/EducationalInfo'
import Contact from '../features/Home/Contact'
import HomeBaseLayout from '../components/Layouts/HomeBaseLayout'

const Home = () => {

  return (
    <HomeBaseLayout>
      <HeroContent />
      <AboutMe />
      <Skills />
      <Contributions />
      <WorkExperience />
      <EducationalInfo />
      <Contact />
    </HomeBaseLayout>
  )
}

export default Home