import React from "react";
import { DefaultTheme, createUseStyles, useTheme } from "react-jss";
import { ThemeProps } from "../constants/theme";

type TypographyProps = {
  children: string;
};

const useStyles = createUseStyles((theme: ThemeProps) => ({
  p: {
    fontSize: theme.fontSize.p,
  },
}));

const Typography = (props: TypographyProps) => {
  const { children } = props;
  const theme = useTheme<DefaultTheme>();
  const styles = useStyles(theme);

  return <p className={styles.p}>{children}</p>;
};

export default Typography;
