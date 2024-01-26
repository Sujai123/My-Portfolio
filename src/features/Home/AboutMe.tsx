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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta consequuntur assumenda facere, quis animi suscipit voluptates distinctio nobis exercitationem eveniet quo qui fugit reiciendis error magni quas omnis asperiores, voluptatum quam reprehenderit rem. Aut perspiciatis, veniam ex quaerat, nisi consequatur quo sunt dolores beatae vel, hic cum! Cumque, aspernatur?
      </Typography>
    </div>
  )
}

export default AboutMe