import React from "react";
import PropTypes from "prop-types";
import styles from "./progressbar.module.css";
import { useLocation } from "react-router-dom";

function ProgressBar(props) {
  let circleState = styles.circleTrue;

  const location = useLocation();
  console.log(location.pathname);
  let paths = {
    "/": 1,
    "/formView2": 2,
    "/formView3": 3,
    "/formView4": 4,
  };
  let progress = paths[location.pathname];
  return (
    <div className={styles.progressContainer}>
      <div className={styles.line}>
        <div
          style={{
            width: progress == 4 ? "300px" : `${50 + 100 * (progress - 1)}px`,
          }}
          className={styles.innerLine}
        ></div>
      </div>
      <div className={styles.circleContainer}>
        <div className={`${progress >= 1 && circleState} ${styles.circle}`}>
          1
        </div>
        <div className={`${progress >= 2 && circleState} ${styles.circle}`}>
          2
        </div>
        <div className={`${progress >= 3 && circleState} ${styles.circle}`}>
          3
        </div>
        <div className={`${progress >= 4 && circleState} ${styles.circle}`}>
          4
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {};

export default ProgressBar;
