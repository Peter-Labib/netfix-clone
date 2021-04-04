import React from 'react'
import classes from './btn.module.scss'

const NfBtn = (props) => {
  const { style = {}, isLarge = false, forSign = false, clicked } = props
  return (
    <button
      className={`${classes.nfBtn} ${isLarge && classes.nfBtn_Big} ${
        forSign && classes.signBtn
      }`}
      style={style}
      onClick={clicked}
    >
      {props.children}
    </button>
  )
}

export default NfBtn
