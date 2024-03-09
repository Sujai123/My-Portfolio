import React from 'react'
import ScrollHandler from '../ScrollHandler'

type HomeBaseLayoutProps = {
  children: React.ReactNode
}

const HomeBaseLayout = (props: HomeBaseLayoutProps) => {
  const {children} = props;

  return (
    <div className="home-base-layout">
      {children}
      <ScrollHandler />
    </div>
  )
}

export default HomeBaseLayout