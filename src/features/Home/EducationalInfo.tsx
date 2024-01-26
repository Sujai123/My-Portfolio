import { createUseStyles } from "react-jss"
import Heading1 from "../../components/Heading1"
import Typography from "../../components/Typography"
import shakthiImg from "../../assets/images/shakthiImg.jpeg"
import stjosephImg from "../../assets/images/stjosephImg.png"

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
    gridTemplateColumns: "5em 5em",
    gridTemplateRows: "5em 5em",
    gap: "1rem",
    "& > div": {
      backgroundColor: "rgba(217, 217, 217, .2)",
      borderRadius: '1em',
    }
  }
})

const EducationalInfo = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Heading1>
          EducationalInfo
      </Heading1>
      <div className={styles.grid}>
        <div>
          <img src={shakthiImg} alt="" />
        </div>
        <div>
          <img src={stjosephImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default EducationalInfo