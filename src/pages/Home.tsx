import HeroContent from '../features/Home/HeroContent'
import AboutMe from '../features/Home/AboutMe'
import Skills from '../features/Home/Skills'
import Contributions from '../features/Home/Contributions'
import WorkExperience from '../features/Home/WorkExperience'
import EducationalInfo from '../features/Home/EducationalInfo'
import Contact from '../features/Home/Contact'
import BaseLayout from '../components/Layouts/BaseLayout'

const Home = () => {

  return (
    <BaseLayout>
      <div>
        <HeroContent />
      </div>
        <div>
          <AboutMe />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Contributions />
        </div>
        <div>
          <WorkExperience />
        </div>
        <div>
          <EducationalInfo />
        </div>
        <div>
          <Contact />
        </div>
    </BaseLayout>
  )
}

export default Home