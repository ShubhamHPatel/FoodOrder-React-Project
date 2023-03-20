import React from 'react'

import styles from '../scss/button.module.scss'

const Button = (props) => {

  var variant =  props.variant == 'Secondary'?'Secondary':'Primary';

  return (
    <button className={styles.btn} data-variant={variant} onClick={props.onClick}>
        {props.value}
    </button>
  )
}

export default Button