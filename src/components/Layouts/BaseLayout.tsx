import React from 'react'

type BaseLayoutProps = {
  children: React.ReactNode
}

const BaseLayout = (props: BaseLayoutProps) => {
  const {children} = props;

  return (
    <div className="sb-base-layout">
      {/* <div className={styles.line}></div> */}
      {children}
    </div>
  )
}

export default BaseLayout