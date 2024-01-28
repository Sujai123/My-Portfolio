import HeroContent from '../features/Home/HeroContent'
import Details from '../features/Home/Details'
import { createUseStyles } from 'react-jss'
import AboutMe from '../features/Home/AboutMe'
import Skills from '../features/Home/Skills'
import Contributions from '../features/Home/Contributions'
import WorkExperience from '../features/Home/WorkExperience'
import EducationalInfo from '../features/Home/EducationalInfo'
import Contact from '../features/Home/Contact'
import PortfolioDetails from '../components/Layouts/PortfolioDetails'

const useStyles = createUseStyles({
  homeContainer: {
    position: 'relative'
  },
  home__heroContent: {
    height: "100vh",
    position: "relative",
  },
  home__detailContent: {
    height: "100vh",
    position: "relative"
  },
  layout: {

  }
})

const Home = () => {
  const styles = useStyles();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.home__heroContent}>
        <HeroContent />
      </div>
      {/* <div className={styles.home__heroContent}> */}
        {/* <Details /> */}
      {/* </div> */}
      {/* <PortfolioDetails> */}
        <div className={styles.home__detailContent}>
          <AboutMe />
        </div>
        <div className={styles.home__detailContent}>
          <Skills />
        </div>
        <div className={styles.home__detailContent}>
          <Contributions />
        </div>
        <div className={styles.home__detailContent}>
          <WorkExperience />
        </div>
        <div className={styles.home__detailContent}>
          <EducationalInfo />
        </div>
        <div className={styles.home__detailContent}>
          <Contact />
        </div>
      {/* </PortfolioDetails> */}
    </div>
  )
}

export default Home