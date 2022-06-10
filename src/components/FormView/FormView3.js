import React from 'react'
import PropTypes from 'prop-types'
import styles from './form.module.css'

function FormView3(props) {
  return (
    <div>
        <div className={styles.view3Container}>
            <div className={styles.view3Box}>
                <p style={{fontWeight : "bolder"}}>For myself</p>
                <p style={{color: "grey"}}>Write better.Think more clearly.Stay organized.</p>     
            </div>
            <div className={styles.view3Box}>
                <p style={{fontWeight : "bolder"}}>With my team</p>
                <p style={{color: "grey"}}>Wikis, docs, tasks & projects, all in one place</p>   
            </div>
        </div>
    </div>
  )
}

FormView3.propTypes = {}

export default FormView3
