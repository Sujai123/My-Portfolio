import React from "react";

type TextProps = {
  children: React.ReactNode;
  variant?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
};

const Text: React.FC<TextProps> = (props) => {
  const { children, variant = "base", component = "p" } = props;
  let className = '';
  switch (variant) {
    case "xs":
      className += "sb-text-xs";
      break
    case "sm":
      className += "sb-text-sm";
      break
    case "base":
      className += "sb-text-base";
      break
    case "lg":
      className += "sb-text-lg";
      break
    case "xl":
      className += "sb-text-xl";
      break
  }

  switch(component) {
    case "h1":
      return <h1 className={className}>{children}</h1>
    case "h2":
      return <h2 className={className}>{children}</h2>
    case "h3":
      return <h3 className={className}>{children}</h3>
    case "h4":
      return <h4 className={className}>{children}</h4>
    case "h5":
      return <h5 className={className}>{children}</h5>
    case "h6":
      return <h6 className={className}>{children}</h6>
    case "p":
      return <p className={className}>{children}</p>
  }
};

export default Text;
