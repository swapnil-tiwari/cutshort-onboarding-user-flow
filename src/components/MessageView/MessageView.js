import React from 'react'
import PropTypes from 'prop-types'
import styles from './message.module.css'
function MessageView(props) {
  return (
    <div className={styles.messageContainer}>
        <h2>{props.msgLarge}</h2>
        <p>{props.msgSmall}</p>
    </div>
  )
}

MessageView.propTypes = {}

export default MessageView
