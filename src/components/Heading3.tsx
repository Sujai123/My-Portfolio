import React from "react"
import { DefaultTheme, createUseStyles, useTheme } from "react-jss";
import { ThemeProps } from "../constants/theme";

type heading1Props = {
  children: string;
};

const useStyles = createUseStyles((theme: ThemeProps) => ({
  h3: {
    fontSize: theme.fontSize.h3
  }
}));

const Heading3 = (props: heading1Props) => {
  const { children } = props;
  const theme = useTheme<DefaultTheme>();
  const styles = useStyles(theme);

  return <h3 className={styles.h3}>{children}</h3>;
};

export default Heading3;
