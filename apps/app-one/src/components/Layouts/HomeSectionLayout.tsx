import React from "react";

type HomeSectionLayoutProps = {
  children: React.ReactNode;
};

const HomeSectionLayout = (props: HomeSectionLayoutProps) => {
  const { children } = props;
  return <div className="home-section-layout">{children}</div>;
};

export default HomeSectionLayout;
