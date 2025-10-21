import React from 'react'

type BoxProps = {
  children: React.ReactNode,
  marginBlock?: 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
}

const Box = (props: BoxProps) => {
  const {children, marginBlock = 'none'} = props

  let classes = ""
  switch(marginBlock) {
    case 'none':
      classes += 'box-margin-block-none'
      break;
    case 'xxxs':
      classes += 'box-margin-block-xxxs'
      break;
    case 'xxs':
      classes += 'box-margin-block-xxs'
      break;
    case 'xs':
      classes += 'box-margin-block-xs'
      break;
    case 'sm':
      classes += 'box-margin-block-sm'
      break;
    case 'md':
      classes += 'box-margin-block-md'
      break;
    case 'lg':
      classes += 'box-margin-block-lg'
      break;
    case 'xl':
      classes += 'box-margin-block-xl'
      break;
    case 'xxl':
      classes += 'box-margin-block-xxl'
      break;
    case 'xxxl':
      classes += 'box-margin-block-xxxl'
  }
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Box;
