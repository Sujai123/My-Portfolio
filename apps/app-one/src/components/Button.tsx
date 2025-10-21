import React from "react";

type ButtonProps = {
  label: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>
};


const Button = (props: ButtonProps) => {
  const { label, onClick: handleClick } = props;

  return (
    <div>
      <a className="sb-button" href="#" onClick={handleClick}>
        {label}
      </a>
    </div>
  );
};

export default Button;
