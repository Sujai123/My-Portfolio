import { createUseStyles } from "react-jss"
import Heading1 from "../../components/Heading1"
import FacebookIcon from '../../assets/images/facebook.png'
import InstagramIcon from '../../assets/images/instagram.jpeg'
import LinkedInIcon from '../../assets/images/linkedin.png'
import GithubIcon from '../../assets/images/github.png'
import Heading3 from "../../components/Heading3"
import Typography from "../../components/Typography"

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
      <div>
        <Heading3>
          Email
        </Heading3>
        <Typography>
          sujaibeniks001@gmail.com
        </Typography>
      </div>

      <div>
        <Heading3>
          Mobile
        </Heading3>
        <Typography>
          8220752490
        </Typography>
      </div>

      <div>
        <Heading3>
          Facebook
        </Heading3>
        <Typography>
        https://m.facebook.com/sujai.beniks.5
        </Typography>
      </div>

      <div>
        <Heading3>
          Instagram
        </Heading3>
        <Typography>
        https://www.instagram.com/__silent___eyes____/
        </Typography>
      </div>

      <div>
        <Heading3>
          Linked In
        </Heading3>
        <Typography>
        https://www.linkedin.com/mwlite/in/sujai-beniks-j-89693616b
        </Typography>
      </div>

      <div>
        <Heading3>
          Github
        </Heading3>
        <Typography>
        https://github.com/Sujai123/
        </Typography>
      </div>
    </div>
  )
}

export default Contact