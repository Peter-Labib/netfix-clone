import React, { useState } from 'react'
import classes from './input.module.scss'

const Input = (props) => {
  const { id, type, style = {}, placeholder, isLarge= false } = props
  const [onFocus, setOnFocus] = useState(false)
  const [value, setValue] = useState('')

  const onFocusLabelHandler = () => {
    setOnFocus(true)
  }

  const onBlurLabelHandler = ()=>{
    if (!value.trim()) {
        setOnFocus(false)
    }
  }

  return (
    <div className={`${classes.input} ${isLarge&&classes.input_Large}`} style={style}>
      <label
        className={`${classes.input__label} 
            ${onFocus && classes.input__label_toTop}`}
        htmlFor={id}
      >
        {placeholder}
      </label>
      <input
        onFocus={onFocusLabelHandler}
        onBlur={onBlurLabelHandler}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.input__element}
        id={id}
        type={type}
        autoComplete={type}
        maxLength='50'
      />
    </div>
  )
}

export default Input
