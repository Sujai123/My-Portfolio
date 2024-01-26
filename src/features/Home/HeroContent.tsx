import Button from '../../components/Button'
import Heading1 from '../../components/Heading1'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  heroContentContainer: {
    position: "absolute",
    width: '80%',
    bottom: '20%',
    left: '10%',
    "& > div": {
      marginTop: '2rem',
    }
  }
})

const HeroContent = () => {
  const styles = useStyles()
  return (
    <div className={styles.heroContentContainer}>
      <Heading1>Hello There!</Heading1>
      <Heading1>This is Sujai Beniks</Heading1>
      <Button label="Let's Go" />
    </div>
  )
}

export default HeroContent