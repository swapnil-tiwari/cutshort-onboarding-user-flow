import React from 'react'
import PropTypes from 'prop-types'
import styles from './progressbar.module.css'
function ProgressBar(props) {
  let circleState=styles.circleTrue;
  return (
    <div className={styles.progressContainer}>
        <div className={styles.line}></div>
        <div className={styles.circleContainer}>
             <div className={`${circleState} ${styles.circle}`}>1</div>
             <div className={styles.circle}>2</div>
             <div className={styles.circle}>3</div>
             <div className={styles.circle}>4</div>
        </div>
        
    </div>
  )
}

ProgressBar.propTypes = {}

export default ProgressBar
