import { createUseStyles } from "react-jss"
import Heading1 from "../../components/Heading1"
import Typography from "../../components/Typography"

const useStyles = createUseStyles({
  container: {
    padding: "1rem",
    height: "100%",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "5rem",
    maxWidth: "90em"
  }
})

const AboutMe = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Heading1>
          About Me
      </Heading1>
      <Typography>
        Passionate about crafting seamless web experiences, I bring concepts to life with elegant UIs and robust backends. Let's turn your ideas into digital marvels! 💻✨
      </Typography>
    </div>
  )
}

export default AboutMe