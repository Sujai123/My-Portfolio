import { createUseStyles } from "react-jss"
import Heading1 from "../../components/Heading1"
import Typography from "../../components/Typography"
import RentlySVG from '../../assets/images/RentlySVG.jsx'

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
    gridTemplateColumns: "repeat(auto-fit, 8em)",
    gridTemplateRows: "8em 12em",
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
  description: {
    gridColumn: '1 / 3',
    gridRow: '2 / 3',
  }
})

const WorkExperience = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Heading1>
          WorkExperience
      </Heading1>
      <div className={styles.grid}>
        <div>
          <RentlySVG />
        </div>
        <div className={styles.description}>

        </div>
      </div>
    </div>
  )
}

export default WorkExperience