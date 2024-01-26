import { createUseStyles } from "react-jss";
import Heading1 from "../../components/Heading1";
import Typography from "../../components/Typography";
import DoughNutChart from "../../components/DoughNutChart";
import { skillsChartData, skillsChartData2 } from "../../constants/chartData";

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
    gridTemplateColumns: "repeat(auto-fit, 25em)",
    gridTemplateRows: "25em 25em",
    gap: "1rem",
    "& > div": {
      backgroundColor: "rgba(217, 217, 217, .2)",
      borderRadius: "1em",
    },
  },
});

const Skills = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Heading1>Skills</Heading1>
      <div className={styles.grid}>
        <div>
          <DoughNutChart data={skillsChartData} />
        </div>
        <div>
          <DoughNutChart data={skillsChartData2} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
