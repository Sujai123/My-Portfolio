import { createUseStyles } from "react-jss"
import Heading1 from "../../components/Heading1"
import Typography from "../../components/Typography"
import IcodeThisSVG from '../../assets/images/icodeThisSVG.jsx'
import CodePenSVG from '../../assets/images/CodePen.jsx'
import CodeSandboxSVG from '../../assets/images/CodeSandBox.jsx'
// import FrontendMentorSVG from '../../assets/images/FrontendMentor.svg'

const useStyles = createUseStyles({
  container: {
    padding: "1rem",
    height: "100%",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "5rem"
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
  }
})

const Contributions = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Heading1>
          Contributions
      </Heading1>
      <div className={styles.grid}>
        <div>
          <IcodeThisSVG />
        </div>
        <div>
          <CodePenSVG />
        </div>
        <div>
          <CodeSandboxSVG />
        </div>
      </div>
    </div>
  )
}

export default Contributions