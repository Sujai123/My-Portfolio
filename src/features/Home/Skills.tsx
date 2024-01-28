import { createUseStyles } from "react-jss";
import Heading1 from "../../components/Heading1";
import Typography from "../../components/Typography";
import DoughNutChart from "../../components/DoughNutChart";
import { skillsChartData, skillsChartData2 } from "../../constants/chartData";
import Heading3 from "../../components/Heading3";
import Pills from "../../components/Pills";

const useStyles = createUseStyles({
  container: {
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "5rem",
    gap: ".5em"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 25em)",
    gridTemplateRows: "25em 25em",
    gap: "1rem",
    "& > div": {
      backgroundColor: "rgba(217, 217, 217, .2)",
      borderRadius: "1em",
    },
  },
  pillsContainer: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }
});

const Skills = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Heading1>Area of Interest | Skills</Heading1>
      <div>
        <Heading3>
          Frontend Web Development
        </Heading3>
        <div className={styles.pillsContainer}>
          <Pills label="HTML, CSS" />
          <Pills label="Javascript" />
          <Pills label="React" />
        </div>
        <Typography>
          Having around 4 years of experience working on react js technology across various libraries.
        </Typography>
      </div>

      <div>
        <Heading3>
          Backend Development
        </Heading3>
        <div className={styles.pillsContainer}>
          <Pills label="NodeJS" />
          <Pills label="Ruby on Rails" />
        </div>
        <Typography>
          Having 2 years of experience working on Ruby on rails and out of enthusiasm I've self learned on nodejs technology.
        </Typography>
      </div>

      <div>
        <Heading3>
          DataBase
        </Heading3>
        <div className={styles.pillsContainer}>
          <Pills label="Postgres" />
        </div>
        <Typography>
          Having 2 years of experience working on PostgreSQL.
        </Typography>
      </div>

      <div>
        <Heading3>
          Web Designing
        </Heading3>
        <div className={styles.pillsContainer}>
        <Pills label="Figma" />
        <Pills label="Inkscape" />
        </div>
        <Typography>
          Out of enthusiasm, I've tried using Web designing tools.
        </Typography>
      </div>
    </div>
  );
};

export default Skills;
