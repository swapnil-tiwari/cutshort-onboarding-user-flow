import React from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";
import styles from "./form.module.css";

FormView2.propTypes = {};

function FormView2(props) {
  return (
    <div>
      <form>
        <div className={`form-group ${styles.formInputs}`}>
          <label>Workspace Name</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Steve Jobs"
          />
        </div>

        <div className={`form-group ${styles.formInputs}`}>
          <label>Workspace URL</label>
          <span>(Optional)</span>
          <input
            type="name"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Steve"
          />
        </div>

        <div className={`form-group ${styles.formInputs}`}>
          <Link to="/formView3">
            <input
              type="button"
              className={styles.controlButton}
              value="Create Workspace"
            />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormView2;
