import { createUseStyles } from "react-jss"
import Heading1 from "../../components/Heading1"
import Typography from "../../components/Typography"
import IcodeThisSVG from '../../assets/images/icodeThisSVG.jsx'
import CodePenSVG from '../../assets/images/CodePen.jsx'
import CodeSandboxSVG from '../../assets/images/CodeSandBox.jsx'
import Heading3 from "../../components/Heading3.js"
import Pills from "../../components/Pills.js"
// import FrontendMentorSVG from '../../assets/images/FrontendMentor.svg'

const useStyles = createUseStyles({
  container: {
    padding: "1rem",
    height: "100%",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "5rem",
    gap: ".5em"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 8em)",
    gridTemplateRows: "8em 8em",
    gap: "1rem",
    "& > div": {
      backgroundColor: "rgba(217, 217, 217, .2)",
      borderRadius: '1em',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& > svg": {
        width: "3em",
        aspectRatio: "1"
      }
    }
  },
  pillsContainer: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }
})

const Contributions = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Heading1>
          Contributions
      </Heading1>
      <div>
        <Heading3>
          IcodeThis
        </Heading3>
        <Typography>
          Completed around 17 challenges in icodeThis Platform
        </Typography>
      </div>

      <div>
        <Heading3>
          CodePen
        </Heading3>
        <Typography>
        Developed around 10 few mini projects in CodePen Platform
        </Typography>
      </div>

      <div>
        <Heading3>
          CodeSandBox
        </Heading3>
        <Typography>
          Developed few mini projects in CodeSandbox Platform
        </Typography>
      </div>
    </div>
  )
}

export default Contributions