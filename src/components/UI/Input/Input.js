import React, { useState, useEffect } from 'react'
import classes from './input.module.scss'

const Input = (props) => {
  const {
    id,
    type,
    initialValue='',
    style = {},
    large = false,
    signup = false,
    signin = false,
    placeholder,
    blurHandler,
    changeHandler,
    error = '',
  } = props

  const [onFocus, setOnFocus] = useState(false)
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    if (value.length) {
      setOnFocus(true)
    }
  }, [value])

  const onFocusLabelHandler = () => {
    setOnFocus(true)
  }

  const onBlurLabelHandler = () => {
    if (!value.trim()) {
      setOnFocus(false)
    }
  }

  return (
    <div
      className={`${classes.input}
       ${large && classes.input_large} ${signup && classes.input_signup} ${signin && classes.input_signin}`}
      style={style}
    >
      <div className={classes.input__container}>
        <label
          className={`${classes.input__label} 
            ${onFocus && classes.input__label_toTop}`}
          htmlFor={id}
        >
          {placeholder}
        </label>
        <input
          name={type}
          onFocus={onFocusLabelHandler}
          onBlur={(e) => {
            onBlurLabelHandler()
            blurHandler(e)
          }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            changeHandler(e)
          }}
          className={`${classes.input__element} ${
            error.length && classes.input__element_error
          }`}
          id={id}
          type={type}
          autoComplete={type}
          maxLength='50'
        />
      </div>
    </div>
  )
}

export default Input
