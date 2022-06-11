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
    "/formView4": 4,
  };
  let msgsLarge = {
    "/": "Welcome! First things first",
    "/formView2": "Let's set up a home for all your work",
    "/formView3": "How are you planning to use Eden?",
    "/formView4": "Congratulations, Eren!",
  };
  let msgsSmall = {
    "/": "You can always change them later.",
    "/formView2": "You can always create another workspace later.",
    "/formView3": "We'll streamline your experience setup accordingly",
    "/formView4":
      "You have completed onboarding, you can start using the Eden!",
  };
  let done;
  if (location.pathname == "/formView4") {
    done = (
      <i
        class="fa-solid fa-circle-check"
        style={{ fontSize: "60px", color: "#664de5", marginBottom: "30px" }}
      ></i>
    );
  }
  let msgState = msgsLarge[location.pathname];
  let msgSmall = msgsSmall[location.pathname];
  return (
    <div className={styles.messageContainer}>
      {done}
      <h2>{msgState}</h2>
      <p>{msgSmall}</p>
    </div>
  );
}

MessageView.propTypes = {};

export default MessageView;
