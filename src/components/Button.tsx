import { createUseStyles, useTheme, DefaultTheme } from "react-jss";
import { ThemeProps } from "../constants/theme";
type ButtonProps = {
  label: string;
};

const useStyles = createUseStyles((theme: ThemeProps) => ({
  button: {
    display: "inline-block",
    fontSize: theme.fontSize.button,
    fontFamily: theme.font.fontFamily,
    textDecoration: "none",
    color: theme.color.primary,
    padding: "1em 3em",
    borderRadius: "2em",

    backgroundColor: theme.background.primary,
  },
}));

const Button = (props: ButtonProps) => {
  const { label } = props;
  const theme = useTheme<DefaultTheme>();
  const styles = useStyles(theme);

  return (
    <div>
      <a className={styles.button} href="#">
        {label}
      </a>
    </div>
  );
};

export default Button;
