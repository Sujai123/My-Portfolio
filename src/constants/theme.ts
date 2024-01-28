export type ThemeProps = {
  background: any,
  color: any,
  font: any,
  fontSize: any
}

const theme: ThemeProps = {
  background: {
    body: "linear-gradient(#16013B, #6D00A5, #4E74ED, #6D00A5, #16013B)",
    primary: "#1F0055",
  },
  color: {
    primary: "#fff",
  },
  font: {
    fontFamily: "'Mali', sans-serif",
  },
  fontSize: {
    h1: "clamp(2.5rem, 5vw, 4rem)",
    h3: "clamp(1.5rem, 2.5vw, 2rem)",
    button: "clamp(1.4rem, 2vw, 2rem)",
    p: "clamp(1.4rem, 2vw, 2rem)",
  },
};

export default theme;
