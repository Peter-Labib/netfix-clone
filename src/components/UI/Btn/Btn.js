import React from 'react'
import classes from './btn.module.scss'

const NfBtn = (props) => {
  const {
    style = {},
    isLarge = false,
    forSign = false,
    clicked,
    type = '',
    loading = false,
  } = props
  return (
    <button
      className={`${classes.nfBtn} ${isLarge && classes.nfBtn_Big} ${
        forSign && classes.signBtn
      } ${loading && classes.nfBtn_loading}`}
      style={style}
      onClick={clicked}
      type={type}
    >
      {loading ? (
        <i className='icon-spin6 animate-spin' style={{ fontSize: '20px' }} />
      ) : (
        props.children
      )}
    </button>
  )
}

export default NfBtn
