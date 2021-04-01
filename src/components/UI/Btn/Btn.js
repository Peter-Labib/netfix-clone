import React from 'react'
import classes from './btn.module.scss'

const NfBtn = (props) => {
  const { style = {}, isLarge = false } = props
  return (
    <button
      className={`${classes.nfBtn} ${isLarge && classes.nfBtn_Big}`}
      style={style}
    >
      {props.children}
    </button>
  )
}

export default NfBtn
