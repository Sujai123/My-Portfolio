import React from 'react'
import { createUseStyles } from 'react-jss'

type PortfolioDetailsProps = {
  children: React.ReactNode
}

const useStyles = createUseStyles({
  container: {
    // position: "relative"
  },
  line: {
    width: ".2em",
    height: "80vh",
    backgroundColor: "#fff",
    // position: "fixed",
    top: "10%",
    left: '2rem'
  }
})

const PortfolioDetails = (props: PortfolioDetailsProps) => {
  const {children} = props;
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {/* <div className={styles.line}></div> */}
      {children}
    </div>
  )
}

export default PortfolioDetails