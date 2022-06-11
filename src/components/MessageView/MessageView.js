import React from "react";
import PropTypes from "prop-types";
import styles from "./message.module.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
function MessageView(props) {
  const location = useLocation();
  console.log(location.pathname);
  let paths = {
    "/": 1,
    "/formView2": 2,
    "/formView3": 3,
  };
  let msgsLarge = {
    "/": "Welcome! First things first",
    "/formView2": "Let's set up a home for all your work",
  };
  let msgsSmall = {
    "/": "You can always change them later.",
    "/formView2": "You can always create another workspace later.",
  };
  let msgState = msgsLarge[location.pathname];
  let msgSmall = msgsSmall[location.pathname];
  return (
    <div className={styles.messageContainer}>
      <h2>{msgState}</h2>
      <p>{msgSmall}</p>
    </div>
  );
}

MessageView.propTypes = {};

export default MessageView;
