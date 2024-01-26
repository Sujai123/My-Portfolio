import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  detailsContainer: {
    height: "100%",
    display: 'grid',
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "repeat(4, 1fr)",
    padding: '1em',
    gap: '1em',
    marginInline: "1em",

    "& > div": {
      backgroundColor: "rgba(217, 217, 217, .2)",
      borderRadius: '1em',
    }
  },
  mySkills: {
    gridRow: '2 / 4',
  },
  aboutMe: {
    gridRow: '2 / 5',
  }
})

const Details = () => {
  const styles = useStyles();
  return (
    <div className={styles.detailsContainer}>
      <div></div>
      <div></div>
      <div className={styles.mySkills}></div>
      <div className={styles.aboutMe}></div>
      <div></div>
    </div>
  )
}

export default Details