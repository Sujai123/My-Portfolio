import { createUseStyles } from "react-jss"
import Heading1 from "../../components/Heading1"
import Typography from "../../components/Typography"
import shakthiImg from "../../assets/images/shakthiImg.jpeg"
import stjosephImg from "../../assets/images/stjosephImg.png"
import Heading3 from "../../components/Heading3"

const useStyles = createUseStyles({
  container: {
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "5rem",
    gap: "1em"
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
      <div>
        <Heading3>
          Sri Shakthi Institute of Engineering and Technology
        </Heading3>
        <Typography>
          2016 - 2020
        </Typography>
        <Typography>
          BE Computer Science and Engineering
        </Typography>
        <Typography>
          Secured 6.95 CGPA
        </Typography>
      </div>

      <div>
        <Heading3>
          St.Josephs's Metric Hr Secondary School
        </Heading3>
        <Typography>
          2016
        </Typography>
        <Typography>
          HSC
        </Typography>
        <Typography>
          Secured 93.33%
        </Typography>
      </div>

      <div>
        <Heading3>
          St.Josephs's Metric Hr Secondary School
        </Heading3>
        <Typography>
          2016
        </Typography>
        <Typography>
          SSLC
        </Typography>
        <Typography>
          Secured 93.40%
        </Typography>
      </div>
    </div>
  )
}

export default EducationalInfo