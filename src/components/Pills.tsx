import React from 'react'
import { DefaultTheme, createUseStyles, useTheme } from 'react-jss'


const useStyles = createUseStyles(theme => ({
  container: {
    display: "inline-block",
    background: "#fff",
    color: theme.background.primary,
    fontSize: theme.fontSize.p,
    borderRadius: ".5rem",
    padding: ".2rem 1.5rem"
  }
}))

const Pills = (props) => {
  const {label} = props;
  const theme = useTheme<DefaultTheme>();
  const styles = useStyles(theme);

  return (
    <div className={styles.container}>
      {label}
    </div>
  )
}

export default Pills