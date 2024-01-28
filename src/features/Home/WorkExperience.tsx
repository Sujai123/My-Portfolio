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
    gridTemplateColumns: "8em minmax(20em, 100em)",
    gridTemplateRows: "8em 25em",
    gap: "1rem",
    "& > div": {
      backgroundColor: "rgba(217, 217, 217, .2)",
      borderRadius: '1em',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& > svg": {
        width: "3em",
        aspectRatio: "1",
        
        "& > path": {
          fill: "orange"
        }
      }
    }
  },
  description: {
    gridColumn: '1 / 3',
    gridRow: '2 / 3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "start !important",
    alignItems: 'start !important',
    overflow: "hidden !important",
    padding: "1em",
    textOverflow: "ellipsis"
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
          <Typography>Since 2020</Typography>
          <Typography>
            Working for about 4 years, currently playing the role of Senior Software Engineer, 
            Worked on multiple modules building the client requirements with high quality responsive website along with unit testing.
            One of my key contribution is integrating Single Sign On to the we application.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience