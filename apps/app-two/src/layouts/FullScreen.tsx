import type React from "react";

type P = {
  children: React.ReactNode;
};
const HeroLayout: React.FC<P> = (props) => {
  const { children } = props;
  return (
    <div className="h-screen flex justify-center items-center p-8">
      <div>{children}</div>
    </div>
  );
};

export default HeroLayout;
