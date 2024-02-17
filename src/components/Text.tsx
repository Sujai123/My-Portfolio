import React from "react";
import TEXT_VARIANTS from "../constants/textVariants";

type TextProps = {
  children: React.ReactNode;
  variant?: keyof typeof TEXT_VARIANTS;
};

const Text: React.FC<TextProps> = (props) => {
  const { children, variant = "p" } = props;
  let className = "";
  switch (variant) {
    case "h1":
      className = ".sb-text-xl";
      return <h1 className={className}>{children}</h1>;
    case "h2":
      className = ".sb-text-xl";
      return <h2 className={className}>{children}</h2>;
    case "h3":
      className = ".sb-text-lg";
      return <h3 className={className}>{children}</h3>;
    case "p":
      className = ".sb-text-base";
      return <p className={className}>{children}</p>;
  }
};

export default Text;