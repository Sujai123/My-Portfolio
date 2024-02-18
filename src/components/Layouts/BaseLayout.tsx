import React from 'react'
import ArrowSVG from "../../assets/images/up-arrow.svg"

type BaseLayoutProps = {
  children: React.ReactNode
}

const BaseLayout = (props: BaseLayoutProps) => {
  const {children} = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="sb-base-layout">
      {/* <div className={styles.line}></div> */}
      {children}
      <div className='scroll-top-icon' onClick={scrollToTop}>
        <img src={ArrowSVG} alt="up-arrow" />
      </div>
    </div>
  )
}

export default BaseLayout