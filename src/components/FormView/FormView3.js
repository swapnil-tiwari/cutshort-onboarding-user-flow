import React from "react";
import PropTypes from "prop-types";
import styles from "./form.module.css";
import { Outlet, Link } from "react-router-dom";

function FormView3(props) {
  return (
    <div>
      <div className={styles.view3Container}>
        <div className={styles.view3Box}>
          <i class="fa-solid fa-user" style={{ fontSize: "30px" }}></i>

          <p style={{ fontWeight: "bolder", marginTop: "10px" }}>For myself</p>
          <p style={{ color: "grey" }}>
            Write better.Think more clearly.Stay organized.
          </p>
        </div>
        <div className={styles.view3Box}>
          <i class="fa-solid fa-users" style={{ fontSize: "30px" }}></i>
          <p style={{ fontWeight: "bolder", marginTop: "10px" }}>
            With my team
          </p>
          <p style={{ color: "grey" }}>
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>
      <Link to="/formView4">
        <input
          type="button"
          className={styles.controlButton}
          value="Create Workspace"
        />
      </Link>
    </div>
  );
}

FormView3.propTypes = {};

export default FormView3;
