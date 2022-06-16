import React from "react";
import styles from "./form.module.css";
import { Outlet, Link } from "react-router-dom";

function FormView(props) {
  return (
    <div>
      <form>
        <div className={`form-group ${styles.formInputs}`}>
          <label>Full Name</label>
          <input
            type="name"
            class="form-control"
            id="fullName"
            aria-describedby="emailHelp"
            placeholder="Steve Jobs"
          />
        </div>

        <div className={`form-group ${styles.formInputs}`}>
          <label>Display Name</label>
          <input
            type="name"
            className="form-control"
            id="dispName"
            placeholder="Steve"
            required
          />
        </div>

        <div className={`form-group ${styles.formInputs}`}>
          <Link to="/formView2">
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

export default FormView;
