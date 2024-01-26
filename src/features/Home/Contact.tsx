import { createUseStyles } from "react-jss"
import Heading1 from "../../components/Heading1"
import FacebookIcon from '../../assets/images/facebook.png'
import InstagramIcon from '../../assets/images/instagram.jpeg'
import LinkedInIcon from '../../assets/images/linkedin.png'
import GithubIcon from '../../assets/images/github.png'

const useStyles = createUseStyles({
  container: {
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 5em)",
    gridTemplateRows: "5em",
    gap: "1rem",
    "& > div": {
      backgroundColor: "rgba(217, 217, 217, .2)",
      borderRadius: '1em',
      "& > img": {
        borderRadius: '1em',
      }
    }
  }
})

const Contact = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Heading1>
          Contact
      </Heading1>
      <div className={styles.grid}>
        <div>
          <img src={FacebookIcon} alt="" />
        </div>
        <div>
          <img src={InstagramIcon} alt="" />
        </div>
        <div>
          <img src={LinkedInIcon} alt="" />
        </div>
        <div>
          <img src={GithubIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact