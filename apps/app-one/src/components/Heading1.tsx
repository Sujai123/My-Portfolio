import React from "react"
import { DefaultTheme, createUseStyles, useTheme } from "react-jss";
import { ThemeProps } from "../constants/theme";

type heading1Props = {
  children: string;
};

const useStyles = createUseStyles((theme: ThemeProps) => ({
  h1: {
    fontSize: theme.fontSize.h1
  }
}));

const Heading1 = (props: heading1Props) => {
  const { children } = props;
  const theme = useTheme<DefaultTheme>();
  const styles = useStyles(theme);

  return <h1 className={styles.h1}>{children}</h1>;
};

export default Heading1;
